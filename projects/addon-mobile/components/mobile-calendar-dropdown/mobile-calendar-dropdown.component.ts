import type {ValueProvider} from '@angular/core';
import {ChangeDetectionStrategy, Component, HostBinding, inject} from '@angular/core';
import {TuiMobileCalendarComponent} from '@taiga-ui/addon-mobile/components/mobile-calendar';
import {TuiKeyboardService} from '@taiga-ui/addon-mobile/services';
import {
    AbstractTuiControl,
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiActiveZoneDirective,
    type TuiBooleanHandler,
    type TuiDay,
} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    TuiDropdownDirective,
    tuiFadeIn,
    tuiGetDuration,
    tuiSlideInTop,
} from '@taiga-ui/core';
import {TUI_DAY_CAPS_MAPPER, TUI_MOBILE_CALENDAR} from '@taiga-ui/kit';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import type {Observer} from 'rxjs';

export interface TuiMobileCalendarData {
    disabledItemHandler?: TuiBooleanHandler<TuiDay>;
    max?: TuiDay | null;
    min?: TuiDay | null;
    multi?: boolean;
    single?: boolean;
}

@Component({
    standalone: true,
    selector: 'tui-mobile-calendar-dropdown',
    imports: [TuiMobileCalendarComponent],
    templateUrl: './mobile-calendar-dropdown.template.html',
    styleUrls: ['./mobile-calendar-dropdown.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiFadeIn],
    hostDirectives: [TuiActiveZoneDirective],
})
export class TuiMobileCalendarDropdownComponent {
    // TODO: Rework to use TuiDropdownOpenDirective so the focus returns to the field on closing
    private readonly dropdown = inject(TuiDropdownDirective, {optional: true});
    private readonly keyboard = inject(TuiKeyboardService);
    private readonly observer?: Observer<any> = inject(POLYMORPHEUS_CONTEXT).$implicit;
    private readonly data: TuiMobileCalendarData =
        inject(POLYMORPHEUS_CONTEXT).data || {};

    @HostBinding('@tuiSlideInTop')
    @HostBinding('@tuiFadeIn')
    protected readonly animation = {
        value: '',
        params: {
            start: '100vh',
            duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)),
        },
    };

    // TODO: Refactor to proper Date, DateMulti and DateRange components after they are added to kit
    protected readonly control: any = inject(AbstractTuiControl, {optional: true});
    protected readonly single =
        this.data.single || this.is('tui-input-date:not([multiple])');

    protected readonly multi = this.data.multi || this.is('tui-input-date[multiple]');
    protected readonly range = this.is('tui-input-date-range');
    protected readonly zone = inject(TuiActiveZoneDirective);

    protected readonly min =
        this.data.min ||
        (this.range
            ? TUI_DAY_CAPS_MAPPER(
                  this.control.min,
                  this.control.value,
                  this.control.maxLength,
                  true,
              )
            : this.control?.min) ||
        TUI_FIRST_DAY;

    protected readonly max =
        this.data.max ||
        (this.range
            ? TUI_DAY_CAPS_MAPPER(
                  this.control.max,
                  this.control.value,
                  this.control.maxLength,
                  false,
              )
            : this.control?.max) ||
        TUI_LAST_DAY;

    protected readonly disabledItemHandler =
        this.data.disabledItemHandler ||
        this.control?.disabledItemHandler ||
        TUI_FALSE_HANDLER;

    constructor() {
        this.keyboard.hide();
    }

    protected close(): void {
        this.dropdown?.toggle(false);
        this.observer?.complete();
        this.keyboard.show();
    }

    protected confirm(value: any): void {
        if (this.control) {
            this.control.value = value;
        }

        this.observer?.next(value);
        this.close();
    }

    private is(selector: string): boolean {
        return !!this.dropdown?.el.closest(selector);
    }
}

export function tuiProvideMobileCalendar(): ValueProvider {
    return {
        provide: TUI_MOBILE_CALENDAR,
        useValue: TuiMobileCalendarDropdownComponent,
    };
}
