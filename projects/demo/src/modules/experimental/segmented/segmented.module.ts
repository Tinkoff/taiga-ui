import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {
    TuiBadgeNotificationModule,
    TuiButtonModule,
    TuiFadeModule,
    TuiIconModule,
    TuiSegmentedComponent,
} from '@taiga-ui/experimental';

import {TuiSegmentedExample1} from './examples/1';
import {TuiSegmentedExample2} from './examples/2';
import {TuiSegmentedExample3} from './examples/3';
import {TuiSegmentedExample4} from './examples/4';
import {ExampleTuiSegmentedComponent} from './segmented.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSegmentedComponent,
        TuiNotificationModule,
        TuiBadgeNotificationModule,
        TuiFadeModule,
        tuiGetDocModules(ExampleTuiSegmentedComponent),
        FormsModule,
        TuiIconModule,
        TuiButtonModule,
    ],
    declarations: [
        ExampleTuiSegmentedComponent,
        TuiSegmentedExample1,
        TuiSegmentedExample2,
        TuiSegmentedExample3,
        TuiSegmentedExample4,
    ],
    exports: [ExampleTuiSegmentedComponent],
})
export class ExampleTuiSegmentedModule {}
