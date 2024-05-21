import {DOCUMENT} from '@angular/common';
import type {OnChanges} from '@angular/core';
import {Directive, inject, Input, NgZone} from '@angular/core';
import {
    tuiIfMap,
    tuiInjectElement,
    tuiIsNativeFocused,
    tuiIsPresent,
    tuiPure,
    tuiTypedFromEvent,
    tuiZoneOptimized,
} from '@taiga-ui/cdk';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/classes';
import {
    debounce,
    distinctUntilChanged,
    fromEvent,
    map,
    merge,
    of,
    ReplaySubject,
    skip,
    startWith,
    switchMap,
    timer,
} from 'rxjs';

@Directive({
    selector: '[tuiHintDescribe]',
    providers: [tuiAsDriver(TuiHintDescribeDirective)],
})
export class TuiHintDescribeDirective extends TuiDriver implements OnChanges {
    private readonly zone = inject(NgZone);
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement();
    private readonly id$ = new ReplaySubject(1);
    private readonly stream$ = this.id$.pipe(
        tuiIfMap(() => fromEvent(this.doc, 'keydown', {capture: true}), tuiIsPresent),
        switchMap(() =>
            this.focused
                ? of(false)
                : merge(
                      tuiTypedFromEvent(this.doc, 'keyup'),
                      tuiTypedFromEvent(this.element, 'blur'),
                  ).pipe(map(() => this.focused)),
        ),
        debounce(visible => (visible ? timer(1000) : of(null))),
        startWith(false),
        distinctUntilChanged(),
        skip(1),
        tuiZoneOptimized(this.zone),
    );

    @Input()
    public tuiHintDescribe?: string | null = '';

    public readonly type = 'hint';

    constructor() {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    public ngOnChanges(): void {
        this.id$.next(this.tuiHintDescribe);
    }

    @tuiPure
    private get element(): HTMLElement {
        return this.doc.getElementById(this.tuiHintDescribe || '') || this.el;
    }

    private get focused(): boolean {
        return tuiIsNativeFocused(this.element);
    }
}
