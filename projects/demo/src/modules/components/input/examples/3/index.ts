import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import type {MaskitoOptions} from '@maskito/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputExample3 {
    protected readonly testForm = new FormGroup({
        testValue1: new FormControl(''),
        testValue2: new FormControl(''),
    });

    protected readonly maskOptions1: MaskitoOptions = {
        mask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    };

    protected readonly maskOptions2: MaskitoOptions = {
        mask: [
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
        ],
    };

    protected readonly unmask = (value: string): string => value.replaceAll('-', '');
}
