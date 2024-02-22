import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-tabs-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_IS_IOS,
            useValue: true,
        },
        {
            provide: TUI_IS_ANDROID,
            useValue: false,
        },
    ],
})
export class TuiTabsExample2 {
    private readonly alerts = inject(TuiAlertService);

    protected readonly items = [
        {
            text: 'Maps',
            icon: 'tuiIconCreditCard',
        },
        {
            text: 'Calls',
            icon: 'tuiIconPhone',
        },
        {
            text: 'Settings',
            icon: 'tuiIconSettings',
        },
    ];

    protected activeItemIndex = 0;

    public onClick(item: string): void {
        this.alerts.open(item).subscribe();
    }
}
