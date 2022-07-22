import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {
    TuiSliderKeyStepsDirective,
    TuiSliderTickLabelPipe,
} from './helpers/slider-key-steps.directive';
import {TuiSliderReadonlyDirective} from './helpers/slider-readonly.directive';
import {TuiSliderThumbLabelComponent} from './helpers/slider-thumb-label/slider-thumb-label.component';
import {TuiSliderComponent} from './slider.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        TuiSliderComponent,
        TuiSliderThumbLabelComponent,
        TuiSliderKeyStepsDirective,
        TuiSliderReadonlyDirective,
        TuiSliderTickLabelPipe,
    ],
    exports: [
        TuiSliderComponent,
        TuiSliderThumbLabelComponent,
        TuiSliderKeyStepsDirective,
        TuiSliderReadonlyDirective,
        TuiSliderTickLabelPipe,
    ],
})
export class TuiSliderModule {}
