import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMonth} from '@taiga-ui/cdk';

@Component({
    selector: 'input-month-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class InputMonthExample2 {
    readonly testForm = new FormGroup({
        testValue: new FormControl<TuiMonth | null>(null),
    });
}
