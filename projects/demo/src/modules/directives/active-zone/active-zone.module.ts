import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';

import {ExampleTuiActiveZoneComponent} from './active-zone.component';
import {TuiActiveZoneExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiInputModule,
        TuiButtonDirective,
        TuiActiveZoneDirective,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiActiveZoneComponent)),
        ReactiveFormsModule,
    ],
    declarations: [ExampleTuiActiveZoneComponent, TuiActiveZoneExample1],
    exports: [ExampleTuiActiveZoneComponent],
})
export class ExampleTuiActiveZoneModule {}
