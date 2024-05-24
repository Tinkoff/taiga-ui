import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldLegacyComponent,
} from '@taiga-ui/core';

import {TuiInputComponent} from './input.component';
import {TuiInputDirective} from './input.directive';

@NgModule({
    imports: [
        CommonModule,
        TuiActiveZoneDirective,
        TuiPrimitiveTextfieldModule,
        TuiHostedDropdownModule,
    ],
    declarations: [TuiInputComponent, TuiInputDirective],
    exports: [TuiInputComponent, TuiInputDirective, TuiTextfieldLegacyComponent],
})
export class TuiInputModule {}
