import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiMonth} from '@taiga-ui/cdk';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputMonthModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiInputMonthModule, ReactiveFormsModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly control = new FormControl<TuiMonth | null>(null);
}
