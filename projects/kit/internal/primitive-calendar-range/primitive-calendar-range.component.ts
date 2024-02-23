import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    inject,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
    TuiDayRange,
    TuiDestroyService,
    TuiMonth,
    TuiTypedMapper,
    tuiWatch,
} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MARKER_HANDLER, TuiMarkerHandler} from '@taiga-ui/core';
import {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit/tokens';
import {Observable, takeUntil} from 'rxjs';

/**
 * @internal
 */
@Component({
    selector: 'tui-primitive-calendar-range',
    templateUrl: './primitive-calendar-range.template.html',
    styleUrls: ['./primitive-calendar-range.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiPrimitiveCalendarRangeComponent implements OnInit {
    protected hoveredItem: TuiDay | null = null;
    protected valueChanges = inject<Observable<TuiDayRange | null> | null>(
        TUI_CALENDAR_DATE_STREAM,
        {optional: true},
    );

    @Input()
    public disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    @Input()
    public markerHandler: TuiMarkerHandler = TUI_DEFAULT_MARKER_HANDLER;

    @Input()
    public defaultViewedMonthFirst = TuiMonth.currentLocal();

    @Input()
    public defaultViewedMonthSecond = TuiMonth.currentLocal().append({month: 1});

    @Input()
    public min = TUI_FIRST_DAY;

    @Input()
    public max = TUI_LAST_DAY;

    @Input()
    public value: TuiDayRange | null = null;

    @Output()
    public readonly dayClick = new EventEmitter<TuiDay>();

    public userViewedMonthFirst: TuiMonth = this.defaultViewedMonthFirst;
    public userViewedMonthSecond: TuiMonth = this.defaultViewedMonthSecond;

    constructor() {
        this.valueChanges
            ?.pipe(
                tuiWatch(inject(ChangeDetectorRef)),
                takeUntil(inject(TuiDestroyService, {self: true})),
            )
            .subscribe(value => {
                this.value = value;
                this.updateViewedMonths();
            });
    }

    public get cappedUserViewedMonthSecond(): TuiMonth {
        return this.userViewedMonthSecond.monthBefore(this.max)
            ? this.userViewedMonthSecond
            : this.max;
    }

    public get cappedUserViewedMonthFirst(): TuiMonth {
        return this.userViewedMonthFirst.monthSameOrBefore(this.userViewedMonthSecond)
            ? this.userViewedMonthFirst
            : this.userViewedMonthSecond;
    }

    public ngOnInit(): void {
        this.setInitialMonths();
    }

    public onSectionFirstViewedMonth(month: TuiMonth): void {
        this.userViewedMonthFirst = month;

        this.userViewedMonthSecond = this.userViewedMonthFirst.append({month: 1});
    }

    public onSectionSecondViewedMonth(month: TuiMonth): void {
        this.userViewedMonthSecond = month;

        this.userViewedMonthFirst = this.userViewedMonthSecond.append({
            month: -1,
        });
    }

    public onDayClick(day: TuiDay): void {
        this.dayClick.emit(day);
    }

    protected monthOffset: TuiTypedMapper<[TuiMonth, number], TuiMonth> = (
        value,
        offset,
    ) => value.append({month: offset});

    private setInitialMonths(): void {
        if (!this.value) {
            this.userViewedMonthSecond = this.updatedViewedMonthSecond(
                this.defaultViewedMonthSecond,
            );

            this.userViewedMonthFirst = this.updatedViewedMonthFirst(
                this.defaultViewedMonthFirst,
            );
        }
    }

    private updatedViewedMonthSecond(month: TuiMonth): TuiMonth {
        if (month.monthSameOrAfter(this.max)) {
            return this.max;
        }

        if (month.monthBefore(this.min)) {
            return this.min.append({month: 1});
        }

        return month;
    }

    private updatedViewedMonthFirst(month: TuiMonth): TuiMonth {
        if (month.monthSameOrAfter(this.userViewedMonthSecond)) {
            return this.userViewedMonthSecond.append({month: -1});
        }

        if (month.monthSameOrBefore(this.min)) {
            return this.min;
        }

        return month;
    }

    private updateViewedMonths(): void {
        this.userViewedMonthFirst =
            this.value === null ? this.defaultViewedMonthFirst : this.value.from;

        this.userViewedMonthSecond = this.userViewedMonthFirst.append({month: 1});
    }
}
