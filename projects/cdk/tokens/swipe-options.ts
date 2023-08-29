import {TuiSwipeOptions} from '@taiga-ui/cdk/interfaces';
import {tuiCreateToken} from '@taiga-ui/cdk/utils';

/**
 * Swipe options
 */
export const TUI_SWIPE_OPTIONS = tuiCreateToken<TuiSwipeOptions>({
    threshold: 30,
    timeout: 500,
});
