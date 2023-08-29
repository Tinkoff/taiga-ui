import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertContext} from '@taiga-ui/cdk';
import {TuiAlertOptions, TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-alerts-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiAlertsExampleComponent2 {
    @ViewChild('withdrawTemplate')
    withdrawTemplate?: TemplateRef<TuiAlertContext<TuiAlertOptions<unknown>>>;

    @ViewChild('depositTemplate')
    depositTemplate?: TemplateRef<TuiAlertContext<TuiAlertOptions<unknown>>>;

    money = 1000;

    constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}

    showWithdrawAlert(): void {
        this.alerts
            .open(this.withdrawTemplate || '', {
                autoClose: false,
                label: 'A template sample',
                status: 'warning',
            })
            .subscribe();
    }

    showDepositAlert(): void {
        this.alerts
            .open(this.depositTemplate || '', {
                autoClose: false,
                label: 'A template sample',
                status: 'success',
            })
            .subscribe();
    }

    withdraw(): void {
        this.money -= 100;
    }

    deposit(): void {
        this.money += 100;
    }
}
