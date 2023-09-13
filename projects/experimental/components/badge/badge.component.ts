import {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TUI_PLATFORM, TuiPlatform} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_ANIMATION_OPTIONS,
    TUI_MODE,
    TuiBrightness,
    tuiPop,
    TuiSizeS,
    TuiSizeXL,
} from '@taiga-ui/core';
import {TuiStatus} from '@taiga-ui/kit';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-badge',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './badge.template.html',
    styleUrls: ['./badge.style.less'],
    providers: [MODE_PROVIDER],
    animations: [tuiPop],
    host: {
        '[attr.data-platform]': 'platform',
        '[attr.data-appearance]': 'appearance',
        '[attr.data-size]': 'size',
        '[class._hoverable]': 'hoverable',
        '[@tuiPop]': 'animation',
        '[tabIndex]': 'hoverable ? 0 : -1',
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiBadgeComponent {
    @Input()
    size: TuiSizeS | TuiSizeXL = 'l';

    @Input()
    appearance: TuiStatus | 'accent' | 'light' = 'default';

    @Input()
    hoverable = false;

    constructor(
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_PLATFORM) readonly platform: TuiPlatform,
        @Inject(TUI_ANIMATION_OPTIONS) readonly animation: AnimationOptions,
    ) {}
}
