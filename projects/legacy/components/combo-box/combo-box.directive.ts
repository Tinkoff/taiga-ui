import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import type {TuiComboBoxComponent} from './combo-box.component';

@Directive({
    selector: 'tui-combo-box',
    providers: [tuiAsTextfieldHost(TuiComboBoxDirective)],
})
export class TuiComboBoxDirective extends AbstractTuiTextfieldHost<
    TuiComboBoxComponent<unknown>
> {
    public override get value(): string {
        return this.host.nativeValue;
    }

    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
