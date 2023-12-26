import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostListener,
    Inject,
    Input,
} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {tuiZonefree} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiBrightness} from '@taiga-ui/core';
import {asCallable} from '@tinkoff/ng-event-plugins';
import {debounceTime, map, Observable, of, ReplaySubject, share, switchMap} from 'rxjs';

@Component({
    selector: 'tui-underline',
    template: '',
    styleUrls: ['./underline.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiUnderlineComponent {
    private readonly el$ = new ReplaySubject<HTMLElement | null>(1);

    private readonly refresh$ = this.el$.pipe(
        switchMap(element =>
            element
                ? this.animationFrame$.pipe(
                      map(() => element),
                      tuiZonefree(),
                  )
                : of(null),
        ),
        share(),
    );

    @Input()
    set element(element: HTMLElement | null) {
        this.el$.next(element);
    }

    @HostListener('$.style.transitionProperty')
    readonly transition$ = asCallable(
        this.el$.pipe(
            map(element => element && 'all'),
            debounceTime(50),
        ),
    );

    @HostListener('$.style.transform')
    readonly transform$ = asCallable(
        this.refresh$.pipe(
            map(element =>
                element ? `translate3d(${element.offsetLeft}px, 0, 0)` : null,
            ),
        ),
    );

    @HostListener('$.style.width.px')
    readonly width$ = asCallable(
        this.refresh$.pipe(map(element => element?.clientWidth || 0)),
    );

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef,
        @Inject(ANIMATION_FRAME) private readonly animationFrame$: Observable<number>,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
    ) {
        nativeElement['$.style.transitionProperty'] = this.transition$;
        nativeElement['$.style.transform'] = this.transform$;
        nativeElement['$.style.width.px'] = this.width$;
    }
}
