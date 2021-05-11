import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {isNumber, tuiDefaultProp} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiBrightness, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiStatus} from '@taiga-ui/kit/enums';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-badge',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template:
        '<span class="left-content" polymorpheus-outlet [content]="icon"></span>{{outputValue}}',
    styleUrls: ['./badge.style.less'],
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiBadgeComponent {
    @Input()
    @tuiDefaultProp()
    value: number | string = '';

    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeL = 'm';

    @Input()
    @HostBinding('attr.data-tui-host-status')
    @tuiDefaultProp()
    status: TuiStatus = TuiStatus.Default;

    @Input()
    @HostBinding('class._hoverable')
    @tuiDefaultProp()
    hoverable = false;

    @Input()
    @tuiDefaultProp()
    icon: PolymorpheusContent = '';

    constructor(@Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>) {}

    @HostBinding('attr.data-tui-host-padding')
    get padding(): string {
        return this.isEmpty ? 'none' : isNumber(this.value.valueOf()) ? 'm' : 'l';
    }

    get outputValue(): string {
        if (isNumber(this.value.valueOf()) && this.value.valueOf() > 99) {
            return '99+';
        } else {
            return String(this.value);
        }
    }

    @HostBinding('class._empty-value')
    get isEmpty(): boolean {
        return this.value === '';
    }

    @HostBinding('class._with-icon')
    get isIconExists(): boolean {
        return this.icon !== '';
    }
}
