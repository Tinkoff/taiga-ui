import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiAppearanceDirective,
    TuiIconComponent,
    TuiScrollbarComponent,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {TuiWrapperModule} from '@taiga-ui/legacy/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTextareaComponent} from './textarea.component';
import {TuiTextareaDirective} from './textarea.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiScrollbarComponent,
        TuiTooltipModule,
        TuiWrapperModule,
        TuiPrimitiveTextfieldModule,
        PolymorpheusModule,
        TuiIconComponent,
        TuiAppearanceDirective,
    ],
    declarations: [TuiTextareaComponent, TuiTextareaDirective],
    exports: [TuiTextareaComponent, TuiTextareaDirective, TuiTextfieldComponent],
})
export class TuiTextareaModule {}
