import {CHAR_PLUS} from '@taiga-ui/cdk';

/**
 * Formats a string with the phone format +7XXXXXXXXXXXX or XXXXXXXXXXXX,
 * adding parentheses and hyphens.
 *
 * @param value the input string
 * @param countryCode a country code
 * @param phoneMask a phone number mask
 * @return the formatted phone string of the form +7 XXX XXX-XX-XX
 */
export function tuiFormatPhone(
    value: string,
    countryCode: string,
    phoneMask: string,
): string {
    if (!value) {
        return ``;
    }

    let result = countryCode;

    countryCode = countryCode.replace(/[()]/g, ``);

    if (!value.startsWith(countryCode)) {
        value = countryCode + value.replace(CHAR_PLUS, ``);
    }

    const splitPhoneMask = phoneMask.split(``);
    const splitValue = value.slice(countryCode.length).split(``);

    result += ` `;

    if (splitValue.length === 0) {
        return result;
    }

    for (const segment of splitPhoneMask) {
        if (splitValue.length === 0) {
            break;
        }

        if (segment === `#`) {
            result += splitValue[0] || ``;
            splitValue.splice(0, 1);
        } else {
            result += segment;
        }
    }

    return result;
}
