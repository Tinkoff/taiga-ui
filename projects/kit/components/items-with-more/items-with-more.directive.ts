import {Directive, Input} from '@angular/core';
import {AbstractTuiController} from '@taiga-ui/cdk';

@Directive({
    selector: 'tui-items-with-more',
})
export class TuiItemsWithMoreDirective extends AbstractTuiController {
    @Input()
    public itemsLimit = Infinity;

    @Input()
    public required = -1;
}
