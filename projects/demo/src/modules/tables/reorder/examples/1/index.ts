import {Component} from '@angular/core';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-reorder-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiReorderExample1 {
    items = [
        'John Cleese',
        'Eric Idle',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
        'Graham Chapman',
    ];

    enabled = this.items;
}
