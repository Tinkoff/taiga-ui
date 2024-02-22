import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    HostBinding,
    HostListener,
    inject,
    InjectionToken,
    Input,
    QueryList,
    ViewChild,
} from '@angular/core';
import {maskitoInitialCalibrationPlugin, MaskitoOptions} from '@maskito/core';
import {
    maskitoCaretGuard,
    maskitoNumberOptionsGenerator,
    maskitoParseNumber,
} from '@maskito/kit';
import {
    AbstractTuiNullableControl,
    AbstractTuiValueTransformer,
    CHAR_HYPHEN,
    CHAR_MINUS,
    EMPTY_QUERY,
    TUI_IS_IOS,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiClamp,
    TuiFocusableElementAccessor,
    TuiInputMode,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_NUMBER_FORMAT,
    TUI_TEXTFIELD_SIZE,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    TuiDecimal,
    tuiFormatNumber,
    tuiGetFractionPartPadded,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
} from '@taiga-ui/core';
import {PolymorpheusOutletDirective} from '@tinkoff/ng-polymorpheus';

import {TUI_INPUT_NUMBER_OPTIONS} from './input-number.options';

const DEFAULT_MAX_LENGTH = 18;

export const TUI_NUMBER_VALUE_TRANSFORMER = new InjectionToken<
    AbstractTuiValueTransformer<number | null>
>('');

