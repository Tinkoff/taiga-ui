import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiPreviewModule} from '@taiga-ui/addon-preview';
import {TuiSwipeModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiLoaderModule,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPreviewExample1} from './examples/1';
import {TuiPreviewExample2} from './examples/2';
import {TuiPreviewExample3} from './examples/3';
import {TuiPreviewExample4} from './examples/4';
import {ExampleTuiPreviewComponent} from './preview.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiButtonModule,
        TuiPreviewModule,
        TuiNotificationModule,
        TuiAddonDocModule,
        TuiSvgModule,
        TuiLoaderModule,
        TuiSwipeModule,
        RouterModule.forChild(generateRoutes(ExampleTuiPreviewComponent)),
    ],
    declarations: [
        ExampleTuiPreviewComponent,
        TuiPreviewExample1,
        TuiPreviewExample2,
        TuiPreviewExample3,
        TuiPreviewExample4,
    ],
    exports: [ExampleTuiPreviewComponent],
})
export class ExampleTuiPreviewModule {}
