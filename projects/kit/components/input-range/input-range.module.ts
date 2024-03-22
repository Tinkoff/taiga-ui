import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiActiveZoneDirective, TuiPressedModule} from '@taiga-ui/cdk';
import {
    TuiNumberFormatModule,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiInputNumberModule} from '@taiga-ui/kit/components/input-number';
import {TuiRangeModule} from '@taiga-ui/kit/components/range';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputRangeComponent} from './input-range.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiActiveZoneDirective,
        TuiInputNumberModule,
        TuiPressedModule,
        TuiRangeModule,
        TuiWrapperModule,
        TuiTextfieldControllerModule,
        TuiNumberFormatModule,
    ],
    declarations: [TuiInputRangeComponent],
    exports: [TuiInputRangeComponent],
})
export class TuiInputRangeModule {}
