import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiNumberFormatDirective} from '@taiga-ui/core';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

import {TuiMathExample1} from './examples/1';
import {TuiMathExample2} from './examples/2';
import {TuiMathExample3} from './examples/3';
import {TuiMathExample4} from './examples/4';
import {TuiMathExample5} from './examples/5';
import {ExampleMathComponent} from './math.component';

@NgModule({
    imports: [
        CommonModule,
        TuiInputNumberModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleMathComponent)),
        TuiNumberFormatDirective,
    ],
    declarations: [
        ExampleMathComponent,
        TuiMathExample1,
        TuiMathExample2,
        TuiMathExample3,
        TuiMathExample4,
        TuiMathExample5,
    ],
    exports: [ExampleMathComponent],
})
export class ExampleMathModule {}
