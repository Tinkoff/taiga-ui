import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    TuiAddonDocModule,
    tuiGenerateRoutes,
    TuiTextCodeDirective,
} from '@taiga-ui/addon-doc';
import {TuiElementDirective, TuiScrollService} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiScrollbarComponent} from '@taiga-ui/core';
import {TuiInputNumberModule} from '@taiga-ui/kit';

import {TuiScrollExample1} from './examples/1';
import {ExampleTuiScrollComponent} from './scroll.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiElementDirective,
        TuiButtonDirective,
        TuiScrollbarComponent,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiScrollComponent)),
        TuiTextCodeDirective,
        TuiInputNumberModule,
    ],
    declarations: [ExampleTuiScrollComponent, TuiScrollExample1],
    providers: [TuiScrollService],
    exports: [ExampleTuiScrollComponent],
})
export class ExampleTuiScrollModule {}
