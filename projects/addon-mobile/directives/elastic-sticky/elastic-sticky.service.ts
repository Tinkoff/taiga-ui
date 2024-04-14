import {
    afterNextRender,
    ChangeDetectorRef,
    ElementRef,
    inject,
    Injectable,
    INJECTOR,
    NgZone,
} from '@angular/core';
import {
    TuiDestroyService,
    tuiGetElementOffset,
    tuiScrollFrom,
    tuiZonefree,
} from '@taiga-ui/cdk';
import {SCROLL_REF_SELECTOR, TUI_SCROLL_REF} from '@taiga-ui/core';
import {map, Observable, takeUntil, tap} from 'rxjs';

@Injectable()
export class TuiElasticStickyService extends Observable<number> {
    private readonly injector = inject(INJECTOR);
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly scrollRef: HTMLElement = inject(TUI_SCROLL_REF).nativeElement;
    private readonly zone = inject(NgZone);
    private readonly cd = inject(ChangeDetectorRef);
    private readonly destroy$ = inject(TuiDestroyService, {self: true});

    constructor() {
        super(subscriber => {
            afterNextRender(
                () => {
                    const host = this.el.closest(SCROLL_REF_SELECTOR) || this.scrollRef;
                    const {offsetHeight} = this.el;
                    const {offsetTop} = tuiGetElementOffset(host, this.el);

                    return tuiScrollFrom(host)
                        .pipe(
                            tuiZonefree(this.zone),
                            map(() =>
                                Math.max(
                                    1 -
                                        Math.max(
                                            Math.round(host.scrollTop) - offsetTop,
                                            0,
                                        ) /
                                            offsetHeight,
                                    0,
                                ),
                            ),
                            tap(() => this.cd.detectChanges()),
                            takeUntil(this.destroy$),
                        )
                        .subscribe(subscriber);
                },
                {injector: this.injector},
            );
        });
    }
}
