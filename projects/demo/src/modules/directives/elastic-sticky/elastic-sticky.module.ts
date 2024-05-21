import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiElasticStickyModule} from '@taiga-ui/addon-mobile';
import {TuiScrollbarComponent} from '@taiga-ui/core';

import {ExampleTuiElasticStickyComponent} from './elastic-sticky.component';
import {TuiElasticStickyExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiAmountPipe,
        TuiScrollbarComponent,
        TuiElasticStickyModule,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiElasticStickyComponent)),
    ],
    declarations: [ExampleTuiElasticStickyComponent, TuiElasticStickyExample1],
    exports: [ExampleTuiElasticStickyComponent],
})
export class ExampleTuiElasticStickyModule {}
