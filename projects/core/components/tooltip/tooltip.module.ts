import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiAppearance, TuiHint} from '@taiga-ui/core/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiTooltipComponent} from './tooltip.component';

@NgModule({
    imports: [
        CommonModule,
        TuiIcon,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiAppearance,
        ...TuiHint,
    ],
    declarations: [TuiTooltipComponent],
    exports: [TuiTooltipComponent],
})
export class TuiTooltip {}
