import {inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated: drop in v5.0
 * Chromium browser engine detection
 */
export const TUI_IS_CHROMIUM = tuiCreateTokenFromFactory(
    () => !!(inject(WINDOW) as Window & {chrome: unknown}).chrome,
);
