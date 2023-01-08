import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DATE_FORMAT, TUI_DATE_SEPARATOR, TuiDay} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-input-date-example-4',
    templateUrl: './index.html',
    providers: [
        {provide: TUI_DATE_FORMAT, useValue: 'YMD'},
        {provide: TUI_DATE_SEPARATOR, useValue: '/'},
    ],
    changeDetection,
    encapsulation,
})
export class TuiInputDateExample4 {
    readonly control = new FormControl(new TuiDay(2017, 0, 15));
}
