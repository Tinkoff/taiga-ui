import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {
    TuiBadgeDirective,
    TuiInputSliderModule,
    TuiPaginationModule,
    TuiRadioListComponent,
} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPaginationExample1} from './examples/1';
import {TuiPaginationExample2} from './examples/2';
import {TuiPaginationExample3} from './examples/3';
import {TuiPaginationExample4} from './examples/4';
import {ExampleTuiPaginationComponent} from './pagination.component';

@NgModule({
    imports: [
        TuiBadgeDirective,
        TuiPaginationModule,
        TuiInputSliderModule,
        CommonModule,
        TuiRadioListComponent,
        FormsModule,
        ReactiveFormsModule,
        TuiAddonDoc,
        TuiTextfieldControllerModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPaginationComponent)),
        PolymorpheusModule,
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiPaginationComponent,
        TuiPaginationExample1,
        TuiPaginationExample2,
        TuiPaginationExample3,
        TuiPaginationExample4,
    ],
    exports: [ExampleTuiPaginationComponent],
})
export class ExampleTuiPaginationModule {}
