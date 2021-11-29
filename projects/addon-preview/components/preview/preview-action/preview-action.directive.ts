import {Directive} from '@angular/core';
import {ButtonOptions, TUI_BUTTON_OPTIONS} from '@taiga-ui/core';

export const PREVIEW_ACTION_OPTIONS: ButtonOptions = {
    appearance: 'preview-action',
    shape: 'rounded',
    size: 's',
};

@Directive({
    selector: '[tuiPreviewAction]',
    providers: [
        {
            provide: TUI_BUTTON_OPTIONS,
            useValue: PREVIEW_ACTION_OPTIONS,
        },
    ],
    host: {
        style: 'margin-left: 0.652rem',
    },
})
export class TuiPreviewActionDirective {}
