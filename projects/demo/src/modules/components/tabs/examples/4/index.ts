import {NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiIcon} from '@taiga-ui/core';
import {TuiTab, TuiTabsHorizontal} from '@taiga-ui/kit';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiTabsHorizontal,
        TuiTab,
        TuiIcon,
        NgIf,
        NgForOf,
        TuiInputNumberModule,
        FormsModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected activeItemIndex = 0;

    protected readonly steps = ['Sales', 'Settings', 'News'];

    protected onClick(item: string): void {
        this.alerts.open(item).subscribe();
    }
}
