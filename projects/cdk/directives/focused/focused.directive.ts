import {Directive, ElementRef, Inject, Output} from '@angular/core';
import {tuiTypedFromEvent, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiIsNativeFocused} from '@taiga-ui/cdk/utils/focus';
import {distinctUntilChanged, map, merge, Observable, skip, startWith} from 'rxjs';

/**
 * Directive to monitor focus/blur status, works with focusIn/focus-out
 * instead of focus/blur to sync events order with Internet Explorer and
 * other focus related directives that require bubbling
 */
@Directive({
    selector: '[tuiFocusedChange]',
})
export class TuiFocusedDirective {
    @Output()
    readonly tuiFocusedChange: Observable<boolean>;

    constructor(
        @Inject(ElementRef)
        {nativeElement}: ElementRef<HTMLElement>,
    ) {
        this.tuiFocusedChange = merge(
            tuiTypedFromEvent(nativeElement, 'focusin'),
            tuiTypedFromEvent(nativeElement, 'focusout'),
        ).pipe(
            map(() => tuiIsNativeFocused(nativeElement)),
            startWith(false),
            distinctUntilChanged(),
            skip(1),
            tuiZoneOptimized(),
        );
    }
}
