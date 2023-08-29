import {Provider} from '@angular/core';
import {
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiContextWithImplicit,
    tuiCreateToken,
    TuiDay,
    tuiProvideOptions,
} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputDateOptions {
    readonly icon: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL | TuiSizeS>>;
    readonly max: TuiDay;
    readonly min: TuiDay;
    readonly nativePicker: boolean;
}

export const TUI_INPUT_DATE_DEFAULT_OPTIONS: TuiInputDateOptions = {
    icon: ({$implicit}) =>
        $implicit === `s` ? `tuiIconCalendar` : `tuiIconCalendarLarge`,
    max: TUI_LAST_DAY,
    min: TUI_FIRST_DAY,
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
