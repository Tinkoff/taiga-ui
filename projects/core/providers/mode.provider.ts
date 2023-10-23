import {ElementRef, Optional, Provider} from '@angular/core';
import {TuiModeDirective} from '@taiga-ui/core/directives/mode';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import {TuiBrightness} from '@taiga-ui/core/types';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export const MODE_PROVIDER: Provider = {
    provide: TUI_MODE,
    deps: [
        [new Optional(), TuiModeDirective],
        [new Optional(), ElementRef],
    ],
    useFactory: (
        mode: TuiModeDirective | null,
        elementRef: ElementRef | null,
    ): Observable<TuiBrightness | null> => {
        const mode$ = mode
            ? mode.change$.pipe(
                  startWith(null),
                  map(() => mode.mode),
              )
            : of(null);

        if (elementRef) {
            elementRef.nativeElement[`$.data-mode.attr`] = mode$;
        }

        return mode$;
    },
};
