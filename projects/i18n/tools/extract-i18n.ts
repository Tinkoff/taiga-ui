import {inject} from '@angular/core';
import type {TuiLanguage} from '@taiga-ui/i18n/types';
import {TUI_LANGUAGE} from '@taiga-ui/i18n/tokens';
import type {Observable} from 'rxjs';
import {isObservable, map, of, switchMap} from 'rxjs';

export function tuiExtractI18n<K extends keyof TuiLanguage>(
    key: K,
): () => Observable<TuiLanguage[K]> {
    return () =>
        inject(TUI_LANGUAGE).pipe(
            switchMap((streamOrValue: Observable<TuiLanguage> | TuiLanguage) =>
                isObservable(streamOrValue) ? streamOrValue : of(streamOrValue),
            ),
            map((lang: TuiLanguage) => lang[key]),
        );
}
