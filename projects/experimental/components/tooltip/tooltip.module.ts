import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiHintModule} from '@taiga-ui/core';
import {TuiIconModule} from '@taiga-ui/experimental/components/icon';
import {TuiAppearanceModule} from '@taiga-ui/experimental/directives/appearance';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTooltipComponent} from './tooltip.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAppearanceModule,
        TuiHintModule,
        TuiIconModule,
        PolymorpheusModule,
    ],
    declarations: [TuiTooltipComponent],
    exports: [TuiTooltipComponent],
})
export class TuiTooltipModule {}
