import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import {TuiInputNumberModule} from '@taiga-ui/legacy/components/input-number';
import {TuiPrimitiveTextfieldModule} from '@taiga-ui/legacy/components/primitive-textfield';
import {TuiSelectModule} from '@taiga-ui/legacy/components/select';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy/directives/textfield-controller';

import {TuiColorEditComponent} from './color-edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaskitoDirective,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiInputNumberModule,
        TuiSelectModule,
        ...TuiDropdown,
        ...TuiDataList,
        TuiButton,
    ],
    declarations: [TuiColorEditComponent],
    exports: [TuiColorEditComponent, ...TuiDropdown, ...TuiDataList],
})
export class TuiColorEditModule {}
