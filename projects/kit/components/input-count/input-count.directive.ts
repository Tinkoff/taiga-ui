import type {AfterViewInit} from '@angular/core';
import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import type {TuiInputCountComponent} from './input-count.component';

@Directive({
    selector: 'tui-input-count',
    providers: [tuiAsTextfieldHost(TuiInputCountDirective)],
})
export class TuiInputCountDirective
    extends AbstractTuiTextfieldHost<TuiInputCountComponent>
    implements AfterViewInit
{
    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    ngAfterViewInit(): void {
        if (this.host.nativeFocusableElement) {
            const {nativeFocusableElement} = this.host;

            nativeFocusableElement.autocomplete = 'off';
            nativeFocusableElement.inputMode = 'numeric';
            nativeFocusableElement.maxLength =
                nativeFocusableElement.maxLength > -1
                    ? nativeFocusableElement.maxLength
                    : 18;
        }
    }
}
