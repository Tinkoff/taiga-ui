import {DOCUMENT} from '@angular/common';
import {inject} from '@angular/core';
import {tuiCreateTokenFromFactory, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {merge, Observable} from 'rxjs';
import {share, switchMap, takeUntil} from 'rxjs/operators';

/**
 * A stream of possible selection changes
 */
export const TUI_SELECTION_STREAM = tuiCreateTokenFromFactory<Observable<unknown>>(() => {
    const doc = inject(DOCUMENT);

    return merge(
        tuiTypedFromEvent(doc, `selectionchange`),
        tuiTypedFromEvent(doc, `mouseup`),
        tuiTypedFromEvent(doc, `mousedown`).pipe(
            switchMap(() =>
                tuiTypedFromEvent(doc, `mousemove`).pipe(
                    takeUntil(tuiTypedFromEvent(doc, `mouseup`)),
                ),
            ),
        ),
        tuiTypedFromEvent(doc, `keydown`),
        tuiTypedFromEvent(doc, `keyup`),
    ).pipe(share());
});
