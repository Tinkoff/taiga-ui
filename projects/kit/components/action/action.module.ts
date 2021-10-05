import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiFocusableModule, TuiFocusVisibleModule} from '@taiga-ui/cdk';
import {TuiDescribedByModule} from '@taiga-ui/core';
import {TuiMarkerIconModule} from '@taiga-ui/kit/components/marker-icon';

import {TuiActionComponent} from './action.component';

@NgModule({
    imports: [
        CommonModule,
        TuiFocusableModule,
        TuiFocusVisibleModule,
        TuiDescribedByModule,
        TuiMarkerIconModule,
    ],
    declarations: [TuiActionComponent],
    exports: [TuiActionComponent],
})
export class TuiActionModule {}
