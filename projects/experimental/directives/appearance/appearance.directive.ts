import {Directive, inject, Input} from '@angular/core';
import {TuiInteractiveStateT} from '@taiga-ui/core';

import {TUI_APPEARANCE_OPTIONS} from './appearance.options';

@Directive({
    standalone: true,
    selector: '[tuiAppearance]',
    host: {
        tuiAppearance: '',
        '[attr.data-appearance]': 'tuiAppearance',
        '[attr.data-state]': 'tuiAppearanceState',
        '[attr.data-focus]': 'tuiAppearanceFocus',
    },
})
export class TuiAppearanceDirective {
    @Input()
    tuiAppearance = inject(TUI_APPEARANCE_OPTIONS).appearance;

    @Input()
    tuiAppearanceState: TuiInteractiveStateT | null = null;

    @Input()
    tuiAppearanceFocus: boolean | null = null;
}

export const TUI_APPEARANCE = {
    directive: TuiAppearanceDirective,
    inputs: ['tuiAppearance: appearance', 'tuiAppearanceState', 'tuiAppearanceFocus'],
};
