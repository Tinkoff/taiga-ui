import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {tuiFormatPhone} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-format-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiFormatExample4 {
    protected parametersForm = new FormGroup({
        value: new FormControl('+79991234567'),
        countryCode: new FormControl('+7'),
        phoneMask: new FormControl('### ###-##-##'),
    });

    protected get formattedPhone(): string {
        const {value, countryCode, phoneMask} = this.parametersForm.value;

        return tuiFormatPhone(value ?? '', countryCode ?? '', phoneMask ?? '');
    }
}
