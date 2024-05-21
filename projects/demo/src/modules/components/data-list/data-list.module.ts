import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiActiveZoneDirective, TuiFilterPipe, TuiLetDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiCalendarComponent,
    TuiDataList,
    TuiDropdownModule,
    TuiGroupDirective,
    TuiNotificationComponent,
    TuiPrimitiveTextfieldModule,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiChevronDirective,
    TuiDataListDropdownManagerModule,
    TuiInputDateRangeModule,
    TuiInputModule,
    TuiMultiSelectModule,
    TuiSelectModule,
} from '@taiga-ui/kit';

import {ExampleTuiDataListComponent} from './data-list.component';
import {TuiDataListExample1} from './examples/1';
import {TuiDataListExample2} from './examples/2';
import {TuiDataListExample3} from './examples/3';
import {TuiDataListExample4} from './examples/4';
import {CustomListComponent} from './examples/4/custom-list/custom-list.component';
import {TuiDataListExample5} from './examples/5';
import {TuiDataListExample6} from './examples/6';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiLetDirective,
        TuiMultiSelectModule,
        TuiPrimitiveTextfieldModule,
        TuiSelectModule,
        TuiTextfieldControllerModule,
        TuiNotificationComponent,
        TuiDataList,
        TuiDataListDropdownManagerModule,
        TuiSvgComponent,
        TuiDropdownModule,
        TuiButtonDirective,
        TuiDropdownModule,
        TuiActiveZoneDirective,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiDataListComponent)),
        TuiFilterPipe,
        TuiCalendarComponent,
        TuiInputModule,
        TuiInputDateRangeModule,
        TuiAmountPipe,
        TuiGroupDirective,
        TuiChevronDirective,
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiDataListComponent,
        CustomListComponent,
        TuiDataListExample1,
        TuiDataListExample2,
        TuiDataListExample3,
        TuiDataListExample4,
        TuiDataListExample5,
        TuiDataListExample6,
    ],
    exports: [ExampleTuiDataListComponent],
})
export class ExampleTuiDataList {}
