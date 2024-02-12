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
import {TuiBreakpointService} from '@taiga-ui/core/services';
import {
    TUI_ANIMATIONS_DURATION,
    TUI_REDUCED_MOTION,
    TUI_THEME,
} from '@taiga-ui/core/tokens';
import {combineLatest, Observable, of} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

@Component({
    selector: 'tui-root',
    templateUrl: './root.template.html',
    styleUrls: ['./root.style.less'],
    encapsulation: ViewEncapsulation.None,
    // So that we do not force OnPush on custom dialogs
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    host: {
        'data-tui-version': TUI_VERSION,
        '[style.--tui-duration.ms]': 'duration',
        '[class._ios]': 'isIOS',
        '[class._android]': 'isAndroid',
        '[class._reduced-motion]': 'reducedMotion',
        // Required for the :active state to work in Safari. https://stackoverflow.com/a/33681490
        '(touchstart.passive.silent)': '0',
        '[$.class._mobile]': 'isMobileRes$',
        '($.class._mobile)': 'isMobileRes$',
    },
})
export class TuiRootComponent {
    readonly isMobileRes$ = this.breakpoint.pipe(
        map(breakpoint => breakpoint === 'mobile'),
    );

    readonly scrollbars$: Observable<boolean> =
        this.dialogs.length && !this.isMobile
            ? combineLatest([...this.dialogs]).pipe(
                  map(dialogs => !dialogs.some(({length}) => length)),
                  debounceTime(0),
              )
            : of(!this.isMobile);

    constructor(
        @Inject(TUI_REDUCED_MOTION) readonly reducedMotion: boolean,
        @Inject(TUI_ANIMATIONS_DURATION) readonly duration: number,
        @Inject(TUI_DIALOGS)
        readonly dialogs: ReadonlyArray<Observable<readonly unknown[]>>,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TuiBreakpointService) private readonly breakpoint: TuiBreakpointService,
        @Inject(TUI_IS_IOS) readonly isIOS: boolean,
        @Inject(TUI_IS_ANDROID) readonly isAndroid: boolean,
        @Inject(DOCUMENT) document: Document,
        @Inject(TUI_THEME) theme: string,
    ) {
        document.defaultView?.document.body.setAttribute(
            'data-tui-theme',
            theme.toLowerCase(),
        );
    }
}
