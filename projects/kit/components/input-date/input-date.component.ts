import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
    HostListener,
    Inject,
    Injector,
    Input,
    Optional,
    Self,
    Type,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiNullableControl,
    ALWAYS_FALSE_HANDLER,
    nullableSame,
    TUI_DATE_FORMAT,
    TUI_FIRST_DAY,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TUI_IS_MOBILE,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDateMode,
    TuiDay,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiMonth,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    sizeBigger,
    TUI_DEFAULT_MARKER_HANDLER,
    TUI_TEXTFIELD_SIZE,
    TuiDialogService,
    TuiMarkerHandler,
    TuiPrimitiveTextfieldComponent,
    TuiTextfieldSizeDirective,
    TuiTextMaskOptions,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiNamedDay} from '@taiga-ui/kit/classes';
import {DATE_FILLER_LENGTH, EMPTY_MASK, TUI_DATE_MASK} from '@taiga-ui/kit/constants';
import {LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {
    TUI_CALENDAR_DATA_STREAM,
    TUI_DATE_TEXTS,
    TUI_MOBILE_CALENDAR,
} from '@taiga-ui/kit/tokens';
import {tuiCreateAutoCorrectedDatePipe} from '@taiga-ui/kit/utils/mask';
import {TuiReplayControlValueChangesFactory} from '@taiga-ui/kit/utils/miscellaneous';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {pluck, takeUntil} from 'rxjs/operators';

// TODO: remove in ivy compilation
export const DATE_STREAM_FACTORY = TuiReplayControlValueChangesFactory;

@Component({
    selector: 'tui-input-date',
    templateUrl: './input-date.template.html',
    styleUrls: ['./input-date.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputDateComponent),
        },
        {
            provide: TUI_CALENDAR_DATA_STREAM,
            deps: [[new Optional(), new Self(), NgControl]],
            useFactory: DATE_STREAM_FACTORY,
        },
        LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
    ],
})
export class TuiInputDateComponent
    extends AbstractTuiNullableControl<TuiDay>
    implements TuiWithOptionalMinMax<TuiDay>, TuiFocusableElementAccessor {
    @Input()
    @tuiDefaultProp()
    min = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp()
    max = TUI_LAST_DAY;

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    @Input()
    @tuiDefaultProp()
    markerHandler: TuiMarkerHandler = TUI_DEFAULT_MARKER_HANDLER;

    @Input()
    @tuiDefaultProp()
    items: ReadonlyArray<TuiNamedDay> = [];

    @Input()
    @tuiDefaultProp()
    defaultActiveYearMonth = TuiMonth.currentLocal();

    open = false;
    readonly filler$ = this.dateTexts$.pipe(pluck(this.dateFormat));

    private month: TuiMonth | null = null;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(Injector) private readonly injector: Injector,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
        @Optional()
        @Inject(TUI_MOBILE_CALENDAR)
        private readonly mobileCalendar: Type<any> | null,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
        @Inject(TUI_DATE_FORMAT) readonly dateFormat: TuiDateMode,
        @Inject(TUI_DATE_TEXTS)
        readonly dateTexts$: Observable<Record<TuiDateMode, string>>,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield ? this.textfield.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return !!this.textfield && this.textfield.focused;
    }

    get computedMobile(): boolean {
        return this.isMobile && !!this.mobileCalendar;
    }

    get calendarIcon(): string {
        return sizeBigger(this.textfieldSize.size)
            ? 'tuiIconCalendarLarge'
            : 'tuiIconCalendar';
    }

    get computedValue(): string {
        const {value, nativeValue, activeItem} = this;

        if (activeItem) {
            return String(activeItem);
        }

        return value ? String(value) : nativeValue;
    }

    get computedMask(): TuiTextMaskOptions {
        return this.activeItem
            ? EMPTY_MASK
            : this.calculateMask(this.value, this.min, this.max, DATE_FILLER_LENGTH);
    }

    get computedActiveYearMonth(): TuiMonth {
        if (this.items[0] && this.value && this.value.daySame(this.items[0].day)) {
            return this.items[0].displayDay;
        }

        return this.month || this.value || this.defaultActiveYearMonth;
    }

    get nativeValue(): string {
        return this.nativeFocusableElement ? this.nativeFocusableElement.value : '';
    }

    set nativeValue(value: string) {
        if (!this.nativeFocusableElement) {
            return;
        }

        this.nativeFocusableElement.value = value;
    }

    get canOpen(): boolean {
        return !this.computedDisabled && !this.readOnly && !this.computedMobile;
    }

    get activeItem(): TuiNamedDay | null {
        const {value} = this;

        return (value && this.items.find(item => item.day.daySame(value))) || null;
    }

    getComputedFiller(filler: string): string {
        return this.activeItem ? '' : filler;
    }

    onMobileClick() {
        if (!this.mobileCalendar) {
            this.open = !this.open;

            return;
        }

        this.dialogService
            .open<TuiDay>(new PolymorpheusComponent(this.mobileCalendar, this.injector), {
                size: 'fullscreen',
                closeable: false,
                data: {
                    single: true,
                    min: this.min,
                    max: this.max,
                    disabledItemHandler: this.disabledItemHandler,
                },
            })
            .pipe(takeUntil(this.destroy$))
            .subscribe(value => {
                this.updateValue(value);
            });
    }

    @HostListener('click')
    onClick() {
        if (!this.isMobile) {
            this.open = !this.open;
        }
    }

    onValueChange(value: string) {
        if (this.control) {
            this.control.updateValueAndValidity({emitEvent: false});
        }

        this.updateValue(
            value.length !== DATE_FILLER_LENGTH ? null : TuiDay.normalizeParse(value),
        );
    }

    onDayClick(value: TuiDay) {
        this.updateValue(value);
        this.open = false;
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onMonthChange(month: TuiMonth) {
        this.month = month;
    }

    onOpenChange(open: boolean) {
        this.open = open;
    }

    onFocused(focused: boolean) {
        this.updateFocused(focused);
    }

    setDisabledState() {
        super.setDisabledState();
        this.open = false;
    }

    writeValue(value: TuiDay | null) {
        super.writeValue(value);
        this.nativeValue = value ? this.computedValue : '';
    }

    protected valueIdenticalComparator(
        oldValue: TuiDay | null,
        newValue: TuiDay | null,
    ): boolean {
        return nullableSame(oldValue, newValue, (a, b) => a.daySame(b));
    }

    @tuiPure
    private calculateMask(
        value: TuiDay | null,
        min: TuiDay,
        max: TuiDay,
        fillerLength: number,
    ): TuiTextMaskOptions {
        return {
            mask: TUI_DATE_MASK,
            pipe: tuiCreateAutoCorrectedDatePipe({value, min, max, fillerLength}),
            guide: false,
        };
    }
}
