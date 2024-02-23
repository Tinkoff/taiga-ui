import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    Output,
} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
    TuiMonth,
    TuiMonthRange,
    tuiNullableSame,
    tuiPure,
    TuiYear,
} from '@taiga-ui/cdk';
import {TuiInteractiveState, TuiRangeState, TuiWithOptionalMinMax} from '@taiga-ui/core';
import {TuiMonthContext} from '@taiga-ui/kit/interfaces';
import {TUI_CALENDAR_MONTHS} from '@taiga-ui/kit/tokens';
import {TuiBooleanHandlerWithContext} from '@taiga-ui/kit/types';

const TODAY = TuiDay.currentLocal();

@Component({
    selector: 'tui-calendar-month',
    templateUrl: './calendar-month.template.html',
    styleUrls: ['./calendar-month.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCalendarMonthComponent implements TuiWithOptionalMinMax<TuiMonth> {
    protected isYearPickerShown = false;
    protected hoveredItem: TuiMonth | null = null;
    protected pressedItem: TuiMonth | null = null;
    protected readonly months$ = inject(TUI_CALENDAR_MONTHS);

    @Input()
    public value: TuiMonth | TuiMonthRange | null = null;

    @Input()
    public year: TuiYear = TODAY;

    @Input()
    public disabledItemHandler: TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext> =
        ALWAYS_FALSE_HANDLER;

    @Input()
    public min: TuiMonth | null = TUI_FIRST_DAY;

    @Input()
    public max: TuiMonth | null = TUI_LAST_DAY;

    @Output()
    public readonly monthClick = new EventEmitter<TuiMonth>();

    @Output()
    public readonly hoveredItemChange = new EventEmitter<TuiMonth | null>();

    @Output()
    public readonly yearChange = new EventEmitter<TuiYear>();

    @HostBinding('class._single')
    public get isSingle(): boolean {
        return (
            this.value !== null &&
            (this.value instanceof TuiMonth || this.value.isSingleMonth)
        );
    }

    public get computedMin(): TuiMonth {
        return this.min ?? TUI_FIRST_DAY;
    }

    public get computedMax(): TuiMonth {
        return this.max ?? TUI_LAST_DAY;
    }

    public get previousYearDisabled(): boolean {
        return this.year.yearSameOrBefore(this.computedMin);
    }

    public get nextYearDisabled(): boolean {
        return this.year.yearSameOrAfter(this.computedMax);
    }

    public getItemState(item: TuiMonth): TuiInteractiveState | null {
        const {disabledItemHandlerWithMinMax, pressedItem, hoveredItem} = this;

        if (disabledItemHandlerWithMinMax(item)) {
            return TuiInteractiveState.Disabled;
        }

        if (pressedItem?.monthSame(item)) {
            return TuiInteractiveState.Active;
        }

        if (hoveredItem?.monthSame(item)) {
            return TuiInteractiveState.Hover;
        }

        return null;
    }

    public getItemRange(item: TuiMonth): TuiRangeState | null {
        const {value, hoveredItem} = this;

        if (value === null) {
            return null;
        }

        if (value instanceof TuiMonth) {
            return value.monthSame(item) ? 'single' : null;
        }

        const theFirstOfRange = value.from.monthSame(item) && !value.isSingleMonth;
        const hoveredItemAfterFrom =
            hoveredItem?.monthAfter(value.from) &&
            value.from.monthSame(item) &&
            value.isSingleMonth;
        const hoveredItemIsCandidateToBeFrom =
            hoveredItem?.monthSame(item) &&
            hoveredItem?.monthBefore(value.from) &&
            value.isSingleMonth;

        if (theFirstOfRange || hoveredItemAfterFrom || hoveredItemIsCandidateToBeFrom) {
            return 'start';
        }

        const theLastOfRange = value.to.monthSame(item) && !value.isSingleMonth;
        const hoveredItemBeforeTo =
            value.to.monthSame(item) &&
            hoveredItem?.monthBefore(value.to) &&
            value.isSingleMonth;
        const hoveredItemIsCandidateToBeTo =
            hoveredItem?.monthSame(item) &&
            hoveredItem?.monthAfter(value.from) &&
            value.isSingleMonth;

        if (theLastOfRange || hoveredItemBeforeTo || hoveredItemIsCandidateToBeTo) {
            return 'end';
        }

        return value.isSingleMonth && value.from.monthSame(item) ? 'single' : null;
    }

    public getTuiMonth(monthNumber: number, yearNumber: number): TuiMonth {
        return new TuiMonth(yearNumber, monthNumber);
    }

    public isItemToday(item: TuiMonth): boolean {
        return TODAY.monthSame(item);
    }

    public isItemInsideRange(month: TuiMonth): boolean {
        const {value, hoveredItem} = this;

        if (value === null || value instanceof TuiMonth) {
            return false;
        }

        if (!value.isSingleMonth) {
            return value.from.monthSameOrBefore(month) && value.to.monthAfter(month);
        }

        if (hoveredItem === null) {
            return false;
        }

        const range = TuiMonthRange.sort(value.from, hoveredItem);

        return range.from.monthSameOrBefore(month) && range.to.monthAfter(month);
    }

    public onPickerYearClick(year: TuiYear): void {
        this.isYearPickerShown = false;

        if (this.year.yearSame(year)) {
            return;
        }

        this.updateActiveYear(year);
    }

    public onItemClick(month: TuiMonth): void {
        if (this.disabledItemHandlerWithMinMax(month)) {
            return;
        }

        this.monthClick.emit(month);
    }

    public onYearClick(): void {
        this.isYearPickerShown = true;
    }

    public onNextYear(): void {
        this.updateActiveYear(this.year.append({year: 1}));
    }

    public onPreviousYear(): void {
        this.updateActiveYear(this.year.append({year: -1}));
    }

    public onItemHovered(hovered: boolean, item: TuiMonth): void {
        this.updateHoveredItem(hovered ? item : null);
    }

    public onItemPressed(pressed: boolean, item: TuiMonth): void {
        this.updatePressedItem(pressed ? item : null);
    }

    @tuiPure
    private calculateDisabledItemHandlerWithMinMax(
        disabledItemHandler: TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext>,
        value: TuiMonth | TuiMonthRange | null,
        min: TuiMonth,
        max: TuiMonth,
    ): TuiBooleanHandler<TuiMonth> {
        return item =>
            item.monthBefore(min) ||
            item.monthAfter(max) ||
            disabledItemHandler(item, {value});
    }

    private get disabledItemHandlerWithMinMax(): TuiBooleanHandler<TuiMonth> {
        return this.calculateDisabledItemHandlerWithMinMax(
            this.disabledItemHandler,
            this.value,
            this.computedMin,
            this.computedMax,
        );
    }

    private updateHoveredItem(month: TuiMonth | null): void {
        if (tuiNullableSame(this.hoveredItem, month, (a, b) => a.monthSame(b))) {
            return;
        }

        this.hoveredItem = month;
        this.hoveredItemChange.emit(month);
    }

    private updatePressedItem(item: TuiMonth | null): void {
        this.pressedItem = item;
    }

    private updateActiveYear(year: TuiYear): void {
        this.year = year;
        this.yearChange.emit(year);
    }
}
