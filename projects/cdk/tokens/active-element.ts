import {DOCUMENT} from '@angular/common';
import {inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {
    tuiCreateTokenFromFactory,
    tuiGetActualTarget,
    tuiGetDocumentOrShadowRoot,
    tuiIsNativeMouseFocusable,
} from '@taiga-ui/cdk/utils';
import {merge, Observable, of, timer} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    repeatWhen,
    share,
    startWith,
    switchMap,
    take,
    takeUntil,
    withLatestFrom,
} from 'rxjs/operators';

import {TUI_REMOVED_ELEMENT} from './removed-element';

// Checks if focusout event should be considered leaving active zone
function isValidFocusout(target: any, removedElement: Element | null = null): boolean {
    return (
        // Not due to switching tabs/going to DevTools
        tuiGetDocumentOrShadowRoot(target).activeElement !== target &&
        // Not due to button/input becoming disabled or under disabled fieldset
        !target.matches(':disabled') &&
        // Not due to element being removed from DOM
        !removedElement?.contains(target) &&
        // Not due to scrollable element became non-scrollable
        tuiIsNativeMouseFocusable(target)
    );
}

function shadowRootActiveElement(root: Document): Observable<EventTarget | null> {
    return merge(
        tuiTypedFromEvent(root, 'focusin').pipe(map(({target}) => target)),
        tuiTypedFromEvent(root, 'focusout').pipe(
            filter(
                ({target, relatedTarget}) => !!relatedTarget && isValidFocusout(target),
            ),
            map(({relatedTarget}) => relatedTarget),
        ),
    );
}

/**
 * Active element on the document for ActiveZone
 */
export const TUI_ACTIVE_ELEMENT = tuiCreateTokenFromFactory<
    Observable<EventTarget | null>
>(() => {
    const removedElement$ = inject(TUI_REMOVED_ELEMENT);
    const win = inject(WINDOW);
    const doc = inject(DOCUMENT);
    const focusout$ = tuiTypedFromEvent(win, 'focusout');
    const focusin$ = tuiTypedFromEvent(win, 'focusin');
    const blur$ = tuiTypedFromEvent(win, 'blur');
    const mousedown$ = tuiTypedFromEvent(win, 'mousedown');
    const mouseup$ = tuiTypedFromEvent(win, 'mouseup');

    return merge(
        focusout$.pipe(
            // eslint-disable-next-line rxjs/no-unsafe-takeuntil
            takeUntil(mousedown$),
            /**
             * TODO: replace to
             * repeat({delay: () => mouseup$})
             * in RxJS 7
             */
            // eslint-disable-next-line rxjs/no-ignored-notifier
            repeatWhen(() => mouseup$),
            withLatestFrom(removedElement$),
            filter(([event, removedElement]) =>
                isValidFocusout(tuiGetActualTarget(event), removedElement),
            ),
            map(([{relatedTarget}]) => relatedTarget),
        ),
        blur$.pipe(
            map(() => doc.activeElement),
            filter(element => !!element?.matches('iframe')),
        ),
        focusin$.pipe(
            switchMap(event => {
                const target = tuiGetActualTarget(event);
                const root = tuiGetDocumentOrShadowRoot(target) as Document;

                return root === doc
                    ? of(target)
                    : shadowRootActiveElement(root).pipe(startWith(target));
            }),
        ),
        mousedown$.pipe(
            switchMap(event => {
                const actualTargetInCurrentTime = tuiGetActualTarget(event);

                return !doc.activeElement || doc.activeElement === doc.body
                    ? of(actualTargetInCurrentTime)
                    : focusout$.pipe(
                          take(1),
                          map(
                              /**
                               * Do not use `map(() => tuiGetActualTarget(event))`
                               * because we have different result in runtime
                               */
                              () => actualTargetInCurrentTime,
                          ),
                          takeUntil(timer(0)),
                      );
            }),
        ),
    ).pipe(distinctUntilChanged(), share());
});
