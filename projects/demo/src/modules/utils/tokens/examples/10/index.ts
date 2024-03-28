import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDayOfWeek} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core';

@Component({
    selector: 'tui-token-example-10',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_FIRST_DAY_OF_WEEK,
            useValue: TuiDayOfWeek.Sunday,
        },
    ],
})
export class TuiTokensExample10 {
    protected readonly provideFirstDayOfWeekToken = import(
        './provide-first-day-of-week-token.md?raw'
    );

    protected readonly customizableComponentsViaThisToken = [
        {name: 'Calendar', link: '/components/calendar', fragment: 'localization'},
        {
            name: 'CalendarRange',
            link: '/components/calendar-range',
            fragment: 'localization',
        },
        {
            name: 'MobileCalendar',
            link: '/components/mobile-calendar',
            fragment: 'localization',
        },
    ] as const;
}
