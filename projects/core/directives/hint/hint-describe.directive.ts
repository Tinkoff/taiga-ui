import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, Inject, Input, OnChanges} from '@angular/core';
import {
    tuiIfMap,
    tuiIsNativeFocused,
    tuiIsPresent,
    tuiPure,
    tuiTypedFromEvent,
    tuiZoneOptimized,
} from '@taiga-ui/cdk';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';
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
        tuiZoneOptimized(),
    );

    @Input()
    tuiHintDescribe?: string | null = '';

    readonly type = 'hint';

    constructor(
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    ngOnChanges(): void {
        this.id$.next(this.tuiHintDescribe);
    }

    private get focused(): boolean {
        return tuiIsNativeFocused(this.element);
    }

    @tuiPure
    private get element(): HTMLElement {
        return (
            this.doc.getElementById(this.tuiHintDescribe || '') || this.el.nativeElement
        );
    }
}
