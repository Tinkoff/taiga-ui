import {tuiCreateToken} from '@taiga-ui/cdk';

export const TUI_EMAIL_PIPE_OPTIONS = tuiCreateToken([
    'gmail.com',
    'outlook.com',
    'icloud.com',
    'me.com',
    'yahoo.com',
    'mail.com',
    'proton.me',
]);
