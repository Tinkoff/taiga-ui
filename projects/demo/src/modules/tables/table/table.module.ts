import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {
    TuiReorderModule,
    TuiTableModule,
    TuiTablePaginationModule,
} from '@taiga-ui/addon-table';
import {TuiLetModule, TuiValidatorModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiFormatNumberPipeModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiNotificationModule,
    TuiScrollbarModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiAccordionModule,
    TuiArrowModule,
    TuiDataListWrapperModule,
    TuiInputCountModule,
    TuiInputDateModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiSelectModule,
    TuiTagModule,
} from '@taiga-ui/kit';
import {TuiTableExample1} from './examples/1';
import {TuiTableExample2} from './examples/2';
import {TuiTableExample3} from './examples/3';
import {TuiTableExample4} from './examples/4';
import {ExampleTuiTableComponent} from './table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IntersectionObserverModule,
        TuiNotificationModule,
        TuiScrollbarModule,
        TuiTableModule,
        TuiInputModule,
        TuiInputNumberModule,
        TuiInputCountModule,
        TuiSelectModule,
        TuiInputDateModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiFormatNumberPipeModule,
        TuiValidatorModule,
        TuiSvgModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiTagModule,
        TuiAccordionModule,
        TuiLoaderModule,
        TuiLetModule,
        TuiTablePaginationModule,
        TuiTextfieldControllerModule,
        TuiHostedDropdownModule,
        TuiArrowModule,
        TuiReorderModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiTableComponent)),
    ],
    declarations: [
        ExampleTuiTableComponent,
        TuiTableExample1,
        TuiTableExample2,
        TuiTableExample3,
        TuiTableExample4,
    ],
    exports: [ExampleTuiTableComponent],
})
export class ExampleTuiTableModule {}
