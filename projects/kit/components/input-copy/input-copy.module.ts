import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiHint,
    TuiPrimitiveTextfieldModule,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
    TuiTextfieldLegacyComponent,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputCopyComponent} from './input-copy.component';
import {TuiInputCopyDirective} from './input-copy.directive';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiWrapperModule,
        TuiSvgComponent,
        TuiHint,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputCopyComponent, TuiInputCopyDirective],
    exports: [TuiInputCopyComponent, TuiInputCopyDirective, TuiTextfieldLegacyComponent],
})
export class TuiInputCopyModule {}
