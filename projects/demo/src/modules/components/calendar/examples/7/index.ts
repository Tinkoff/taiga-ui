import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-calendar-example-7',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiCalendarExample7 {
    value: TuiDay | null = null;

    onDayClick(day: TuiDay): void {
        this.value = day;
    }
}
