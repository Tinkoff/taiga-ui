import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiLinkModule,
    TuiLoaderModule,
    TuiModeModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiAppearanceModule,
    TuiIconModule,
    TuiTooltipModule,
} from '@taiga-ui/experimental';
import {TuiInputModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTooltipExample1} from './examples/1';
import {TuiTooltipExample2} from './examples/2';
import {TuiTooltipExample3} from './examples/3';
import {ExampleTuiTooltipComponent} from './tooltip.component';

@NgModule({
    imports: [
        TuiTooltipModule,
        TuiLinkModule,
        TuiLoaderModule,
        TuiInputModule,
        PolymorpheusModule,
        TuiModeModule,
        CommonModule,
        FormsModule,
        TuiAppearanceModule,
        TuiTextfieldControllerModule,
        tuiGetDocModules(ExampleTuiTooltipComponent),
        TuiNotificationModule,
        TuiIconModule,
    ],
    declarations: [
        ExampleTuiTooltipComponent,
        TuiTooltipExample1,
        TuiTooltipExample2,
        TuiTooltipExample3,
    ],
    exports: [ExampleTuiTooltipComponent],
})
export class ExampleTuiTooltipModule {}
