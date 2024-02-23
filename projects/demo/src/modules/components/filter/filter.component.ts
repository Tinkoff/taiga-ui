import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {ALWAYS_FALSE_HANDLER, TuiBooleanHandler, TuiHandler} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeXS} from '@taiga-ui/core';

class ItemWithBadge {
    constructor(
        protected readonly text: string,
        protected readonly badgeValue?: number,
    ) {}

    public toString(): string {
        return this.text;
    }

    public valueOf(): number | null {
        return this.badgeValue || null;
    }
}

@Component({
    selector: 'example-filters',
    templateUrl: './filter.template.html',
    changeDetection,
})
export class ExampleTuiFilterComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    protected initialItems = ['Alex Inkin', 'Roman Sedov'];

    protected itemsVariants: Array<ReadonlyArray<ItemWithBadge | string>> = [
        ['Alex Inkin', 'Roman Sedov'],
        [
            new ItemWithBadge('Focused Zone', 10),
            new ItemWithBadge('Dropdown', 100),
            new ItemWithBadge('Menu Items', 30),
            new ItemWithBadge('Accordion'),
        ],
    ];

    protected badgeHandlerVariants: ReadonlyArray<TuiHandler<unknown, number>> = [
        item => Number(item),
        item => String(item).length,
    ];

    protected badgeHandler = this.badgeHandlerVariants[0];

    protected disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<ItemWithBadge | string>
    > = [
        ALWAYS_FALSE_HANDLER,
        item => item === 'Roman Sedov',
        item => (item.valueOf() || 0) >= 30,
    ];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected items = this.itemsVariants[0];

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeXS> = [
        'xs',
        's',
        'm',
        'l',
    ];

    protected size = this.sizeVariants[2];

    public control = new FormControl(this.initialItems);
}
