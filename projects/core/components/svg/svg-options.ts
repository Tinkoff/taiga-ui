import {
    FactoryProvider,
    inject,
    InjectionToken,
    Optional,
    Provider,
    SkipSelf,
} from '@angular/core';
import {
    TuiHandler,
    tuiIsString,
    TuiSafeHtml,
    TuiStringHandler,
    tuiSvgLinearGradientProcessor,
} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_ICONS_PLACE,
    TUI_ICONS_PATH,
    TUI_ICONS_PLACE,
    TUI_SVG_CONTENT_PROCESSOR,
    TUI_SVG_SRC_PROCESSOR,
} from '@taiga-ui/core/tokens';
import {tuiIconsPathFactory} from '@taiga-ui/core/utils';
import {identity} from 'rxjs';

import {TUI_DEPRECATED_ICONS} from './deprecated-icons';

// TODO: Refactor it all in 4.0 and remove deprecated backward compatibility hacks
export interface TuiSvgOptions {
    readonly contentProcessor: TuiHandler<TuiSafeHtml, TuiSafeHtml>;
    readonly deprecated: TuiStringHandler<string>;
    readonly iconsPlace: string;
    readonly path: TuiStringHandler<string>;
    readonly srcProcessor: TuiHandler<TuiSafeHtml, TuiSafeHtml>;
}

export type TuiSvgInterceptorHandler =
    | ((src: TuiSafeHtml, options: TuiSvgOptions) => TuiSafeHtml)
    | ((src: TuiSafeHtml) => TuiSafeHtml);

export const TUI_SVG_DEFAULT_OPTIONS: TuiSvgOptions = {
    contentProcessor: tuiSvgLinearGradientProcessor,
    deprecated: src => {
        const oldIcon = src.replace(`Large`, ``).replace(`Outline`, ``);
        const newIcon = TUI_DEPRECATED_ICONS[oldIcon];

        return newIcon
            ? `${oldIcon}/(Large|Outline) is deprecated, use ${newIcon}/(Large|Outline) instead`
            : ``;
    },
    iconsPlace: TUI_DEFAULT_ICONS_PLACE,
    path: tuiIconsPathFactory(TUI_DEFAULT_ICONS_PLACE),
    srcProcessor: identity,
};

/**
 * SVG component options
 */
export const TUI_SVG_OPTIONS = new InjectionToken<TuiSvgOptions>(`[TUI_SVG_OPTIONS]`, {
    factory: () => ({
        contentProcessor: inject(TUI_SVG_CONTENT_PROCESSOR),
        deprecated: TUI_SVG_DEFAULT_OPTIONS.deprecated,
        iconsPlace: inject(TUI_ICONS_PLACE),
        path: inject(TUI_ICONS_PATH),
        srcProcessor: inject(TUI_SVG_SRC_PROCESSOR),
    }),
});

export const TUI_SVG_SRC_INTERCEPTORS = new InjectionToken<TuiSvgInterceptorHandler>(
    `[TUI_SVG_SRC_INTERCEPTORS]`,
);

export function tuiSvgSrcInterceptors(interceptor: TuiSvgInterceptorHandler): Provider {
    return {
        provide: TUI_SVG_SRC_INTERCEPTORS,
        useValue: interceptor,
        multi: true,
    };
}

export const tuiSvgOptionsProvider: (
    options: Partial<Omit<TuiSvgOptions, 'path'>> & {
        path?: TuiSvgOptions['path'] | string;
    },
) => FactoryProvider = options => ({
    provide: TUI_SVG_OPTIONS,
    deps: [
        [new SkipSelf(), new Optional(), TUI_SVG_OPTIONS],
        [new Optional(), TUI_ICONS_PLACE],
        [new Optional(), TUI_ICONS_PATH],
        [new Optional(), TUI_SVG_SRC_PROCESSOR],
        [new Optional(), TUI_SVG_CONTENT_PROCESSOR],
    ],
    useFactory: (
        fallback: TuiSvgOptions | null,
        iconsPlace: string | null,
        path: TuiSvgOptions['path'] | null,
        srcProcessor: TuiSvgOptions['srcProcessor'] | null,
        contentProcessor: TuiSvgOptions['contentProcessor'] | null,
    ): TuiSvgOptions => ({
        contentProcessor:
            options.contentProcessor ??
            fallback?.contentProcessor ??
            contentProcessor ??
            TUI_SVG_DEFAULT_OPTIONS.contentProcessor,
        deprecated:
            options.deprecated ??
            fallback?.deprecated ??
            TUI_SVG_DEFAULT_OPTIONS.deprecated,
        iconsPlace:
            options.iconsPlace ??
            fallback?.iconsPlace ??
            iconsPlace ??
            TUI_SVG_DEFAULT_OPTIONS.iconsPlace,
        path: tuiIsString(options.path)
            ? tuiIconsPathFactory(options.path)
            : options.path ?? fallback?.path ?? path ?? TUI_SVG_DEFAULT_OPTIONS.path,
        srcProcessor:
            options.srcProcessor ??
            fallback?.srcProcessor ??
            srcProcessor ??
            TUI_SVG_DEFAULT_OPTIONS.srcProcessor,
    }),
});
