import {DOCUMENT} from '@angular/common';
import {inject, Injectable} from '@angular/core';
import {tuiGetNativeFocused, tuiIsHTMLElement} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, EMPTY, Observable} from 'rxjs';

import {TuiSheet} from './sheet';
import {TUI_SHEET_OPTIONS, TuiSheetOptions} from './sheet-options';

/**
 * @deprecated: use {@link TuiSheetDialogService}
 * drop in v4.0
 */
@Injectable({
    providedIn: 'root',
})
export class TuiSheetService {
    private readonly doc = inject(DOCUMENT);
    private readonly options = inject<TuiSheetOptions>(TUI_SHEET_OPTIONS);
    readonly sheets$ = new BehaviorSubject<Array<TuiSheet<any, any>>>([]);

    open<G>(
        content: PolymorpheusContent<TuiSheet<G>>,
        options: Partial<TuiSheetOptions> = {},
    ): Observable<G> {
        return new Observable($implicit => {
            const completeWith = (result: G): void => {
                $implicit.next(result);
                $implicit.complete();
            };
            const sheet: TuiSheet<any> = {
                ...this.options,
                ...options,
                content,
                completeWith,
                $implicit,
                scroll$: EMPTY,
            };
            const focused = tuiGetNativeFocused(this.doc);

            if (tuiIsHTMLElement(focused) && sheet.overlay) {
                focused.blur();
            }

            this.sheets$.next([...this.sheets$.value, sheet]);

            return () => {
                this.sheets$.next(this.sheets$.value.filter(item => item !== sheet));
            };
        });
    }
}
