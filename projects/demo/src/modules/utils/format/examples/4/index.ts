import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiFormatPhone} from '@taiga-ui/core';

@Component({
    selector: 'tui-format-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiFormatExample4 {
    parametersForm = new FormGroup({
        countryCode: new FormControl('+7'),
        phoneMask: new FormControl('### ###-##-##'),
        value: new FormControl('+79991234567'),
    });

    get formattedPhone(): string {
        const {countryCode, phoneMask, value} = this.parametersForm.value;

        return tuiFormatPhone(value ?? '', countryCode ?? '', phoneMask ?? '');
    }
}
