import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHoveredDirective, TuiLetDirective} from '@taiga-ui/cdk';
import {TuiBadgeDirective, TuiPresentDirective} from '@taiga-ui/kit';

import {TuiPresentExample1} from './examples/1';
import {ExampleTuiPresentComponent} from './present.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLetDirective,
        TuiPresentDirective,
        TuiHoveredDirective,
        TuiBadgeDirective,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPresentComponent)),
        TuiSetupComponent,
    ],
    declarations: [ExampleTuiPresentComponent, TuiPresentExample1],
    exports: [ExampleTuiPresentComponent],
})
export class ExampleTuiPresentDirective {}
