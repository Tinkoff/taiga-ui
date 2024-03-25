import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiOwnerDocumentException} from '@taiga-ui/cdk/exceptions';
import {tuiIsFalsy} from '@taiga-ui/cdk/utils';
import {tuiIsNativeFocused} from '@taiga-ui/cdk/utils/focus';
import type {Observable} from 'rxjs';
import {
    concat,
    distinctUntilChanged,
    filter,
    ignoreElements,
    map,
    merge,
    repeat,
    shareReplay,
    startWith,
    switchMap,
    take,
    withLatestFrom,
} from 'rxjs';

import {tuiIsAlive} from './is-alive';
import {tuiTypedFromEvent} from './typed-from-event';

let documentMouseUpIsAlive$: Observable<boolean>;
let documentMouseDownIsAlive$: Observable<boolean>;

export function tuiFocusVisibleObservable(element: Element): Observable<boolean> {
    const elementBlur$ = tuiTypedFromEvent(element, 'blur');
    const {ownerDocument} = element;

    if (!ownerDocument) {
        throw new TuiOwnerDocumentException();
    }

    if (!documentMouseDownIsAlive$ || !documentMouseUpIsAlive$) {
        documentMouseUpIsAlive$ = tuiTypedFromEvent(ownerDocument, 'mouseup', {
            capture: true,
        }).pipe(
            tuiIsAlive(),
            startWith(false),
            shareReplay({bufferSize: 1, refCount: true}),
        );
        documentMouseDownIsAlive$ = tuiTypedFromEvent(ownerDocument, 'mousedown', {
            capture: true,
        }).pipe(
            tuiIsAlive(),
            startWith(false),
            shareReplay({bufferSize: 1, refCount: true}),
        );
    }

    return merge(
        // focus events excluding ones that came right after mouse action
        concat(
            tuiTypedFromEvent(element, 'focus').pipe(take(1)),
            // filtering out blur events when element remains focused so that we ignore browser tab focus loss
            elementBlur$.pipe(
                filter(() => !tuiIsNativeFocused(element)),
                take(1),
                ignoreElements(),
            ),
        ).pipe(
            repeat(),
            withLatestFrom(
                documentMouseDownIsAlive$,
                documentMouseUpIsAlive$,
                (_event, elementActual, documentActual) =>
                    elementActual || documentActual,
            ),
            filter(tuiIsFalsy),
        ),
    ).pipe(
        switchMap(() =>
            elementBlur$.pipe(map(TUI_FALSE_HANDLER), take(1), startWith(true)),
        ),
        distinctUntilChanged(),
    );
}
