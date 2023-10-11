import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiMoneyModule, TuiThumbnailCardModule} from '@taiga-ui/addon-commerce';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiRippleModule} from '@taiga-ui/addon-mobile';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiLabelModule,
    TuiLinkModule,
    TuiModeModule,
    TuiNotificationModule,
    TuiScrollbarModule,
} from '@taiga-ui/core';
import {
    TuiAvatarModule,
    TuiBadgeModule,
    TuiButtonModule,
    TuiSurfaceModule,
} from '@taiga-ui/experimental';

import {TuiSurfaceExample1} from './examples/1';
import {TuiSurfaceExample2} from './examples/2';
import {TuiSurfaceExample3} from './examples/3';
import {TuiSurfaceExample4} from './examples/4';
import {TuiSurfaceExample5} from './examples/5';
import {TuiSurfaceExample6} from './examples/6';
import {ExampleTuiSurfaceComponent} from './surface.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiSurfaceModule,
        TuiNotificationModule,
        TuiRippleModule,
        TuiRepeatTimesModule,
        TuiBadgeModule,
        TuiScrollbarModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiAvatarModule,
        TuiLabelModule,
        TuiModeModule,
        TuiMoneyModule,
        TuiThumbnailCardModule,
        tuiGetDocModules(ExampleTuiSurfaceComponent),
    ],
    declarations: [
        ExampleTuiSurfaceComponent,
        TuiSurfaceExample1,
        TuiSurfaceExample2,
        TuiSurfaceExample3,
        TuiSurfaceExample4,
        TuiSurfaceExample5,
        TuiSurfaceExample6,
    ],
    exports: [ExampleTuiSurfaceComponent],
})
export class ExampleTuiSurfaceModule {}
