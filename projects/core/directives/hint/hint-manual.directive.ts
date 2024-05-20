import type {OnChanges} from '@angular/core';
import {Directive, inject, Input} from '@angular/core';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/classes';
import {BehaviorSubject} from 'rxjs';

import {TuiHintHoverDirective} from './hint-hover.directive';

@Directive({
    selector: '[tuiHint][tuiHintManual]',
    providers: [tuiAsDriver(TuiHintManualDirective)],
})
export class TuiHintManualDirective extends TuiDriver implements OnChanges {
    private readonly hover = inject(TuiHintHoverDirective);
    private readonly stream$ = new BehaviorSubject(false);

    @Input()
    public tuiHintManual = false;

    public readonly type = 'hint';

    constructor() {
        super(subscriber => this.stream$.subscribe(subscriber));
        this.hover.enabled = false;
    }

    public ngOnChanges(): void {
        this.stream$.next(this.tuiHintManual);
    }
}
