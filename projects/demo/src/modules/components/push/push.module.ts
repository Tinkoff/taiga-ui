import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonDirective, TuiLinkDirective, TuiSvgComponent} from '@taiga-ui/core';
import {TuiPushModule} from '@taiga-ui/kit';

import {TuiPushExample1} from './examples/1';
import {TuiPushExample2} from './examples/2';
import {TuiPushExample3} from './examples/3';
import {ExampleTuiPushComponent} from './push.component';

@NgModule({
    imports: [
        CommonModule,
        TuiPushModule,
        TuiButtonDirective,
        TuiLinkDirective,
        TuiSvgComponent,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPushComponent)),
    ],
    declarations: [
        ExampleTuiPushComponent,
        TuiPushExample1,
        TuiPushExample2,
        TuiPushExample3,
    ],
    exports: [ExampleTuiPushComponent],
})
export class ExampleTuiPushModule {}
