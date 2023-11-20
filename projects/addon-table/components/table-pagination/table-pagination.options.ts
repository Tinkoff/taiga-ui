import {Provider} from '@angular/core';
import {TuiContextWithImplicit, tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

function defaultSizeOptionContent({$implicit}: TuiContextWithImplicit<number>): string {
    return `${$implicit}`;
}

export interface TuiTablePaginationOptions {
    readonly items: readonly number[];
    readonly showPages: boolean;
    readonly size: number;
    readonly sizeOptionContent: PolymorpheusContent<
        TuiContextWithImplicit<number> & {total: number}
    >;
}

export const TUI_TABLE_PAGINATION_DEFAULT_OPTIONS: TuiTablePaginationOptions = {
    sizeOptionContent: defaultSizeOptionContent,
    showPages: true,
    items: [10, 20, 50, 100],
    size: 10,
};

/**
 * Default parameters for TablePagination component
 */
export const TUI_TABLE_PAGINATION_OPTIONS = tuiCreateToken(
    TUI_TABLE_PAGINATION_DEFAULT_OPTIONS,
);

export function tuiTablePaginationOptionsProvider(
    options: Partial<TuiTablePaginationOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_TABLE_PAGINATION_OPTIONS,
        options,
        TUI_TABLE_PAGINATION_DEFAULT_OPTIONS,
    );
}
