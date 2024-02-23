import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiClamp,
    TuiContext,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
    tuiPure,
    tuiRound,
} from '@taiga-ui/cdk';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    TuiDecimal,
    tuiGetFractionPartPadded,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiInputNumberComponent} from '@taiga-ui/kit/components/input-number';
import {
    TuiSliderComponent,
    tuiSliderOptionsProvider,
} from '@taiga-ui/kit/components/slider';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/kit/constants';
import {TuiKeySteps} from '@taiga-ui/kit/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-input-slider',
    templateUrl: './input-slider.template.html',
    styleUrls: ['./input-slider.style.less'],
    host: {
        '[attr.data-size]': 'controller.size',
        '[class._label-outside]': 'controller.labelOutside',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputSliderComponent),
        tuiAsControl(TuiInputSliderComponent),
        tuiSliderOptionsProvider({trackColor: 'transparent'}),
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
})
export class TuiInputSliderComponent
    extends AbstractTuiControl<number>
    implements TuiWithOptionalMinMax<number>, TuiFocusableElementAccessor
{
    @ViewChild(TuiInputNumberComponent)
    private readonly inputNumberRef?: TuiInputNumberComponent;

    @ViewChild(TuiSliderComponent, {read: ElementRef})
    private readonly sliderRef?: ElementRef<HTMLInputElement>;

    protected textfieldValue = this.safeCurrentValue;
    protected readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);

    @Input()
    public min = 0;

    @Input()
    public max = 100;

    @Input()
    public quantum = 1;

    @Input()
    public steps = 0;

    @Input()
    public segments = 1;

    @Input()
    public keySteps: TuiKeySteps | null = null;

    @Input()
    public valueContent: PolymorpheusContent<TuiContext<number>>;

    public get prefix(): string {
        return this.controller.prefix;
    }

    public get postfix(): string {
        return this.controller.postfix;
    }

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return !this.inputNumberRef?.nativeFocusableElement || this.computedDisabled
            ? null
            : this.inputNumberRef.nativeFocusableElement;
    }

    public get focused(): boolean {
        return (
            tuiIsNativeFocused(this.nativeFocusableElement) ||
            tuiIsNativeFocused(this.sliderRef?.nativeElement || null)
        );
    }

    public get computedSteps(): number {
        return this.steps || (this.max - this.min) / this.quantum;
    }

    public get precision(): number {
        return tuiGetFractionPartPadded(this.quantum).length;
    }

    public get decimal(): TuiDecimal {
        return this.precision ? 'not-zero' : 'never';
    }

    public get showValueContent(): boolean {
        return Boolean(this.valueContent && !this.focused);
    }

    public get step(): number {
        return (this.max - this.min) / this.computedSteps;
    }

    @tuiPure
    public computeKeySteps(
        keySteps: TuiKeySteps | null,
        min: number,
        max: number,
    ): TuiKeySteps {
        return (
            keySteps || [
                [0, min],
                [100, max],
            ]
        );
    }

    public focusTextInput(): void {
        const focusableElement = this.inputNumberRef?.nativeFocusableElement;

        if (focusableElement) {
            focusableElement.focus();
        }
    }

    public safelyUpdateValue(value: number | null): void {
        this.value = this.valueGuard(value ?? this.safeCurrentValue);
    }

    public onVerticalArrowKeyDown(coefficient: number): void {
        if (this.readOnly || !this.step) {
            return;
        }

        const value = this.value + coefficient * this.step;

        if (value !== this.value) {
            this.safelyUpdateValue(value);
            this.textfieldValue = this.value;
        }
    }

    public onSliderChange(newValue: number): void {
        this.safelyUpdateValue(newValue);
        this.textfieldValue = this.value;
    }

    public onFocused(focused: boolean): void {
        const {value, textfieldValue} = this;

        if (!focused && textfieldValue !== value) {
            this.textfieldValue = value;
        }

        this.updateFocused(focused);
    }

    public override writeValue(value: number | null): void {
        super.writeValue(value);
        this.textfieldValue = this.value;
    }

    protected getFallbackValue(): number {
        return 0;
    }

    private valueGuard(value: number): number {
        const roundedValue = tuiRound(
            Math.round(value / this.quantum) * this.quantum,
            TUI_FLOATING_PRECISION,
        );

        return tuiClamp(roundedValue, this.min, this.max);
    }
}
