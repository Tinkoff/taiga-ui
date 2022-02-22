import {
    ChangeDetectorRef,
    Directive,
    ElementRef,
    HostListener,
    Inject,
    Input,
    Optional,
    Self,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    isNativeFocused,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
} from '@taiga-ui/cdk';
import {TuiKeySteps} from '@taiga-ui/kit/types';

import {TuiSliderComponent} from './slider.component';
import {
    checkHasMinMaxPercents,
    findKeyStepsBoundariesByFn,
    transformToControlValue,
} from './slider-key-steps.utils';

// @dynamic
@Directive({
    selector: 'input[tuiSlider][keySteps]',
})
export class TuiSliderKeyStepsDirective
    extends AbstractTuiControl<number>
    implements TuiFocusableElementAccessor
{
    @Input()
    @tuiDefaultProp(checkHasMinMaxPercents, 'Should contain min and max values')
    keySteps: TuiKeySteps = [];

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.computedDisabled ? null : this.elementRef.nativeElement;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLInputElement>,
        @Inject(TuiSliderComponent) private readonly slider: TuiSliderComponent,
    ) {
        super(control, changeDetectorRef);
    }

    @HostListener('change')
    onInput() {
        const {valuePercentage} = this.slider;
        const [lowerStep, upperStep] = findKeyStepsBoundariesByFn(
            this.keySteps,
            ([keyStepPercentage, _]) => valuePercentage <= keyStepPercentage,
        );
        const newControlValue = transformToControlValue(
            valuePercentage,
            lowerStep,
            upperStep,
        );

        this.updateValue(newControlValue);
    }

    writeValue(controlValue: number | null) {
        if (controlValue === null) {
            return;
        }

        const [lowerStep, upperStep] = findKeyStepsBoundariesByFn(
            this.keySteps,
            ([_, keyStepValue]) => controlValue <= keyStepValue,
        );

        this.slider.value = this.transformToNativeValue(
            controlValue,
            lowerStep,
            upperStep,
        );
    }

    protected getFallbackValue(): number {
        return 0;
    }

    private transformToNativeValue(
        controlValue: number,
        [upperStepPercent, upperStepValue]: [number, number],
        [lowerStepPercent, lowerStepValue]: [number, number],
    ): number {
        const {min, max} = this.slider;
        const ratio = (controlValue - lowerStepValue) / (upperStepValue - lowerStepValue);
        const newValuePercentage =
            (upperStepPercent - lowerStepPercent) * ratio + lowerStepPercent;

        return (newValuePercentage * (max - min)) / 100;
    }
}
