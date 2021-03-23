import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {
    TuiHintControllerModule,
    TuiLinkModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiTextfieldControllerExample1} from './examples/1';
import {ExampleTuiTextfieldControllerComponent} from './textfield-controller.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiLinkModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiTextfieldControllerComponent)),
    ],
    declarations: [
        ExampleTuiTextfieldControllerComponent,
        TuiTextfieldControllerExample1,
    ],
    exports: [ExampleTuiTextfieldControllerComponent],
})
export class ExampleTuiTextfieldControllerModule {}
