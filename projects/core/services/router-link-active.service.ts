import {Inject, Injectable, Optional, Self} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {TuiDestroyService, tuiZoneOptimized} from '@taiga-ui/cdk';
import {
    distinctUntilChanged,
    EMPTY,
    map,
    merge,
    Observable,
    takeUntil,
    timer,
} from 'rxjs';
// TODO: Remove when Angular is update and `RouterLinkActive` has output
@Injectable()
export class TuiRouterLinkActiveService extends Observable<boolean> {
    constructor(
        @Optional()
        @Inject(RouterLinkActive)
        routerLinkActive: RouterLinkActive | null,
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
        @Self() @Inject(TuiDestroyService) destroy$: TuiDestroyService,
    ) {
        const stream$ = routerLinkActive
            ? merge(
                  timer(0), // SSR (animationFrame$ never emits value during SSR)
                  animationFrame$,
              ).pipe(
                  map(() => routerLinkActive.isActive),
                  distinctUntilChanged(),
                  tuiZoneOptimized(),
                  takeUntil(destroy$),
              )
            : EMPTY;

        super(subscriber => stream$.subscribe(subscriber));
    }
}
