import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiSvgComponent,
} from '@taiga-ui/core';

import {TuiSetupComponent} from '../../utils/setup.component';
import {IconsComponent} from './icons.component';
import {IconsGroupModule} from './icons-group/icons-group.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiNotificationComponent,
        TuiLinkDirective,
        TuiSvgComponent,
        TuiButtonDirective,
        TuiAddonDoc,
        IconsGroupModule,
        RouterModule.forChild(tuiGenerateRoutes(IconsComponent)),
        TuiActiveZoneDirective,
        IntersectionObserverModule,
        TuiSetupComponent,
    ],
    declarations: [IconsComponent],
    exports: [IconsComponent],
})
export class IconsModule {}
