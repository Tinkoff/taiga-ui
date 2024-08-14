import {TuiLanguage} from '@taiga-ui/i18n/interfaces';

import {TUI_JAPAN_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_JAPAN_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_JAPAN_LANGUAGE_ADDON_PREVIEW} from './addon-preview';
import {TUI_JAPAN_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_JAPAN_LANGUAGE_CORE} from './core';
import {TUI_JAPAN_LANGUAGE_KIT} from './kit';

export const TUI_JAPAN_LANGUAGE: TuiLanguage = {
    name: 'japan',
    ...TUI_JAPAN_LANGUAGE_CORE,
    ...TUI_JAPAN_LANGUAGE_KIT,
    ...TUI_JAPAN_LANGUAGE_ADDON_TABLE,
    ...TUI_JAPAN_LANGUAGE_ADDON_COMMERCE,
    ...TUI_JAPAN_LANGUAGE_ADDON_EDITOR,
    ...TUI_JAPAN_LANGUAGE_ADDON_PREVIEW,
};
