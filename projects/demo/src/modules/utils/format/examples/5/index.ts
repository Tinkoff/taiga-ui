import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiDecimalSymbol} from '@taiga-ui/core';
import {tuiFormatNumber} from '@taiga-ui/core';

@Component({
    selector: 'tui-format-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiFormatExample5 {
    protected parametersForm = new FormGroup({
        value: new FormControl(123456.789),
        precision: new FormControl(2),
        decimalSeparator: new FormControl<TuiDecimalSymbol>('.'),
        thousandSeparator: new FormControl(' '),
    });

    protected get formattedNumber(): string {
        const {value, precision, decimalSeparator, thousandSeparator} =
            this.parametersForm.value;

        return tuiFormatNumber(value ?? 123456.789, {
            precision: precision ?? 2,
            decimalSeparator: decimalSeparator ?? '.',
            thousandSeparator: thousandSeparator ?? ' ',
        });
    }
}
