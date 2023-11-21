import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiButtonModule} from '@taiga-ui/experimental';
import {TuiButtonCloseModule} from '@taiga-ui/experimental';

import {ExampleTuiButtonCloseComponent} from './button-close.component';
import {TuiButtonCloseExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonCloseModule,
        TuiNotificationModule,
        TuiButtonModule,
        tuiGetDocModules(ExampleTuiButtonCloseComponent),
    ],
    declarations: [ExampleTuiButtonCloseComponent, TuiButtonCloseExample1],
    exports: [ExampleTuiButtonCloseComponent],
})
export class ExampleTuiButtonCloseModule {}
