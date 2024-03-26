import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiExamplePipe} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiGroupDirective,
    TuiIconComponent,
    TuiTitleDirective,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {TuiRadioComponent} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiBlockDirective,
    TuiCheckboxComponent,
    TuiFadeDirective,
    TuiSwitchComponent,
} from '@taiga-ui/kit';

import {ExampleTuiBlockComponent} from './block.component';
import {TuiBlockExample1} from './examples/1';
import {TuiBlockExample2} from './examples/2';
import {TuiBlockExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiBlockDirective,
        TuiGroupDirective,
        TuiAvatarComponent,
        TuiTooltipModule,
        TuiCheckboxComponent,
        TuiRadioComponent,
        TuiFadeDirective,
        TuiTitleDirective,
        TuiSwitchComponent,
        TuiIconComponent,
        TuiExamplePipe,
        tuiGetDocModules(ExampleTuiBlockComponent),
    ],
    declarations: [
        TuiBlockExample1,
        TuiBlockExample2,
        TuiBlockExample3,
        ExampleTuiBlockComponent,
    ],
    exports: [ExampleTuiBlockComponent],
})
export class ExampleTuiBlockModule {}
