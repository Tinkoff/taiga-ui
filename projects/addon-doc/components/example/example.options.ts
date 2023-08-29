import {Provider} from '@angular/core';
import {TUI_EXAMPLE_PRIMARY_FILE_NAME} from '@taiga-ui/addon-doc/interfaces';
import {TuiBooleanHandler, tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiDocExampleOptions {
    codeEditorVisibilityHandler: TuiBooleanHandler<Record<string, string>>;
    fullsize: boolean;
    linkIcon: string;
    tabTitles: Map<unknown, PolymorpheusContent>;
}

export const TUI_DOC_EXAMPLE_DEFAULT_OPTIONS: TuiDocExampleOptions = {
    codeEditorVisibilityHandler: files =>
        Boolean(
            files[TUI_EXAMPLE_PRIMARY_FILE_NAME.TS] &&
                files[TUI_EXAMPLE_PRIMARY_FILE_NAME.HTML],
        ),
    fullsize: true,
    linkIcon: `tuiIconLink`,
    tabTitles: new Map(),
};

/**
 * Default parameters for DocExample component
 */
export const TUI_DOC_EXAMPLE_OPTIONS = tuiCreateToken(TUI_DOC_EXAMPLE_DEFAULT_OPTIONS);

export function tuiDocExampleOptionsProvider(
    options: Partial<TuiDocExampleOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_DOC_EXAMPLE_OPTIONS,
        options,
        TUI_DOC_EXAMPLE_DEFAULT_OPTIONS,
    );
}
