import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_INPUT_TIME_DEFAULT_OPTIONS,
    TUI_INPUT_TIME_OPTIONS,
    tuiCreateTimePeriods,
} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-time-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_INPUT_TIME_OPTIONS,
            useValue: {
                icon: 'tuiIconCheckCircleLarge',
                mode: 'HH:MM:SS',
                maxValues: {...TUI_INPUT_TIME_DEFAULT_OPTIONS.maxValues, SS: 165},
                itemSize: 's',
            },
        },
    ],
})
export class TuiInputTimeExample3 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(null),
    });

    items1 = tuiCreateTimePeriods();
}
