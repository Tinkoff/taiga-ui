import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiErrorModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiActionModule,
    TuiFieldErrorPipeModule,
    TuiInputPhoneModule,
    TuiIslandModule,
    TuiSwitchComponent,
} from '@taiga-ui/kit';

import {StylesInfoModule} from '../../app/styles-info/styles-info.module';
import {TuiIslandExample1} from './examples/1';
import {TuiIslandExample2} from './examples/2';
import {TuiIslandExample3} from './examples/3';
import {ExampleTuiIslandComponent} from './island.component';

@NgModule({
    imports: [
        TuiIslandModule,
        TuiLinkModule,
        TuiSwitchComponent,
        TuiButtonDirective,
        TuiErrorModule,
        TuiFieldErrorPipeModule,
        TuiInputPhoneModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        TuiAddonDocModule,
        TuiNotificationModule,
        StylesInfoModule,
        TuiActionModule,
        TuiButtonDirective,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiIslandComponent)),
    ],
    declarations: [
        ExampleTuiIslandComponent,
        TuiIslandExample1,
        TuiIslandExample2,
        TuiIslandExample3,
    ],
    exports: [ExampleTuiIslandComponent],
})
export class ExampleTuiIslandModule {}
