import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiNotificationComponent, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputMonthModule} from '@taiga-ui/legacy';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {InputMonthExample1} from './examples/1';
import {InputMonthExample2} from './examples/2';
import {InputMonthExample3} from './examples/3';
import {ExampleInputMonthComponent} from './input-month.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiAddonDoc,
        InheritedDocumentationModule,
        TuiInputMonthModule,
        TuiTextfieldControllerModule,
        TuiNotificationComponent,
        RouterModule.forChild(tuiGenerateRoutes(ExampleInputMonthComponent)),
    ],
    declarations: [
        ExampleInputMonthComponent,
        InputMonthExample1,
        InputMonthExample2,
        InputMonthExample3,
    ],
    exports: [ExampleInputMonthComponent],
})
export class ExampleInputMonthModule {}
