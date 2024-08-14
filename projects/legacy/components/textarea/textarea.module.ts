import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';
import {TuiBlock} from '@taiga-ui/kit';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {TuiTooltipModule} from '@taiga-ui/legacy/components/tooltip';
import {TuiWrapperModule} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiTextareaComponent} from './textarea.component';
import {TuiTextareaDirective} from './textarea.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiScrollbar,
        TuiTooltipModule,
        TuiWrapperModule,
        TuiPrimitiveTextfieldModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiIcon,
        TuiAppearance,
        TuiBlock,
    ],
    declarations: [TuiTextareaComponent, TuiTextareaDirective],
    exports: [
        TuiTextareaComponent,
        TuiTextareaDirective,
        TuiTextfieldComponent,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
    ],
})
export class TuiTextareaModule {}
