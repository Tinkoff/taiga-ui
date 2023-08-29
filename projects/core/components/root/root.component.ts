import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    ViewEncapsulation,
} from '@angular/core';
import {
    TUI_DIALOGS,
    TUI_IS_ANDROID,
    TUI_IS_IOS,
    TUI_IS_MOBILE,
    TUI_VERSION,
} from '@taiga-ui/cdk';
import {TUI_IS_MOBILE_RES_PROVIDER} from '@taiga-ui/core/providers';
import {
    TUI_ANIMATIONS_DURATION,
    TUI_IS_MOBILE_RES,
    TUI_THEME,
} from '@taiga-ui/core/tokens';
import {combineLatest, Observable, of} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

@Component({
    selector: 'tui-root',
    templateUrl: './root.template.html',
    styleUrls: ['./root.style.less'],
    // So that we do not force OnPush on custom dialogs
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.None,
    providers: [TUI_IS_MOBILE_RES_PROVIDER],
    host: {
        '($.class._mobile)': 'isMobileRes$',
        '[class._android]': 'isAndroid',
        '[class._ios]': 'isIOS',
        '[style.--tui-duration.ms]': 'duration',
        'data-tui-version': TUI_VERSION,
    },
})
export class TuiRootComponent {
    readonly scrollbars$: Observable<boolean> =
        this.dialogs.length && !this.isMobile
            ? combineLatest([...this.dialogs]).pipe(
                  map(dialogs => !dialogs.some(({length}) => length)),
                  debounceTime(0),
              )
            : of(!this.isMobile);

    constructor(
        @Inject(TUI_ANIMATIONS_DURATION) readonly duration: number,
        @Inject(TUI_DIALOGS)
        readonly dialogs: ReadonlyArray<Observable<readonly unknown[]>>,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TUI_IS_MOBILE_RES) readonly isMobileRes$: Observable<boolean>,
        @Inject(TUI_IS_IOS) readonly isIOS: boolean,
        @Inject(TUI_IS_ANDROID) readonly isAndroid: boolean,
        @Inject(DOCUMENT) {body}: Document,
        @Inject(TUI_THEME) theme: string,
    ) {
        body.setAttribute('data-tui-theme', theme.toLowerCase());
    }
}
