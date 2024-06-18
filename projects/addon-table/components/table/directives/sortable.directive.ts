import type {OnInit} from '@angular/core';
import {Directive, forwardRef, inject} from '@angular/core';
import type {TuiComparator} from '@taiga-ui/addon-table/types';

import {TuiTableTh} from '../th/th.component';
import {TuiTableSortBy} from './sort-by.directive';
import {TuiTableDirective} from './table.directive';

@Directive({
    standalone: true,
    selector: 'th[tuiTh][tuiSortable]',
})
export class TuiTableSortable<T extends Partial<Record<keyof T, any>>> implements OnInit {
    private readonly table = inject(TuiTableDirective<T>);
    private readonly th = inject(TuiTableTh<T>);
    private readonly sortBy = inject<TuiTableSortBy<T>>(forwardRef(() => TuiTableSortBy));

    public get key(): keyof T {
        return this.th.key;
    }

    public sorter: TuiComparator<T> = (): number => 0;

    public ngOnInit(): void {
        this.sorter = this.match ? this.table.sorter : this.sorter;
        this.th.sorter = this.sorter;
    }

    public check(): void {
        if (this.match && this.table.sorter !== this.sorter) {
            this.table.updateSorter(this.sorter);
        }
    }

    private get match(): boolean {
        return this.sortBy.tuiSortBy === this.key;
    }
}
