import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import type {TuiBooleanHandler, TuiStringHandler} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

interface Item {
    readonly id: number;
    readonly name: string;
}
@Component({
    selector: 'tui-multi-select-example-10',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiMultiSelectExample10 {
    protected itemStringControl = new FormControl<string[]>([]);
    protected itemControl = new FormControl<Item[]>([]);
    protected itemStringGroupControl = new FormControl<string[]>([]);
    protected itemGroupControl = new FormControl<Item[]>([]);

    protected items = [
        'Luke Skywalker',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    protected customItems: readonly Item[] = [
        {name: 'Luke Skywalker', id: 1},
        {name: 'Leia Organa Solo', id: 2},
        {name: 'Darth Vader', id: 3},
        {name: 'Han Solo', id: 4},
        {name: 'Obi-Wan Kenobi', id: 5},
        {name: 'Yoda', id: 6},
    ];

    protected groupItems = [
        ['Caesar', 'Greek', 'Apple and Chicken'],
        ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],
    ];

    protected customGroupItems: readonly Item[][] = [
        [
            {name: 'Caesar', id: 1},
            {name: 'Apple and Chicken', id: 2},
        ],
        [
            {name: 'Broccoli Cheddar', id: 3},
            {name: 'Chicken and Rice', id: 4},
            {name: 'Chicken Noodle', id: 5},
        ],
    ];

    protected labels = ['Salad', 'Soup'];

    protected stringify: TuiStringHandler<Item> = item => item.name;

    protected disableHandler: TuiBooleanHandler<string> = item =>
        item.startsWith('Broccoli');

    protected disableItemHandler: TuiBooleanHandler<Item> = ({name}) =>
        name.startsWith('Broccoli');
}
