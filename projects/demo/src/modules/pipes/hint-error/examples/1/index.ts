import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';

@Component({
    selector: 'tui-hint-error-pipe-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Enter this!',
                max: 'Too expensive',
            },
        },
    ],
})
export class TuiHintErrorPipeExample1 {
    readonly data = [{name: 'Latte'}, {name: 'Cappuccino'}] as const;

    latteControl = new FormControl(null, [Validators.required, Validators.max(6)]);
    cappuccinoControl = new FormControl(null, [Validators.required, Validators.max(5)]);
    controls = [this.latteControl, this.cappuccinoControl];

    readonly columns = ['name', 'price'];
}
