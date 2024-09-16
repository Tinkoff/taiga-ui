import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiButton, TuiCalendar, TuiDataList, TuiDropdown, TuiGroup} from '@taiga-ui/core';
import {TuiDataListDropdownManager} from '@taiga-ui/kit';
import {TuiAsideItemDirective} from '@taiga-ui/layout';
import {
    TuiInputDateRangeModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        TuiAmountPipe,
        TuiAsideItemDirective,
        TuiButton,
        TuiCalendar,
        TuiDataList,
        TuiDataListDropdownManager,
        TuiDropdown,
        TuiGroup,
        TuiInputDateRangeModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected dropdownOpen = false;
    protected dateValue: TuiDay = new TuiDay(2020, 0, 1);
    protected euro = 87; // 1 euro = 87 rub
    protected dollar = 75; // 1 dollar = 75 rub

    protected emailValue = 'mail@mail.ru';
    protected moneyValue = 1000;

    protected rangeValue = new TuiDayRange(
        TuiDay.currentLocal(),
        TuiDay.currentLocal().append({year: 1}),
    );

    protected onDayClick(day: TuiDay): void {
        this.dateValue = day;
    }
}
