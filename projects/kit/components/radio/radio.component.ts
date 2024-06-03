import type {DoCheck} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {NgControl} from '@angular/forms';
import {tuiInjectElement, TuiNativeValidatorDirective} from '@taiga-ui/cdk';
import type {TuiSizeS} from '@taiga-ui/core';
import {TuiAppearanceDirective} from '@taiga-ui/core';

import {TUI_RADIO_OPTIONS} from './radio.options';

@Component({
    standalone: true,
    selector: 'input[type="radio"][tuiRadio]',
    template: '',
    styleUrls: ['./radio.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        {
            directive: TuiAppearanceDirective,
            inputs: [
                'tuiAppearance: appearance',
                'tuiAppearanceState',
                'tuiAppearanceFocus',
            ],
        },
        TuiNativeValidatorDirective,
    ],
    host: {
        '[disabled]': '!control || control.disabled',
        '[attr.data-size]': 'size',
        '[class._readonly]': '!control',
    },
})
export class TuiRadioComponent implements DoCheck {
    private readonly appearance = inject(TuiAppearanceDirective);
    private readonly options = inject(TUI_RADIO_OPTIONS);
    private readonly el = tuiInjectElement<HTMLInputElement>();

    protected readonly control = inject(NgControl, {optional: true, self: true});

    @Input()
    public size: TuiSizeS = this.options.size;

    public ngDoCheck(): void {
        this.appearance.tuiAppearance = this.options.appearance(this.el);
    }
}
