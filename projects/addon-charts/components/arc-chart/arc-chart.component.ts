import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
    Output,
    QueryList,
    Self,
    ViewChildren,
} from '@angular/core';
import {DomSanitizer, SafeValue} from '@angular/platform-browser';
import {TuiDestroyService, tuiTypedFromEvent, tuiWatch} from '@taiga-ui/cdk';
import {TuiSizeXL} from '@taiga-ui/core';
import {merge, Observable, ReplaySubject, timer} from 'rxjs';
import {map, startWith, switchMap, takeUntil, tap} from 'rxjs/operators';

// 3/4 with 1% safety offset
const ARC = 0.76;

const SIZE: Record<TuiSizeXL, number> = {
    m: 9,
    l: 11,
    xl: 16,
};

const WIDTH: Record<TuiSizeXL, number> = {
    m: 0.25,
    l: 0.375,
    xl: 0.5625,
};

const GAP: Record<TuiSizeXL, number> = {
    m: 0.125,
    l: 0.1875,
    xl: 0.25,
};

function arcsToIndex(arcs: QueryList<ElementRef<SVGElement>>): Array<Observable<number>> {
    return arcs.map(({nativeElement}, index) =>
        merge(
            tuiTypedFromEvent(nativeElement, 'mouseenter').pipe(map(() => index)),
            tuiTypedFromEvent(nativeElement, 'mouseleave').pipe(map(() => NaN)),
        ),
    );
}

@Component({
    selector: 'tui-arc-chart',
    templateUrl: './arc-chart.template.html',
    styleUrls: ['./arc-chart.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiArcChartComponent {
    private readonly arcs$ = new ReplaySubject<QueryList<ElementRef<SVGElement>>>(1);

    @ViewChildren('arc')
    set arcs(arcs: QueryList<ElementRef<SVGElement>>) {
        this.arcs$.next(arcs);
    }

    @Input()
    value: readonly number[] = [];

    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeXL = 'm';

    @Input()
    max = 100;

    @Input()
    minLabel = '0%';

    @Input()
    maxLabel = '100%';

    @Input()
    activeItemIndex = NaN;

    @Output()
    readonly activeItemIndexChange = this.arcs$.pipe(
        switchMap(arcs =>
            arcs.changes.pipe(
                startWith(null),
                switchMap(() => merge(...arcsToIndex(arcs))),
            ),
        ),
        tap(index => {
            this.activeItemIndex = index;
        }),
    );

    initialized = false;

    constructor(
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<void>,
    ) {
        timer(0)
            .pipe(tuiWatch(cdr), takeUntil(destroy$))
            .subscribe(() => {
                this.initialized = true;
            });
    }

    @HostBinding('style.width.rem')
    @HostBinding('style.height.rem')
    get width(): number {
        return SIZE[this.size];
    }

    @HostBinding('style.strokeWidth.rem')
    get strokeWidth(): number {
        return WIDTH[this.size];
    }

    isInactive(index: number): boolean {
        return !Number.isNaN(this.activeItemIndex) && index !== this.activeItemIndex;
    }

    getInset(index: number): number {
        return this.strokeWidth / 2 + index * (this.strokeWidth + GAP[this.size]);
    }

    getDiameter(index: number): number {
        return SIZE[this.size] - 2 * this.getInset(index);
    }

    getLength(index: number): number {
        return Math.PI * this.getDiameter(index) * ARC;
    }

    getOffset(index: number): number {
        return this.getLength(index) * (1 - Math.min(this.value[index] / this.max, 1));
    }

    getColor(index: number): SafeValue {
        return this.sanitizer.bypassSecurityTrustStyle(
            `var(--tui-chart-${index}, var(--tui-support-0${index + 1}))`,
        );
    }
}
