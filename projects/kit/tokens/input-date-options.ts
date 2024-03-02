import {type Provider} from '@angular/core';
import {
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    type TuiContext,
    tuiCreateToken,
    type TuiDay,
    tuiProvideOptions,
} from '@taiga-ui/cdk';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputDateOptions {
    readonly icon: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
    readonly max: TuiDay;
    readonly min: TuiDay;
    readonly nativePicker: boolean;
}

export const TUI_INPUT_DATE_DEFAULT_OPTIONS: TuiInputDateOptions = {
    icon: ({$implicit}) =>
        $implicit === 's' ? 'tuiIconCalendar' : 'tuiIconCalendarLarge',
    min: TUI_FIRST_DAY,
    max: TUI_LAST_DAY,
    nativePicker: false,
};

/**
 * Default parameters for InputDate component
 */
export const TUI_INPUT_DATE_OPTIONS = tuiCreateToken(TUI_INPUT_DATE_DEFAULT_OPTIONS);

export function tuiInputDateOptionsProvider(
    options: Partial<TuiInputDateOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_DATE_OPTIONS,
        options,
        TUI_INPUT_DATE_DEFAULT_OPTIONS,
    );
}
