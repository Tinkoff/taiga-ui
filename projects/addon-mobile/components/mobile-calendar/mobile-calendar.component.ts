import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {DOCUMENT} from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input,
    NgZone,
    Output,
    Self,
    ViewChild,
} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    MONTHS_IN_YEAR,
    TUI_FIRST_DAY,
    TUI_IS_E2E,
    TUI_IS_IOS,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
    TuiDayRange,
    TuiDestroyService,
    TuiInjectionTokenType,
    TuiMonth,
    tuiTypedFromEvent,
    TuiTypedMapper,
    tuiZonefree,
} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_DURATION,
    TUI_CLOSE_WORD,
    TUI_COMMON_ICONS,
    TUI_SHORT_WEEK_DAYS,
    TuiCommonIcons,
} from '@taiga-ui/core';
import {
    TUI_CANCEL_WORD,
    TUI_CHOOSE_DAY_OR_RANGE_TEXTS,
    TUI_DONE_WORD,
    tuiImmutableUpdateInputDateMulti,
} from '@taiga-ui/kit';
import {identity, MonoTypeOperatorFunction, Observable, race, timer} from 'rxjs';
import {
    debounceTime,
    delay,
    filter,
    map,
    mergeMap,
    switchMap,
    take,
    takeUntil,
    windowToggle,
} from 'rxjs/operators';

import {
    RANGE,
    SCROLL_DEBOUNCE_TIME,
    STARTING_YEAR,
    YEARS_IN_ROW,
} from './mobile-calendar.const';
import {
    TUI_MOBILE_CALENDAR_PROVIDERS,
    TUI_VALUE_STREAM,
} from './mobile-calendar.providers';

