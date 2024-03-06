import type {Provider} from '@angular/core';
import {ElementRef, InjectionToken} from '@angular/core';
import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';
/**
 * Stream of sticky stuck events
 */
export const TUI_STUCK = new InjectionToken<Observable<boolean>>('[TUI_STUCK]');

export const TUI_STUCK_PROVIDER: Provider = {
    provide: TUI_STUCK,
    deps: [ElementRef, IntersectionObserverService],
    useFactory: (
        {nativeElement}: ElementRef,
        entries$: Observable<IntersectionObserverEntry[]>,
    ): Observable<boolean> => {
        const stream$ = entries$.pipe(
            map(([{intersectionRatio}]) => intersectionRatio < 1),
        );

        nativeElement['$.class._stuck'] = stream$;

        return stream$;
    },
};
