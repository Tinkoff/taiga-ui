import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
import {tuiCreateTimePeriods} from '@taiga-ui/kit';
import {tuiInputTimeOptionsProvider} from '@taiga-ui/legacy';

@Component({
    selector: 'tui-input-time-example-6',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputTimeOptionsProvider({
            nativePicker: true,
        }),
    ],
})
export class TuiInputTimeExample6 {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiTime(10, 30)),
        testValue2: new FormControl(new TuiTime(10, 30, 0)),
        testValue3: new FormControl(new TuiTime(14, 30)),
        testValue4: new FormControl(new TuiTime(10, 30, 0)),
    });

    protected readonly items = tuiCreateTimePeriods(14, 16, [0, 30]);
}
