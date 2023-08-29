import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiPushOptions {
    readonly buttons: readonly string[];
    readonly heading: string;
    readonly icon: string;
    readonly iconColor: string;
    readonly image: string;
    readonly timestamp: number;
    readonly type: string;
}

export const TUI_PUSH_DEFAULT_OPTIONS: TuiPushOptions = {
    buttons: [],
    heading: ``,
    icon: ``,
    iconColor: ``,
    image: ``,
    timestamp: 0,
    type: ``,
};

/**
 * Default parameters for Push component
 */
export const TUI_PUSH_OPTIONS = tuiCreateToken(TUI_PUSH_DEFAULT_OPTIONS);

export function tuiPushOptionsProvider(options: Partial<TuiPushOptions>): Provider {
    return tuiProvideOptions(TUI_PUSH_OPTIONS, options, TUI_PUSH_DEFAULT_OPTIONS);
}
