import {Directive, ElementRef, HostBinding, inject, Input, NgZone} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiTypedFromEvent, tuiZonefree} from '@taiga-ui/cdk/observables';
import type {TuiEventWith, TuiOverscrollMode} from '@taiga-ui/cdk/types';
import {tuiCanScroll, tuiGetScrollParent, tuiIsElement} from '@taiga-ui/cdk/utils/dom';
import {filter, switchMap, tap} from 'rxjs';

/**
 * Directive to isolate scrolling, i.e. prevent body scroll behind modal dialog
 */
@Directive({
    selector: '[tuiOverscroll]',
})
export class TuiOverscrollDirective {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly zone = inject(NgZone);

    @Input('tuiOverscroll')
    public mode: TuiOverscrollMode | '' = 'scroll';

    constructor() {
        tuiTypedFromEvent(this.el, 'wheel', {passive: false})
            .pipe(
                filter(() => this.enabled),
                tuiZonefree(this.zone),
                takeUntilDestroyed(),
            )
            .subscribe(event => {
                this.processEvent(
                    event,
                    !!event.deltaY,
                    event.deltaY ? event.deltaY < 0 : event.deltaX < 0,
                );
            });

        tuiTypedFromEvent(this.el, 'touchstart', {passive: true})
            .pipe(
                switchMap(({touches}) => {
                    let {clientX, clientY} = touches[0];
                    let deltaX = 0;
                    let deltaY = 0;
                    let vertical: boolean;

                    return tuiTypedFromEvent(this.el, 'touchmove', {
                        passive: false,
                    }).pipe(
                        filter(() => this.enabled),
                        tap(event => {
                            // We have to have it in tap instead of subscribe due to variables in closure
                            const changedTouch = event.changedTouches[0];

                            deltaX = clientX - changedTouch.clientX;
                            deltaY = clientY - changedTouch.clientY;
                            clientX = changedTouch.clientX;
                            clientY = changedTouch.clientY;

                            if (vertical === undefined) {
                                vertical = Math.abs(deltaY) > Math.abs(deltaX);
                            }

                            this.processEvent(
                                event,
                                vertical,
                                vertical ? deltaY < 0 : deltaX < 0,
                            );
                        }),
                    );
                }),
                tuiZonefree(this.zone),
                takeUntilDestroyed(),
            )
            .subscribe();
    }

    @HostBinding('style.overscrollBehavior')
    protected get overscrollBehavior(): 'contain' | null {
        return this.enabled ? 'contain' : null;
    }

    protected get enabled(): boolean {
        return this.mode !== 'none';
    }

    private processEvent(
        event: TuiEventWith<Event, HTMLElement>,
        vertical: boolean,
        negative: boolean,
    ): void {
        const {target, currentTarget, cancelable} = event;

        if (
            !cancelable ||
            !tuiIsElement(target) ||
            (target as HTMLInputElement)?.type === 'range'
        ) {
            return;
        }

        // This is all what's needed in Chrome/Firefox thanks to CSS overscroll-behavior
        if (
            this.mode === 'all' &&
            ((vertical && !currentTarget.contains(tuiGetScrollParent(target))) ||
                (!vertical && !currentTarget.contains(tuiGetScrollParent(target, false))))
        ) {
            event.preventDefault();

            return;
        }

        // This is Safari/IE/Edge fallback
        if (
            vertical &&
            ((negative && !tuiCanScroll(target, currentTarget, true, false)) ||
                (!negative && !tuiCanScroll(target, currentTarget, true, true)))
        ) {
            event.preventDefault();

            return;
        }

        if (
            !vertical &&
            ((negative && !tuiCanScroll(target, currentTarget, false, false)) ||
                (!negative && !tuiCanScroll(target, currentTarget, false, true)))
        ) {
            event.preventDefault();
        }
    }
}
