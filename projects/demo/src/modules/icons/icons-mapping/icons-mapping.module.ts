import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiExpand,
    TuiLinkDirective,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputDateRangeModule} from '@taiga-ui/kit';

import {TuiIconsMappingExample1} from './examples/1';
import {TuiIconsMappingExample3} from './examples/3';
import {IconsMappingComponent} from './icons-mapping.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClipboardModule,
        TuiLinkDirective,
        TuiExpand,
        TuiButtonDirective,
        TuiInputDateRangeModule,
        TuiTextfieldControllerModule,
        TuiAddonDoc,
        TuiSvgComponent,
        RouterModule.forChild(tuiGenerateRoutes(IconsMappingComponent)),
    ],
    declarations: [
        IconsMappingComponent,
        TuiIconsMappingExample1,
        TuiIconsMappingExample3,
    ],
    exports: [IconsMappingComponent],
})
export class IconsMappingModule {}
