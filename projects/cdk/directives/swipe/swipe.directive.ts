import {Directive, Inject} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk/services';
import {TuiSwipeService} from '../../services/swipe.service';

// @dynamic
@Directive({
    selector: '[tuiSwipe]',
    outputs: ['tuiSwipe'],
    providers: [TuiDestroyService, TuiSwipeService],
})
export class TuiSwipeDirective {
    constructor(@Inject(TuiSwipeService) readonly tuiSwipe: TuiSwipeService) {}
}
