import type {FactoryProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiHandler, TuiMonth} from '@taiga-ui/cdk';
import {TuiMonthPipe} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {of} from 'rxjs';

/**
 * A function to get localized formatted month
 */
export const TUI_MONTH_FORMATTER = new InjectionToken<
    TuiHandler<TuiMonth | null, Observable<string>>
>('[TUI_MONTH_FORMATTER]');

export const TUI_MONTH_FORMATTER_PROVIDER: FactoryProvider = {
    provide: TUI_MONTH_FORMATTER,
    deps: [TuiMonthPipe],
    useFactory:
        (pipe: TuiMonthPipe): TuiHandler<TuiMonth | null, Observable<string>> =>
        month => {
            const formattedMonth = month && pipe.transform(month);

            return of(formattedMonth ? `${formattedMonth} ${month.formattedYear}` : '');
        },
};
