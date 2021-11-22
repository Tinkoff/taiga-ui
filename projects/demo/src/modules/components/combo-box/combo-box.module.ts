import {ScrollingModule} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownControllerModule,
    TuiHintControllerModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiScrollbarModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiAvatarModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiStringifyContentPipeModule,
} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {ExampleTuiComboBoxComponent} from './combo-box.component';
import {TuiComboBoxExample1} from './examples/1';
import {TuiComboBoxExample2} from './examples/2';
import {TuiComboBoxExample3} from './examples/3';
import {TuiComboBoxExample4} from './examples/4';
import {TuiComboBoxExample5} from './examples/5';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ScrollingModule,
        TuiScrollbarModule,
        TuiComboBoxModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiAvatarModule,
        TuiSvgModule,
        TuiDataListModule,
        TuiLoaderModule,
        TuiLetModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiDropdownControllerModule,
        TuiDataListWrapperModule,
        TuiFilterByInputPipeModule,
        TuiStringifyContentPipeModule,
        PolymorpheusModule,
        TuiAddonDocModule,
        InheritedDocumentationModule,
        RouterModule.forChild(generateRoutes(ExampleTuiComboBoxComponent)),
    ],
    declarations: [
        ExampleTuiComboBoxComponent,
        TuiComboBoxExample1,
        TuiComboBoxExample2,
        TuiComboBoxExample3,
        TuiComboBoxExample4,
        TuiComboBoxExample5,
    ],
    exports: [ExampleTuiComboBoxComponent],
})
export class ExampleTuiComboBoxModule {}