@Component({
    selector: 'tui-input-number',
    templateUrl: './input-number.template.html',
    styleUrls: ['./input-number.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputNumberComponent),
        tuiAsControl(TuiInputNumberComponent),
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
})
export class TuiInputNumberComponent
    extends AbstractTuiNullableControl<number>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly numberFormat = inject(TUI_NUMBER_FORMAT);
    private readonly isIOS = inject(TUI_IS_IOS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    private unfinishedValue: string | null = '';

    @ContentChildren(PolymorpheusOutletDirective, {descendants: true})
    protected readonly polymorpheusValueContent: QueryList<unknown> = EMPTY_QUERY;

    protected readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);

    protected override readonly valueTransformer = inject<
        AbstractTuiValueTransformer<number | null>
    >(TUI_NUMBER_VALUE_TRANSFORMER, {optional: true});

    protected readonly options = inject(TUI_INPUT_NUMBER_OPTIONS);

    @Input()
    public min: number | null = this.options.min;

    @Input()
    public max: number | null = this.options.max;

    @Input()
    public decimal = this.options.decimal;

    @Input()
    public precision = this.options.precision;

    @Input()
    public step = this.options.step;

    @HostBinding('attr.data-size')
    public get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    public get computedMin(): number {
        return this.computeMin(this.min, this.max);
    }

    public get computedMax(): number {
        return this.computeMax(this.min, this.max);
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
        return !this.textfield || this.computedDisabled
            ? null
            : this.textfield.nativeFocusableElement;
    }

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    public get isNegativeAllowed(): boolean {
        return this.computedMin < 0;
    }

    public get inputMode(): TuiInputMode {
        if (this.isIOS && this.isNegativeAllowed) {
            // iPhone does not have minus sign if inputMode is equal to 'numeric' / 'decimal'
            return 'text';
        }

        return this.decimal === 'never' ? 'numeric' : 'decimal';
    }

    public get calculatedMaxLength(): number {
        const decimalPart =
            this.decimal !== 'never' &&
            this.nativeValue.includes(this.numberFormat.decimalSeparator);
        const precision = decimalPart ? Math.min(this.precision + 1, 20) : 0;
        const takeThousand = this.numberFormat.thousandSeparator.repeat(5).length;

        return DEFAULT_MAX_LENGTH + precision + takeThousand;
    }

    public get formattedValue(): string {
        return this.value !== null ? this.getFormattedValue(this.value || 0) : '';
    }

    public get computedValue(): string {
        return this.focused ? this.nativeValue : this.formattedValue;
    }

    public get canDecrement(): boolean {
        return this.interactive && (this.value || 0) > this.computedMin;
    }

    public get canIncrement(): boolean {
        return this.interactive && (this.value || 0) < this.computedMax;
    }

    public get computedPrefix(): string {
        return this.controller.prefix;
    }

    public get computedPostfix(): string {
        const postfix = this.controller.postfix;

        return postfix && ` ${postfix}`;
    }

    public get mask(): MaskitoOptions {
        return this.calculateMask(
            this.precision,
            this.decimal,
            this.numberFormat.decimalSeparator,
            this.numberFormat.thousandSeparator,
            this.computedMin,
            this.computedMax,
            this.computedPrefix,
            this.computedPostfix,
        );
    }

    @HostListener('keydown.arrowDown', ['-step'])
    @HostListener('keydown.arrowUp', ['step'])
    public onArrow(step: number | null): void {
        if (!step) {
            return;
        }

        this.value = tuiClamp(
            (this.value || 0) + step,
            this.computedMin,
            this.computedMax,
        );
        this.nativeValue = this.formattedValue;
    }

    public onValueChange(nativeValue: string): void {
        const parsedValue = maskitoParseNumber(
            nativeValue,
            this.numberFormat.decimalSeparator,
        );

        this.unfinishedValue = null;

        if (Number.isNaN(parsedValue)) {
            this.value = null;

            return;
        }

        if (this.isNativeValueNotFinished) {
            this.unfinishedValue = nativeValue;

            return;
        }

        if (parsedValue < this.computedMin || parsedValue > this.computedMax) {
            return;
        }

        this.value = parsedValue;
    }

    public onFocused(focused: boolean): void {
        this.updateFocused(focused);

        const nativeNumberValue = this.unfinishedValue
            ? maskitoParseNumber(this.unfinishedValue, this.numberFormat.decimalSeparator)
            : this.nativeNumberValue;

        this.unfinishedValue = null;

        if (Number.isNaN(nativeNumberValue)) {
            this.nativeValue = focused ? this.computedPrefix + this.computedPostfix : '';
            this.value = null;

            return;
        }

        if (!focused) {
            this.value = nativeNumberValue;
            this.nativeValue = this.formattedValue;
        }
    }

    public getFormattedValue(value: number): string {
        const absValue = Math.abs(value);
        const hasFraction = absValue % 1 > 0;
        let decimalLimit =
            this.decimal === 'always' || (hasFraction && this.decimal !== 'never')
                ? this.precision
                : 0;

        const fraction = hasFraction
            ? tuiGetFractionPartPadded(value, this.precision)
            : '';

        if (this.focused && this.decimal !== 'always') {
            decimalLimit = fraction.length;
        }

        return (
            this.computedPrefix +
            tuiFormatNumber(value, {
                ...this.numberFormat,
                decimalLimit,
            }).replace(CHAR_HYPHEN, CHAR_MINUS) +
            this.computedPostfix
        );
    }

    private get isNativeValueNotFinished(): boolean {
        const nativeNumberValue = this.nativeNumberValue;

        return nativeNumberValue < 0
            ? nativeNumberValue > this.computedMax
            : nativeNumberValue < this.computedMin;
    }

    public get nativeValue(): string {
        return this.nativeFocusableElement?.value || '';
    }

    public set nativeValue(value: string) {
        if (!this.textfield || !this.nativeFocusableElement) {
            return;
        }

        this.textfield.value = value;
        this.nativeFocusableElement.value = value;
    }

    public override writeValue(value: number | null): void {
        super.writeValue(value);
        this.nativeValue = this.formattedValue;
    }

    private get nativeNumberValue(): number {
        return maskitoParseNumber(this.nativeValue, this.numberFormat.decimalSeparator);
    }

    @tuiPure
    private computeMin(min: number | null, max: number | null): number {
        return Math.min(
            this.valueTransformer?.fromControlValue(min) ?? min ?? this.options.min,
            this.valueTransformer?.fromControlValue(max) ?? max ?? this.options.max,
        );
    }

    @tuiPure
    private computeMax(min: number | null, max: number | null): number {
        return Math.max(
            this.valueTransformer?.fromControlValue(min) ?? min ?? this.options.min,
            this.valueTransformer?.fromControlValue(max) ?? max ?? this.options.max,
        );
    }

    @tuiPure
    private calculateMask(
        precision: number,
        decimalMode: TuiDecimal,
        decimalSeparator: string,
        thousandSeparator: string,
        min: number,
        max: number,
        prefix: string,
        postfix: string,
    ): MaskitoOptions {
        const generatorParams = {
            decimalSeparator,
            thousandSeparator,
            min,
            max,
            prefix,
            postfix,
            precision: decimalMode === 'never' ? 0 : precision,
            decimalZeroPadding: decimalMode === 'always',
        };
        const {plugins, ...options} = maskitoNumberOptionsGenerator(generatorParams);
        const initialCalibrationPlugin = maskitoInitialCalibrationPlugin(
            maskitoNumberOptionsGenerator({
                ...generatorParams,
                min: Number.MIN_SAFE_INTEGER,
                max: Number.MAX_SAFE_INTEGER,
            }),
        );

        return {
            ...options,
            plugins: [
                ...plugins,
                initialCalibrationPlugin,
                maskitoCaretGuard(value => [
                    prefix.length,
                    value.length - postfix.length,
                ]),
            ],
        };
    }
}
