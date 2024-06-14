import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';
import {TuiAlertService} from '@taiga-ui/core';

interface Item {
    badge?: number;
    icon: string;
    text: string;
}

@Component({
    standalone: true,
    selector: 'tui-tab-bar-example',
    imports: [TuiTabBar, NgForOf],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    private readonly alerts = inject(TuiAlertService);

    protected activeItemIndex = 1;

    protected readonly items = [
        {
            text: 'Favorites',
            icon: 'tuiIconHeart',
            badge: 3,
        },
        {
            text: 'Calls',
            icon: 'tuiIconPhone',
            badge: 1234,
        },
        {
            text: 'Profile',
            icon: 'tuiIconUser',
        },
        {
            text: 'Settings and configuration',
            icon: 'tuiIconSettings',
            badge: 100,
        },
        {
            text: 'More',
            icon: 'tuiIconEllipsis',
        },
    ];

    protected onClick(item: Item): void {
        item.badge = 0;
        this.alerts.open(this.activeItemIndex, {label: item.text}).subscribe();
    }
}
