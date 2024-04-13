import {Component, inject} from '@angular/core';
import {TuiAlertService, TuiDialogService} from '@taiga-ui/core';
import type {TuiConfirmData} from '@taiga-ui/kit';
import {TUI_CONFIRM} from '@taiga-ui/kit';
import {switchMap} from 'rxjs';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-confirm-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiConfirmExample1 {
    private readonly dialogs = inject(TuiDialogService);
    private readonly alerts = inject(TuiAlertService);

    protected onClick(): void {
        const data: TuiConfirmData = {
            content:
                'This is <code>PolymorpheusContent</code> so it can be template too!',
            yes: 'That is great!',
            no: 'Who cares?',
        };

        this.dialogs
            .open<boolean>(TUI_CONFIRM, {
                label: 'Do you like Taiga UI?',
                size: 's',
                data,
            })
            .pipe(switchMap(response => this.alerts.open(String(response))))
            .subscribe();
    }
}
