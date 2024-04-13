import {Component} from '@angular/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

interface User {
    readonly name: string;
    readonly surname: string;
}

@Component({
    selector: 'tui-stringify-content-example1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiStringifyContentExample1 {
    protected value = null;

    protected readonly items = [
        {
            name: 'John',
            surname: 'Cleese',
        },
        {
            name: 'Eric',
            surname: 'Idle',
        },
    ];

    protected readonly stringify = ({name, surname}: User): string =>
        `${name} ${surname}`;
}
