import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-block-status-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiBlockStatusExample2 {}
