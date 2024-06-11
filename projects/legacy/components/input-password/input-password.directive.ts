import type {DoCheck} from '@angular/core';
import {Directive} from '@angular/core';
import {tuiIsInput} from '@taiga-ui/cdk';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';
import {tuiAsTextfieldHost} from '@taiga-ui/legacy/tokens';

import type {TuiInputPasswordComponent} from './input-password.component';

@Directive({
    selector: 'tui-input-password',
    providers: [tuiAsTextfieldHost(TuiInputPasswordDirective)],
})
export class TuiInputPasswordDirective
    extends AbstractTuiTextfieldHost<TuiInputPasswordComponent>
    implements DoCheck
{
    protected input?: HTMLInputElement;

    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    public override process(input: HTMLInputElement): void {
        this.input = input;
    }

    public ngDoCheck(): void {
        if (
            this.host.nativeFocusableElement &&
            tuiIsInput(this.host.nativeFocusableElement)
        ) {
            this.host.nativeFocusableElement.type = this.host.inputType;
        }
    }
}
