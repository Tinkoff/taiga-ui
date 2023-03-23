import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import type {TuiInputDateComponent} from './input-date.component';

@Directive({
    selector: 'tui-input-date',
    providers: [tuiAsTextfieldHost(TuiInputDateDirective)],
})
export class TuiInputDateDirective extends AbstractTuiTextfieldHost<TuiInputDateComponent> {
    override get value(): string {
        return this.host.computedValue;
    }

    onValueChange(value: string): void {
        if (!value) {
            this.host.nativeValue = '';
        }

        this.host.onValueChange(value);
    }

    override process(input: HTMLInputElement): void {
        input.inputMode = 'numeric';
    }
}
