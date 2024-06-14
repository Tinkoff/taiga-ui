import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiIcon, TuiScrollIntoView} from '@taiga-ui/core';

import {TuiSelectOptionComponent} from './select-option.component';

@NgModule({
    imports: [CommonModule, TuiScrollIntoView, TuiIcon],
    declarations: [TuiSelectOptionComponent],
    exports: [TuiSelectOptionComponent],
})
export class TuiSelectOptionModule {}
