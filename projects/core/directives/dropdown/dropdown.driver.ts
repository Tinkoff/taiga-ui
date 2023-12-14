import {Directive, Injectable} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {AbstractTuiDriverDirective, TuiDriver} from '@taiga-ui/core/abstract';
import {Subject} from 'rxjs';

@Injectable()
export class TuiDropdownDriver extends Subject<boolean> implements TuiDriver {
    readonly type = `dropdown`;
}

@Directive({
    standalone: true,
    selector: `[tuiDropdownDriver]`,
    providers: [TuiDestroyService],
})
export class TuiDropdownDriverDirective extends AbstractTuiDriverDirective {
    readonly type = `dropdown`;
}
