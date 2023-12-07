import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInputTimeOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-time-example-5',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputTimeOptionsProvider({
            mode: 'HH:MM',
            maxValues: {HH: 11, MM: 59, SS: 59, MS: 999},
        }),
    ],
})
export class TuiInputTimeExample5 {
    readonly testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl(null),
        isPm: new UntypedFormControl(false),
    });

    get postfix(): string {
        return this.testForm.value?.isPm ? 'PM' : 'AM';
    }
}
