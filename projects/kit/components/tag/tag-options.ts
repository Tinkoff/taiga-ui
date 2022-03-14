import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {TuiStatusT} from '@taiga-ui/kit/types';

export interface TuiTagOptions {
    readonly size: TuiSizeS | TuiSizeL;
    readonly status: TuiStatusT;
    readonly hoverable: boolean;
    readonly removable: boolean;
    readonly disabled: boolean;
    readonly autoColor: boolean;
}

/** Default values for the tag options. */
export const TUI_TAG_DEFAULT_OPTIONS: TuiTagOptions = {
    size: 'm',
    status: 'default',
    hoverable: false,
    removable: false,
    disabled: false,
    autoColor: false,
};

export const TUI_TAG_OPTIONS = new InjectionToken<TuiTagOptions>(
    'Default parameters for tag component',
    {
        factory: () => TUI_TAG_DEFAULT_OPTIONS,
    },
);

export const tuiTagOptionsProvider: (options: Partial<TuiTagOptions>) => ValueProvider = (
    options: Partial<TuiTagOptions>,
) => ({
    provide: TUI_TAG_OPTIONS,
    useValue: {...TUI_TAG_DEFAULT_OPTIONS, ...options},
});
