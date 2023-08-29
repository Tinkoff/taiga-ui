import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInRange} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-math-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMathExample2 {
    parametersForm = new FormGroup({
        fromInclude: new FormControl(5),
        toExclude: new FormControl(42),
        value: new FormControl(13),
    });

    get ranged(): boolean {
        const {fromInclude, toExclude, value} = this.parametersForm.value;

        return tuiInRange(value ?? 13, fromInclude ?? 5, toExclude ?? 42);
    }
}
