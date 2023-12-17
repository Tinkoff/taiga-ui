import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions, TuiStringHandler} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';

export interface TuiCheckboxOptions {
    readonly size: TuiSizeS;
    readonly appearance: TuiStringHandler<HTMLInputElement>;
    readonly icons: Readonly<{
        checked: TuiStringHandler<TuiSizeS> | string;
        indeterminate: TuiStringHandler<TuiSizeS> | string;
    }>;
}

export const TUI_CHECKBOX_DEFAULT_OPTIONS: TuiCheckboxOptions = {
    size: `m`,
    appearance: el => (el.checked || el.indeterminate ? `primary` : `whiteblock`),
    icons: {
        checked: size => (size === `m` ? `tuiIconCheckLarge` : `tuiIconCheck`),
        indeterminate: size => (size === `m` ? `tuiIconMinusLarge` : `tuiIconMinus`),
    },
};

export const TUI_CHECKBOX_OPTIONS = tuiCreateToken(TUI_CHECKBOX_DEFAULT_OPTIONS);

export function tuiCheckboxOptionsProvider(
    options: Partial<TuiCheckboxOptions>,
): Provider {
    return tuiProvideOptions(TUI_CHECKBOX_OPTIONS, options, TUI_CHECKBOX_DEFAULT_OPTIONS);
}
