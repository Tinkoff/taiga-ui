import type {Provider, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiAriaDialogContext} from '@taiga-ui/cdk/interfaces';
import type {Observable} from 'rxjs';

export const TUI_DIALOGS = new InjectionToken<
    ReadonlyArray<Observable<readonly TuiAriaDialogContext[]>>
>(`A stream of dialogs`, {
    factory: () => [],
});

export function tuiAsDialog(
    useExisting: Type<Observable<readonly TuiAriaDialogContext[]>>,
): Provider {
    return {
        provide: TUI_DIALOGS,
        multi: true,
        useExisting,
    };
}
