import {Component, Inject, Injector} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMobileCalendarDialogComponent} from '@taiga-ui/addon-mobile';
import {tuiControlValue, TuiDay} from '@taiga-ui/cdk';
import {TUI_MONTHS, TuiDialogService} from '@taiga-ui/core';
import {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {combineLatest, map, Observable} from 'rxjs';

@Component({
    selector: 'tui-mobile-calendar-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiMobileCalendarExample1 {
    private readonly control = new UntypedFormControl(null);

    private readonly dialog$: Observable<TuiDay> = this.dialogs.open(
        new PolymorpheusComponent(
            TuiMobileCalendarDialogComponent,
            Injector.create({
                providers: [
                    {
                        provide: TUI_CALENDAR_DATE_STREAM,
                        useValue: tuiControlValue(this.control),
                    },
                ],
                parent: this.injector,
            }),
        ),
        {
            size: 'fullscreen',
            closeable: false,
            data: {
                single: true,
                min: TuiDay.currentLocal(),
            },
        },
    );

    readonly date$ = combineLatest([
        tuiControlValue<TuiDay>(this.control),
        this.months$,
    ]).pipe(
        map(([value, months]) =>
            !value
                ? 'Choose a date'
                : `${months[value.month]} ${value.day}, ${value.year}`,
        ),
    );

    constructor(
        @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector,
        @Inject(TUI_MONTHS) private readonly months$: Observable<string[]>,
    ) {}

    get empty(): boolean {
        return !this.control.value;
    }

    onClick(): void {
        this.dialog$.subscribe(value => this.control.setValue(value));
    }
}
