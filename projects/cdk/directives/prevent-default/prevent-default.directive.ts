import {Directive, ElementRef, Inject, Input, OnInit, Self} from '@angular/core';
import {tuiPreventDefault, tuiZonefree} from '@taiga-ui/cdk/observables';
import {TuiDestroyService} from '@taiga-ui/cdk/services';
import {fromEvent, Observable, takeUntil} from 'rxjs';

/**
 * @description:
 * Simple prevent default on event directive when you do not need anything
 * else on event and do not want to trigger change detection
 */
@Directive({
    selector: '[tuiPreventDefault]',
    providers: [TuiDestroyService],
})
export class TuiPreventDefaultDirective implements OnInit {
    @Input('tuiPreventDefault')
    eventName = '';

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: Observable<void>,
    ) {}

    ngOnInit(): void {
        fromEvent(this.el.nativeElement, this.eventName, {passive: false})
            .pipe(tuiZonefree(), tuiPreventDefault(), takeUntil(this.destroy$))
            .subscribe();
    }
}
