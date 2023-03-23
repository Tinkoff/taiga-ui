import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core/types';

export interface TuiLoaderOptions {
    readonly size: TuiSizeXS | TuiSizeXXL;
    readonly inheritColor: boolean;
    readonly overlay: boolean;
}

/** Default values for the loader options. */
export const TUI_LOADER_DEFAULT_OPTIONS: TuiLoaderOptions = {
    size: `m`,
    inheritColor: false,
    overlay: false,
};

/**
 * Default parameters for loader component
 */
export const TUI_LOADER_OPTIONS = new InjectionToken<TuiLoaderOptions>(
    `[TUI_LOADER_OPTIONS]`,
    {
        factory: () => TUI_LOADER_DEFAULT_OPTIONS,
    },
);

export const tuiLoaderOptionsProvider: (
    options: Partial<TuiLoaderOptions>,
) => ValueProvider = (options: Partial<TuiLoaderOptions>) => ({
    provide: TUI_LOADER_OPTIONS,
    useValue: {...TUI_LOADER_DEFAULT_OPTIONS, ...options},
});
