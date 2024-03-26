import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiTabBarModule} from '@taiga-ui/addon-mobile';
import {TuiButtonModule, TuiDropdownModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiLabelDirective} from '@taiga-ui/experimental';
import {TuiCheckboxComponent} from '@taiga-ui/kit';

import {TuiTabBarExample1} from './examples/1';
import {TuiTabBarExample2} from './examples/2';
import {TuiTabBarExample3} from './examples/3';
import {TuiTabBarExample4} from './examples/4';
import {ExampleTuiTabBarComponent} from './tab-bar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiDropdownModule,
        TuiButtonModule,
        TuiNotificationModule,
        TuiTabBarModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiTabBarComponent)),
        TuiLabelDirective,
        TuiCheckboxComponent,
    ],
    declarations: [
        ExampleTuiTabBarComponent,
        TuiTabBarExample1,
        TuiTabBarExample2,
        TuiTabBarExample3,
        TuiTabBarExample4,
    ],
    exports: [ExampleTuiTabBarComponent],
})
export class ExampleTuiTabBarModule {}
