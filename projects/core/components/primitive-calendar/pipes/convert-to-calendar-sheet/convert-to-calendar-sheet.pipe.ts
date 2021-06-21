import {Inject, Pipe, PipeTransform} from '@angular/core';
import {DAYS_IN_WEEK, TuiDay, TuiDayOfWeek, TuiMonth} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core/tokens';
import {getDayFromMonthRowCol} from './utils';

const CALENDAR_ROWS_COUNT = 6;

@Pipe({
    name: 'tuiConvertToCalendarSheet',
})
export class TuiConvertToCalendarSheetPipe implements PipeTransform {
    private currentMonth: TuiMonth | null = null;
    private currentSheet: ReadonlyArray<ReadonlyArray<TuiDay>> = [];

    constructor(
        @Inject(TUI_FIRST_DAY_OF_WEEK)
        private readonly firstDayOfWeek: TuiDayOfWeek,
    ) {}

    transform(
        month: TuiMonth,
        showPrevMonthDays: boolean = false,
        showNextMonthDays: boolean = false,
    ): ReadonlyArray<ReadonlyArray<TuiDay>> {
        if (this.currentMonth !== null && this.currentMonth.monthSame(month)) {
            return this.currentSheet;
        }

        const sheet: Array<ReadonlyArray<TuiDay>> = [];

        for (let rowIndex = 0; rowIndex < CALENDAR_ROWS_COUNT; rowIndex++) {
            const row: Array<TuiDay> = [];

            for (let colIndex = 0; colIndex < DAYS_IN_WEEK; colIndex++) {
                const day = getDayFromMonthRowCol({
                    month,
                    rowIndex,
                    colIndex,
                    firstDayOfWeek: this.firstDayOfWeek,
                });

                const isPrevMonthDay = (day: TuiDay, relativeToMonth = month) =>
                    day.year < relativeToMonth.year || day.month < relativeToMonth.month;

                const isNextMonthDay = (day: TuiDay, relativeToMonth = month) =>
                    day.year > relativeToMonth.year || day.month > relativeToMonth.month;

                if (isPrevMonthDay(day) && !showPrevMonthDays) {
                    continue;
                }

                if (isNextMonthDay(day) && !showNextMonthDays) {
                    break;
                }

                row.push(day);
            }

            sheet.push(row);
        }

        this.currentSheet = sheet.filter(row => row.length);
        this.currentMonth = month;

        return this.currentSheet;
    }
}
