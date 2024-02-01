import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiAlertHostModule,
    TuiDropdownHostModule,
    TuiScrollControlsModule,
} from '@taiga-ui/cdk';
import {TuiDialogsComponent} from '@taiga-ui/core/components/dialog';
import {TuiHintsHostModule} from '@taiga-ui/core/components/hints-host';
import {TuiSvgDefsHostModule} from '@taiga-ui/core/internal/svg-defs-host';
import {EventPluginsModule} from '@tinkoff/ng-event-plugins';

import {TuiRootComponent} from './root.component';

@NgModule({
    imports: [
        CommonModule,
        EventPluginsModule,
        TuiDropdownHostModule,
        TuiSvgDefsHostModule,
        TuiHintsHostModule,
        TuiAlertHostModule,
        TuiScrollControlsModule,
        TuiDialogsComponent,
    ],
    declarations: [TuiRootComponent],
    exports: [TuiRootComponent],
})
export class TuiRootModule {}
