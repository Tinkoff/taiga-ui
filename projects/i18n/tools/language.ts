import {InjectionToken} from '@angular/core';
import {TuiLanguage} from '@taiga-ui/i18n/interfaces';
import {TUI_ENGLISH_LANGUAGE} from '@taiga-ui/i18n/languages';
import {Observable, of} from 'rxjs';

export const TUI_LANGUAGE = new InjectionToken<Observable<TuiLanguage>>(
    `Language for Taiga UI libraries i18n`,
    {
        factory: () => of(TUI_ENGLISH_LANGUAGE),
    },
);
