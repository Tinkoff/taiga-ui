import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';
import {tuiAsTextfieldHost} from '@taiga-ui/legacy/tokens';

import type {TuiInputCopyComponent} from './input-copy.component';

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    selector: 'tui-input-copy',
    providers: [tuiAsTextfieldHost(TuiInputCopyDirective)],
})
export class TuiInputCopyDirective extends AbstractTuiTextfieldHost<TuiInputCopyComponent> {
    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