@Component({
    selector: 'tui-mobile-calendar',
    templateUrl: './mobile-calendar.template.html',
    styleUrls: ['./mobile-calendar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_MOBILE_CALENDAR_PROVIDERS,
    host: {'[class._ios]': 'isIOS', '[class._initialized]': 'initialized'},
})
export class TuiMobileCalendarComponent implements AfterViewInit {
    @ViewChild('yearsScrollRef')
    private readonly yearsScrollRef?: CdkVirtualScrollViewport;

    @ViewChild('monthsScrollRef')
    private readonly monthsScrollRef?: CdkVirtualScrollViewport;

    private readonly today = TuiDay.currentLocal();
    private activeYear = 0;
    private activeMonth = 0;

    @Input()
    single = true;

    @Input()
    multi = false;

    @Input()
    min = TUI_FIRST_DAY;

    @Input()
    max = TUI_LAST_DAY;

    @Input()
    disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    @Output()
    readonly cancel = new EventEmitter<void>();

    @Output()
    readonly confirm = new EventEmitter<TuiDay | TuiDayRange | readonly TuiDay[]>();

    value: TuiDay | TuiDayRange | readonly TuiDay[] | null = null;

    readonly years = Array.from({length: RANGE}, (_, i) => i + STARTING_YEAR);

    readonly months = Array.from(
        {length: RANGE * 12},
        (_, i) =>
            new TuiMonth(
                Math.floor(i / MONTHS_IN_YEAR) + STARTING_YEAR,
                i % MONTHS_IN_YEAR,
            ),
    );

    initialized = false;

    constructor(
        @Inject(TUI_IS_IOS) readonly isIOS: boolean,
        @Inject(TUI_IS_E2E) readonly isE2E: boolean,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Self()
        @Inject(TuiDestroyService)
        private readonly destroy$: TuiDestroyService,
        @Inject(TUI_VALUE_STREAM) valueChanges: Observable<TuiDayRange | null>,
        @Inject(TUI_COMMON_ICONS) readonly icons: TuiCommonIcons,
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
        @Inject(TUI_CANCEL_WORD) readonly cancelWord$: Observable<string>,
        @Inject(TUI_DONE_WORD) readonly doneWord$: Observable<string>,
        @Inject(TUI_SHORT_WEEK_DAYS)
        readonly unorderedWeekDays$: TuiInjectionTokenType<typeof TUI_SHORT_WEEK_DAYS>,
        @Inject(TUI_CHOOSE_DAY_OR_RANGE_TEXTS)
        readonly chooseDayOrRangeTexts$: Observable<[string, string, string]>,
        @Inject(TUI_ANIMATIONS_DURATION) private readonly duration: number,
        @Inject(NgZone) private readonly ngZone: NgZone,
    ) {
        valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
            this.value = value;
        });
    }

    get yearWidth(): number {
        return this.doc.documentElement.clientWidth / YEARS_IN_ROW;
    }

    ngAfterViewInit(): void {
        this.activeYear = this.initialYear;
        this.activeMonth = this.initialMonth;

        // Virtual scroll has not yet rendered items even in ngAfterViewInit
        this.waitScrolledChange();
    }

    onClose(): void {
        this.cancel.emit();
    }

    onConfirm(): void {
        if (this.value) {
            this.confirm.emit(this.value);
        } else {
            this.cancel.emit();
        }
    }

    onDayClick(day: TuiDay): void {
        if (this.single) {
            this.value = day;
        } else if (this.isMultiValue(this.value)) {
            this.value = tuiImmutableUpdateInputDateMulti(this.value, day);
        } else if (this.isSingleValue(this.value)) {
            this.value = new TuiDayRange(day, day);
        } else if (this.value instanceof TuiDayRange) {
            this.value = TuiDayRange.sort(this.value.from, day);
        } else if (!this.value) {
            this.value = new TuiDayRange(day, day);
        }
    }

    getState(index: number): 'active' | 'adjacent' | null {
        if (this.isYearActive(index)) {
            return 'active';
        }

        if (this.isYearActive(index - 1) || this.isYearActive(index + 1)) {
            return 'adjacent';
        }

        return null;
    }

    onMonthChange(month: number): void {
        // Skipping initial callback where index === 0
        if (!month || this.activeMonth === month) {
            return;
        }

        this.activeMonth = month;

        const activeYear = this.monthToYear(month);

        if (activeYear === this.activeYear) {
            return;
        }

        this.activeYear = activeYear;
        this.scrollToActiveYear();
    }

    setYear(year: number): void {
        if (this.activeYear === year) {
            return;
        }

        this.activeMonth += this.getMonthOffset(year);
        this.activeYear = year;
        this.scrollToActiveYear('smooth');

        // Delay is required to run months scroll in the next frame to prevent flicker
        timer(0)
            .pipe(tuiZonefree(this.ngZone), takeUntil(this.destroy$))
            .subscribe(() => this.scrollToActiveMonth());
    }

    readonly disabledItemHandlerMapper: TuiTypedMapper<
        [TuiBooleanHandler<TuiDay>, TuiDay, TuiDay],
        TuiBooleanHandler<TuiDay>
    > = (disabledItemHandler, min, max) => item =>
        item.dayBefore(min) ||
        (max !== null && item.dayAfter(max)) ||
        disabledItemHandler(item);

    private isMultiValue(day: any): day is readonly TuiDay[] | undefined {
        return !(day instanceof TuiDay) && !(day instanceof TuiDayRange) && this.multi;
    }

    private isSingleValue(day: any): day is TuiDay {
        return day instanceof TuiDay || (day instanceof TuiDayRange && !day.isSingleDay);
    }

    private get initialYear(): number {
        if (!this.value) {
            return this.today.year;
        }

        if (this.value instanceof TuiDay) {
            return this.value.year;
        }

        if (!(this.value instanceof TuiDayRange)) {
            return this.value?.[0]?.year ?? this.today.year;
        }

        return this.value.from.year;
    }

    private get initialMonth(): number {
        if (!this.value) {
            return this.today.month + (this.today.year - STARTING_YEAR) * MONTHS_IN_YEAR;
        }

        if (this.value instanceof TuiDay) {
            return this.value.month + (this.value.year - STARTING_YEAR) * MONTHS_IN_YEAR;
        }

        if (!(this.value instanceof TuiDayRange)) {
            return (
                (this.value?.[0]?.month ?? this.today.month) +
                ((this.value?.[0]?.year ?? this.today.year) - STARTING_YEAR) *
                    MONTHS_IN_YEAR
            );
        }

        return (
            this.value.from.month +
            (this.value.from.year - STARTING_YEAR) * MONTHS_IN_YEAR
        );
    }

    private getYearsViewportSize(): number {
        return this.yearsScrollRef?.getViewportSize() || 0;
    }

    private updateViewportDimension(): void {
        this.yearsScrollRef?.checkViewportSize();
        this.monthsScrollRef?.checkViewportSize();
    }

    private lateInit(): MonoTypeOperatorFunction<number> {
        return this.getYearsViewportSize() > 0 ? identity : delay(200);
    }

    private waitScrolledChange(): void {
        this.updateViewportDimension();

        this.monthsScrollRef?.scrolledIndexChange
            .pipe(
                delay(this.duration),
                this.lateInit(),
                take(1),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                this.initialized = true;
                this.updateViewportDimension();
                this.initYearScroll();
                this.initMonthScroll();
                this.scrollToActiveYear();
                this.scrollToActiveMonth();
            });
    }

    private initYearScroll(): void {
        const {yearsScrollRef} = this;

        if (!yearsScrollRef) {
            return;
        }

        const touchstart$ = tuiTypedFromEvent(
            yearsScrollRef.elementRef.nativeElement,
            'touchstart',
            {passive: true},
        );
        const touchend$ = tuiTypedFromEvent(
            yearsScrollRef.elementRef.nativeElement,
            'touchend',
            {passive: true},
        );
        const click$ = tuiTypedFromEvent(
            yearsScrollRef.elementRef.nativeElement,
            'click',
        );

        // Refresh activeYear
        yearsScrollRef
            .elementScrolled()
            .pipe(
                // Ignore smooth scroll resulting from click on the exact year
                windowToggle(touchstart$, () => click$),
                mergeMap(x => x),
                // Delay is required to run months scroll in the next frame to prevent flicker
                delay(0),
                map(
                    () =>
                        Math.round(
                            yearsScrollRef.measureScrollOffset() / this.yearWidth,
                        ) +
                        Math.floor(YEARS_IN_ROW / 2) +
                        STARTING_YEAR,
                ),
                filter(activeYear => activeYear !== this.activeYear),
                takeUntil(this.destroy$),
            )
            .subscribe(activeYear => {
                this.activeMonth += this.getMonthOffset(activeYear);
                this.activeYear = activeYear;
                this.scrollToActiveMonth();
            });

        // Smooth scroll to activeYear after scrolling is done
        touchstart$
            .pipe(
                switchMap(() => touchend$),
                switchMap(() =>
                    race(
                        yearsScrollRef.elementScrolled(),
                        timer(SCROLL_DEBOUNCE_TIME),
                    ).pipe(
                        debounceTime(SCROLL_DEBOUNCE_TIME * 2),
                        take(1),
                        takeUntil(touchstart$),
                    ),
                ),
                takeUntil(this.destroy$),
            )
            .subscribe(() => this.scrollToActiveYear('smooth'));
    }

    private initMonthScroll(): void {
        const {monthsScrollRef} = this;

        if (!monthsScrollRef) {
            return;
        }

        const touchstart$ = tuiTypedFromEvent(
            monthsScrollRef.elementRef.nativeElement,
            'touchstart',
            {passive: true},
        );
        const touchend$ = tuiTypedFromEvent(
            monthsScrollRef.elementRef.nativeElement,
            'touchend',
            {passive: true},
        );

        // Smooth scroll to the closest month after scrolling is done
        touchstart$
            .pipe(
                switchMap(() => touchend$),
                switchMap(() =>
                    race(
                        monthsScrollRef.elementScrolled(),
                        timer(SCROLL_DEBOUNCE_TIME),
                    ).pipe(
                        debounceTime(SCROLL_DEBOUNCE_TIME * 2),
                        take(1),
                        takeUntil(touchstart$),
                    ),
                ),
                takeUntil(this.destroy$),
            )
            .subscribe(() => this.scrollToActiveMonth('smooth'));
    }

    private scrollToActiveYear(behavior: ScrollBehavior = 'auto'): void {
        this.yearsScrollRef?.scrollToIndex(
            Math.max(this.activeYear - STARTING_YEAR - 2, 0),
            this.isE2E ? 'auto' : behavior,
        );
    }

    private scrollToActiveMonth(behavior: ScrollBehavior = 'auto'): void {
        this.monthsScrollRef?.scrollToIndex(
            this.activeMonth,
            this.isE2E ? 'auto' : behavior,
        );
    }

    private isYearActive(index: number): boolean {
        return index === this.activeYear;
    }

    private monthToYear(month: number): number {
        return Math.ceil((month + 1) / MONTHS_IN_YEAR) + STARTING_YEAR - 1;
    }

    private getMonthOffset(year: number): number {
        return (year - this.activeYear) * MONTHS_IN_YEAR;
    }
}
