import {Directive, Inject} from '@angular/core';
import {TuiPanService} from '@taiga-ui/cdk/services';
import {Observable} from 'rxjs';

@Directive({
    selector: '[tuiPan]',
    providers: [TuiPanService],
    outputs: ['tuiPan'],
})
export class TuiPanDirective {
    constructor(
        @Inject(TuiPanService) readonly tuiPan: Observable<readonly [number, number]>,
    ) {}
}
