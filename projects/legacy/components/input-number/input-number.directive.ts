import type {DoCheck} from '@angular/core';
import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';
import {tuiAsTextfieldHost} from '@taiga-ui/legacy/tokens';

import type {TuiInputNumberComponent} from './input-number.component';

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    selector: 'tui-input-number',
    providers: [tuiAsTextfieldHost(TuiInputNumberDirective)],
})
export class TuiInputNumberDirective
    extends AbstractTuiTextfieldHost<TuiInputNumberComponent>
    implements DoCheck
{
    protected input?: HTMLInputElement;

    public override get value(): string {
        return this.host.computedValue;
    }

    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    public ngDoCheck(): void {
        if (!this.host.nativeFocusableElement) {
            return;
        }

        this.host.nativeFocusableElement.inputMode = this.host.inputMode;
        this.host.nativeFocusableElement.maxLength =
            this.host.nativeFocusableElement.maxLength > 0
                ? this.host.nativeFocusableElement.maxLength
                : this.host.calculatedMaxLength;
    }
}
