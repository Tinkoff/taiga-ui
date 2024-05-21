import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkDirective} from '@taiga-ui/core';

import {TuiTokensExample2} from './examples/2';
import {TuiTokensExample3} from './examples/3';
import {TuiTokensExample4} from './examples/4';
import {TuiTokensExample5} from './examples/5';
import {TuiTokensExample6} from './examples/6';
import {TuiTokensExample8} from './examples/8';
import {TuiTokensExample9} from './examples/9';
import {TuiTokensExample10} from './examples/10';
import {ExampleTokensComponent} from './tokens.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLinkDirective,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTokensComponent)),
    ],
    declarations: [
        ExampleTokensComponent,
        TuiTokensExample2,
        TuiTokensExample3,
        TuiTokensExample4,
        TuiTokensExample5,
        TuiTokensExample6,
        TuiTokensExample8,
        TuiTokensExample9,
        TuiTokensExample10,
    ],
    exports: [ExampleTokensComponent],
})
export class ExampleTokensModule {}
