import {Directive, forwardRef, HostListener, inject, Input} from '@angular/core';
import type {TuiFocusableElementAccessor} from '@taiga-ui/cdk';
import {
    AbstractTuiControl,
    tuiClamp,
    tuiInjectElement,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';

import {TuiSliderComponent} from '../slider.component';
import type {TuiKeySteps} from './key-steps';
import {tuiKeyStepValueToPercentage, tuiPercentageToKeyStepValue} from './key-steps';

@Directive({
    standalone: true,
    selector: 'input[tuiSlider][keySteps]',
    host: {
        '[attr.aria-valuenow]': 'safeCurrentValue',
        '[attr.aria-valuemin]': 'min',
        '[attr.aria-valuemax]': 'max',
        '[disabled]': 'computedDisabled',
    },
})
export class TuiSliderKeyStepsDirective
    extends AbstractTuiControl<number>
    implements TuiFocusableElementAccessor
{
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly slider = inject<TuiSliderComponent>(
        forwardRef(() => TuiSliderComponent),
    );

    @Input()
    public keySteps!: TuiKeySteps;

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.computedDisabled ? null : this.el;
    }

    public get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    public override writeValue(controlValue: number | null): void {
        if (controlValue === null) {
            return;
        }

        const clampedControlValue = tuiClamp(controlValue, this.min, this.max);

        ngDevMode &&
            console.assert(
                controlValue === clampedControlValue,
                '\n[SliderKeySteps]: You cannot programmatically set value which is less/more than min/max',
            );

        this.slider.value = this.transformToNativeValue(clampedControlValue);
    }

    protected get min(): number {
        return this.keySteps[0][1];
    }

    protected get max(): number {
        return this.keySteps[this.keySteps.length - 1][1];
    }

    @HostListener('input')
    @HostListener('change')
    protected updateControlValue(): void {
        this.value = tuiPercentageToKeyStepValue(
            this.slider.valuePercentage,
            this.keySteps,
        );
    }

    protected getFallbackValue(): number {
        return 0;
    }

    private transformToNativeValue(controlValue: number): number {
        const {min, max} = this.slider;
        const newValuePercentage = tuiKeyStepValueToPercentage(
            controlValue,
            this.keySteps,
        );

        return (newValuePercentage * (max - min)) / 100 + min;
    }
}
