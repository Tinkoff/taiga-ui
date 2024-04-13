import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import type {TuiMonthRange} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-month-range-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputMonthRangeExample2 {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl<TuiMonthRange | null>(null),
    });
}
