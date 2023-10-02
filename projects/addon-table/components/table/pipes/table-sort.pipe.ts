import {Inject, Pipe, PipeTransform} from '@angular/core';
import {TuiComparator} from '@taiga-ui/addon-table/types';
import {tuiPure} from '@taiga-ui/cdk';

import {TuiTableDirective} from '../directives/table.directive';

@Pipe({
    name: `tuiTableSort`,
    pure: false,
})
export class TuiTableSortPipe<K = Partial<Record<any, any>>> implements PipeTransform {
    constructor(
        @Inject(TuiTableDirective)
        private readonly table: TuiTableDirective<K>,
    ) {}

    transform<T extends K>(data: readonly T[]): readonly T[] {
        return this.sort<T>(data, this.table.sorter, this.table.direction);
    }

    @tuiPure
    private sort<T extends K>(
        data: readonly T[],
        sorter: TuiComparator<T>,
        direction: -1 | 1,
    ): readonly T[] {
        return [...data].sort((a, b) => direction * sorter(a, b));
    }
}
