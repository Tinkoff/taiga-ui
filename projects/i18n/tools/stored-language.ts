import {inject, InjectionToken} from '@angular/core';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {TUI_I18N_STORAGE_KEY, TUI_LANGUAGE_MAP} from '@taiga-ui/i18n';

import {Language} from '..';
import {TUI_DEFAULT_LANGUAGE} from './default-lanuage';

export const TUI_STORED_LANGUAGE = new InjectionToken<Language>(
    `Stored language for Taiga UI libraries i18n`,
    {
        factory: () => {
            const storage = inject(LOCAL_STORAGE);
            const defaultLanguage = inject(TUI_DEFAULT_LANGUAGE);
            const storageKey = inject(TUI_I18N_STORAGE_KEY);
            const storedLanguageCode = storage.getItem(storageKey);
            let result: Language = defaultLanguage;

            if (storedLanguageCode && TUI_LANGUAGE_MAP.has(storedLanguageCode)) {
                result = TUI_LANGUAGE_MAP.get(storedLanguageCode) as Language;
            }

            return result;
        },
    },
);
