import {Directive, ElementRef, Inject, Self} from '@angular/core';
import {TUI_SCROLL_REF, TuiDestroyService} from '@taiga-ui/cdk';
import {Observable, timer} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    takeUntil,
    throttleTime,
    withLatestFrom,
} from 'rxjs/operators';

import {TUI_SHEET_DRAGGED, TUI_SHEET_SCROLL} from '../../sheet-tokens';

@Directive({
    selector: '[tuiSheetStop]',
    providers: [TuiDestroyService],
})
export class TuiSheetStopDirective {
    constructor(
        @Inject(ElementRef) el: ElementRef<HTMLElement>,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TUI_SHEET_DRAGGED) dragged$: Observable<boolean>,
        @Inject(TUI_SHEET_SCROLL) scroll$: Observable<number>,
        @Inject(TUI_SCROLL_REF) {nativeElement}: ElementRef<HTMLElement>,
    ) {
        scroll$
            .pipe(
                map(y => Math.floor(y) > el.nativeElement.offsetTop),
                distinctUntilChanged(),
                withLatestFrom(dragged$),
                map(([above, dragged]) => !above && !dragged),
                filter(Boolean),
                throttleTime(100),
                takeUntil(destroy$),
            )
            .subscribe(() => {
                nativeElement.style.overflow = 'hidden';
                nativeElement.classList.remove('_stuck'); // iOS
                nativeElement.scrollTop = el.nativeElement.offsetTop;

                timer(100)
                    .pipe(takeUntil(destroy$))
                    // eslint-disable-next-line rxjs/no-nested-subscribe
                    .subscribe(() => {
                        nativeElement.style.overflow = '';
                    });
            });
    }
}
