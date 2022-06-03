import {
    CHAR_EN_DASH,
    CHAR_HYPHEN,
    CHAR_NO_BREAK_SPACE,
    CHAR_PLUS,
    tuiAssert,
} from '@taiga-ui/cdk';
import {
    MASK_CARET_TRAP,
    TUI_DIGIT_REGEXP,
    TUI_LEADING_ZEROES_REGEXP,
    TUI_NON_DIGITS_REGEXP,
} from '@taiga-ui/core/constants';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';
import {TuiNumberMaskOptions, TuiTextMaskListHandler} from '@taiga-ui/core/mask';
import {TuiDecimalSymbol} from '@taiga-ui/core/types';
import {otherDecimalSymbol} from '@taiga-ui/core/utils/format';

const NON_ZERO_DIGIT = /[1-9]/;

/**
 * Adaptation for {@link https://github.com/text-mask/text-mask/tree/master/addons#createnumbermask `createNumberMask`}
 */
export function tuiCreateNumberMask({
    allowDecimal = false,
    decimalSymbol = ',',
    thousandSymbol = CHAR_NO_BREAK_SPACE,
    autoCorrectDecimalSymbol = true,
    decimalLimit = 2,
    requireDecimal = false,
    allowNegative = false,
    integerLimit = 0,
    signMode = 'negative-only',
}: TuiNumberMaskOptions = {}): TuiTextMaskListHandler {
    tuiAssert.assert(Number.isInteger(decimalLimit));
    tuiAssert.assert(decimalLimit >= 0);
    tuiAssert.assert(Number.isInteger(integerLimit));
    tuiAssert.assert(integerLimit >= 0);

    return (rawValue, {previousConformedValue}) => {
        if (previousConformedValue && requireDecimal) {
            const conformedWithoutSeparator = rawValue.split(thousandSymbol).join('');
            const previousConformedValueWithoutDecimalSymbolAndSeparator =
                previousConformedValue
                    .split(thousandSymbol)
                    .join('')
                    .split(decimalSymbol)
                    .join('');

            // Forbid removal of decimal separator if decimal part is required
            if (
                conformedWithoutSeparator ===
                previousConformedValueWithoutDecimalSymbolAndSeparator
            ) {
                rawValue = previousConformedValue;
            }
        }

        if (
            isDecimalSymbol(rawValue, decimalSymbol, autoCorrectDecimalSymbol) &&
            allowDecimal
        ) {
            return ['0', decimalSymbol, TUI_DIGIT_REGEXP];
        }

        const {sign, noSignValue} = extractSign(rawValue);

        const decimalIndex = getDecimalSymbolIndex(
            noSignValue,
            decimalSymbol,
            autoCorrectDecimalSymbol,
        );
        const hasDecimal = decimalIndex !== -1;
        const integer = hasDecimal ? noSignValue.slice(0, decimalIndex) : noSignValue;
        const thousandSeparators = integer.match(new RegExp(thousandSymbol, 'g')) || [];
        const integerCapped = integerLimit
            ? integer.slice(0, integerLimit + thousandSeparators.length)
            : integer;
        const integerCappedClean = integerCapped.replace(TUI_NON_DIGITS_REGEXP, '');
        const [leadingZerosMatch] = integerCappedClean.match(
            TUI_LEADING_ZEROES_REGEXP,
        ) || [''];
        const leadingZerosAmount = leadingZerosMatch.length;
        const integerCappedZerosClean = integerCappedClean
            .replace(/^0+(?!\.|$)/, '')
            .trim();
        const withSeparator = addThousandsSeparator(
            integerCappedZerosClean,
            thousandSymbol,
        );
        const mask = convertToMask(withSeparator);

        if ((hasDecimal && allowDecimal) || requireDecimal) {
            const fraction = hasDecimal
                ? convertToMask(
                      noSignValue
                          .slice(decimalIndex + 1)
                          .replace(TUI_NON_DIGITS_REGEXP, ''),
                  )
                : [];
            const fractionCapped = decimalLimit
                ? fraction.slice(0, decimalLimit)
                : fraction;

            if (noSignValue[decimalIndex] !== otherDecimalSymbol(decimalSymbol)) {
                mask.push(MASK_CARET_TRAP);
            }

            mask.push(decimalSymbol, MASK_CARET_TRAP, ...fractionCapped);

            for (let i = 0; i < decimalLimit - fractionCapped.length; i++) {
                mask.push(TUI_DIGIT_REGEXP);
            }
        }

        const isOnlyZeroDigit = mask.length === 1 && integerCappedZerosClean === '0';
        const maskWithSign = addSign({
            mask,
            signMode,
            rawValue,
            allowNegative,
            sign: sign || CHAR_PLUS,
        });

        return preventLeadingZeroes(maskWithSign, isOnlyZeroDigit, leadingZerosAmount);
    };
}

