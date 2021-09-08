import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiProgressGradientPipe} from './pipes/progress-gradient.pipe';
import {TuiProgressBarComponent} from './progress-bar/progress-bar.component';
import {TuiProgressLabelComponent} from './progress-label/progress-label.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        TuiProgressBarComponent,
        TuiProgressLabelComponent,
        TuiProgressGradientPipe,
    ],
    exports: [
        TuiProgressBarComponent,
        TuiProgressLabelComponent,
        TuiProgressGradientPipe,
    ],
})
export class TuiProgressModule {}
