import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {
    TuiCalendarComponent,
    TuiHostedDropdownModule,
    TuiLinkDirective,
    TuiPrimitiveTextfieldModule,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
    TuiTextfieldLegacyComponent,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputDateTimeComponent} from './input-date-time.component';
import {TuiInputDateTimeDirective} from './input-date-time.directive';
import {TuiNativeDateTimeDirective} from './native-date-time/native-date-time.directive';

@NgModule({
    imports: [
        CommonModule,
        MaskitoDirective,
        PolymorpheusModule,
        TuiWrapperModule,
        TuiCalendarComponent,
        TuiSvgComponent,
        TuiLinkDirective,
        TuiHostedDropdownModule,
        TuiPrimitiveTextfieldModule,
        TuiValueAccessorModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [
        TuiInputDateTimeComponent,
        TuiInputDateTimeDirective,
        TuiNativeDateTimeDirective,
    ],
    exports: [
        TuiInputDateTimeComponent,
        TuiInputDateTimeDirective,
        TuiTextfieldLegacyComponent,
    ],
})
export class TuiInputDateTimeModule {}
