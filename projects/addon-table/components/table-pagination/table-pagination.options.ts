import {Provider} from '@angular/core';
import {TuiContextWithImplicit, tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiTablePaginationOptions {
    readonly items: readonly number[];
    readonly showPages: boolean;
    readonly size: number;
    readonly sizeOptionContent: PolymorpheusContent<
        TuiContextWithImplicit<number> & {total: number}
    >;
}

function defaultSizeOptionContent({$implicit}: TuiContextWithImplicit<number>): string {
    return `${$implicit}`;
}

export const TUI_TABLE_PAGINATION_DEFAULT_OPTIONS: TuiTablePaginationOptions = {
    items: [10, 20, 50, 100],
    showPages: true,
    size: 10,
    sizeOptionContent: defaultSizeOptionContent,
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