function preventLeadingZeroes(
    mask: Array<string | RegExp>,
    isOnlyZeroDigit: boolean = false,
    leadingZerosAmount: number = 0,
): Array<string | RegExp> {
    if (isOnlyZeroDigit || leadingZerosAmount === 0) {
        return mask;
    }

    const firstDigitIndex = mask.indexOf(TUI_DIGIT_REGEXP);

    if (firstDigitIndex === -1) {
        return mask;
    }

    const secondMaskDigit = mask[firstDigitIndex + 1];
    const isCaretTrap = secondMaskDigit === MASK_CARET_TRAP;

    if (isCaretTrap && leadingZerosAmount === 1) {
        return mask;
    } else if (isCaretTrap) {
        mask.unshift(NON_ZERO_DIGIT);

        return mask;
    }

    mask[firstDigitIndex] = NON_ZERO_DIGIT;

    return mask;
}

function getDecimalSymbolIndex(
    str: string,
    decimalSymbol: TuiDecimalSymbol,
    autoCorrectDecimalSymbol: boolean,
): number {
    if (!autoCorrectDecimalSymbol) {
        return str.lastIndexOf(decimalSymbol);
    }

    return Math.max(
        str.lastIndexOf(decimalSymbol),
        str.lastIndexOf(otherDecimalSymbol(decimalSymbol)),
    );
}

function isDecimalSymbol(
    str: string,
    decimalSymbol: TuiDecimalSymbol,
    autoCorrectDecimalSymbol: boolean,
): boolean {
    if (autoCorrectDecimalSymbol) {
        return /^[,.]$/.test(str);
    }

    return str === decimalSymbol;
}

function convertToMask(strNumber: string): Array<string | RegExp> {
    return strNumber
        .split('')
        .map(char => (TUI_DIGIT_REGEXP.test(char) ? TUI_DIGIT_REGEXP : char));
}

function addThousandsSeparator(strNumber: string, thousandSymbol: string): string {
    return strNumber.length > 3
        ? strNumber.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSymbol)
        : strNumber;
}

function extractSign(rawValue: string): {
    noSignValue: string;
    sign: '' | typeof CHAR_HYPHEN | typeof CHAR_PLUS;
} {
    const firstChar = rawValue[0];

    if (TUI_DIGIT_REGEXP.test(firstChar)) {
        return {noSignValue: rawValue, sign: ''};
    }

    const noSignValue = rawValue.slice(1);
    const isNegative = firstChar === CHAR_HYPHEN || firstChar === CHAR_EN_DASH;

    return {noSignValue, sign: isNegative ? CHAR_HYPHEN : CHAR_PLUS};
}

function addSign({
    mask,
    signMode,
    sign,
    rawValue,
    allowNegative,
}: {
    mask: Array<string | RegExp>;
    sign: typeof CHAR_HYPHEN | typeof CHAR_PLUS;
    signMode: TuiNumberFormatSettings['signMode'];
    rawValue: string;
    allowNegative: boolean;
}): Array<string | RegExp> {
    const notEmptyMask = mask.length ? mask : [TUI_DIGIT_REGEXP];
    const onlyZeros = !NON_ZERO_DIGIT.test(rawValue);

    if (onlyZeros || signMode === 'never') {
        return mask;
    }

    if (signMode === 'force-positive') {
        return [CHAR_PLUS, ...notEmptyMask];
    }

    if (signMode === 'force-negative') {
        return [CHAR_HYPHEN, ...notEmptyMask];
    }

    if (allowNegative && sign === CHAR_HYPHEN) {
        return [CHAR_HYPHEN, ...notEmptyMask];
    }

    if (signMode === 'always' && sign === CHAR_PLUS) {
        return [CHAR_PLUS, ...notEmptyMask];
    }

    return mask;
}
