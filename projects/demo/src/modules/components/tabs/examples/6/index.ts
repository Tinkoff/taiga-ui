import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-tabs-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiTabsExample6 {
    private readonly alerts = inject(TuiAlertService);

    activeItemIndex = 0;

    readonly steps = ['Sales', 'Settings', 'News'];

    onClick(item: string): void {
        this.alerts.open(item).subscribe();
    }
}
