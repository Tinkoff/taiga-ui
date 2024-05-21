import {Directive, inject} from '@angular/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/core/classes';
import {tuiAsTextfieldHost} from '@taiga-ui/core/tokens';

import {TuiPrimitiveTextfieldComponent} from './primitive-textfield.component';

@Directive({
    selector: 'tui-primitive-textfield',
    providers: [tuiAsTextfieldHost(TuiPrimitiveTextfieldDirective)],
})
export class TuiPrimitiveTextfieldDirective extends AbstractTuiTextfieldHost<any> {
    protected override readonly host = inject(TuiPrimitiveTextfieldComponent);

    public override get readOnly(): boolean {
        return this.host.readOnly || !this.host.editable;
    }

    public onValueChange(value: string): void {
        this.host.onModelChange(value);
    }
}
