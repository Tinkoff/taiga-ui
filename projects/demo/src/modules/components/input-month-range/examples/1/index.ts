import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMonthRange} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-input-month-range-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputMonthRangeExample1 {
    public readonly control = new FormControl<TuiMonthRange | null>(null);
}
