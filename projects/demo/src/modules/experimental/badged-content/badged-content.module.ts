import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import {TuiNotificationModule} from '@taiga-ui/core';
import {
    TuiAvatarModule,
    TuiBadgedContentModule,
    TuiBadgeNotificationModule,
    TuiButtonModule,
    TuiFallbackSrcModule,
    TuiIconModule,
} from '@taiga-ui/experimental';
import {TuiBadgeDirective, TuiInputModule} from '@taiga-ui/kit';

import {ExampleTuiBadgedContentComponent} from './badged-content.component';
import {TuiBadgedContentExample1} from './examples/1';
import {TuiBadgedContentExample2} from './examples/2';
import {TuiBadgedContentExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        TuiBadgeNotificationModule,
        TuiIconModule,
        TuiBadgeDirective,
        TuiBadgedContentModule,
        TuiAvatarModule,
        TuiFallbackSrcModule,
        TuiInputModule,
        TuiButtonModule,
        TuiAddonDocModule,
        TuiNotificationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiBadgedContentComponent)),
        TuiPlatformModule,
    ],
    declarations: [
        ExampleTuiBadgedContentComponent,
        TuiBadgedContentExample1,
        TuiBadgedContentExample2,
        TuiBadgedContentExample3,
    ],
    exports: [ExampleTuiBadgedContentComponent],
})
export class ExampleTuiBadgedContentModule {}
