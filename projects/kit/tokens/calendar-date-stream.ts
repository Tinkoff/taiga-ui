import type {Provider} from '@angular/core';
import {InjectionToken, Optional, Self} from '@angular/core';
import {NgControl} from '@angular/forms';
import type {TuiDay, TuiDayRange, TuiValueTransformer} from '@taiga-ui/cdk';
import {tuiControlValueFactory} from '@taiga-ui/kit/utils';
import type {Observable} from 'rxjs';

/**
 * Stream that emits calendar data change
 */
export const TUI_CALENDAR_DATE_STREAM = new InjectionToken<
    Observable<TuiDay | TuiDayRange | null>
>('[TUI_CALENDAR_DATE_STREAM]');

export function tuiDateStreamWithTransformer(
    transformer: InjectionToken<TuiValueTransformer<any>>,
): Provider {
    return {
        provide: TUI_CALENDAR_DATE_STREAM,
        deps: [
            [new Optional(), new Self(), NgControl],
            [new Optional(), transformer],
        ],
        useFactory: tuiControlValueFactory,
    };
}
