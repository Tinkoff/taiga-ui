import {InjectionToken} from '@angular/core';
import {TuiDateMode} from '../types/date-mode';

/**
 * TODO This token supports only DMY now. Add other {@link TuiDateMode} support
 */
export const TUI_DATE_FORMAT = new InjectionToken<TuiDateMode>(
    'Active date format for Taiga UI',
    {
        factory: () => 'DMY',
    },
);
