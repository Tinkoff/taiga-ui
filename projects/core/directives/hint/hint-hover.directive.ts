/* eslint-disable rxjs/no-unsafe-takeuntil */
import {Directive, ElementRef, Inject, Input, Optional, SkipSelf} from '@angular/core';
import {TuiHoveredService} from '@taiga-ui/cdk';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';
import {tuiIsObscured} from '@taiga-ui/core/utils';
import {merge, Observable, of, Subject} from 'rxjs';
import {delay, filter, map, repeat, switchMap, takeUntil, tap} from 'rxjs/operators';

import {TUI_HINT_OPTIONS, TuiHintOptions} from './hint-options.directive';

@Directive({
    selector: '[tuiHint]:not(ng-container):not(ng-template)',
    providers: [tuiAsDriver(TuiHintHoverDirective), TuiHoveredService],
    exportAs: 'tuiHintHover',
})
export class TuiHintHoverDirective extends TuiDriver {
    private visible = false;
    private readonly toggle$ = new Subject<boolean>();
    private readonly stream$ = merge(
        this.toggle$.pipe(
            switchMap(visible => of(visible).pipe(delay(visible ? 0 : this.hideDelay))),
            takeUntil(this.hovered$),
            repeat(),
        ),
        this.hovered$.pipe(
            switchMap(visible =>
                of(visible).pipe(delay(visible ? this.showDelay : this.hideDelay)),
            ),
            takeUntil(this.toggle$),
            repeat(),
        ),
    ).pipe(
        filter(() => this.enabled),
        map(
            value =>
                value &&
                (this.el.nativeElement.hasAttribute('tuiHintPointer') ||
                    !tuiIsObscured(this.el.nativeElement)),
        ),
        tap(visible => {
            this.visible = visible;
        }),
    );

    @Input('tuiHintShowDelay')
    showDelay: TuiHintOptions['showDelay'] = this.options.showDelay;

    @Input('tuiHintHideDelay')
    hideDelay: TuiHintOptions['hideDelay'] = this.options.hideDelay;

    readonly type = 'hint';

    enabled = true;

    constructor(
        @Inject(TuiHoveredService) private readonly hovered$: Observable<boolean>,
        @Inject(TUI_HINT_OPTIONS) private readonly options: TuiHintOptions,
        @Inject(ElementRef) readonly el: ElementRef<HTMLElement>,
        @Optional()
        @SkipSelf()
        @Inject(TuiHintHoverDirective)
        private readonly parent: TuiHintHoverDirective | null,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    toggle(visible = !this.visible): void {
        this.toggle$.next(visible);
        this.parent?.toggle(visible);
    }
}
