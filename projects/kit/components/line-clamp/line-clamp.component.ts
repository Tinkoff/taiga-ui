import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    ElementRef,
    HostListener,
    Inject,
    Input,
    NgZone,
    Output,
    Renderer2,
    ViewChild,
} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiIsCurrentTarget, tuiPx, tuiTypedFromEvent, tuiZonefree} from '@taiga-ui/cdk';
import {TUI_HINT_COMPONENT, TuiHintDirective} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, Observable, of, Subject, timer} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    pairwise,
    startWith,
    switchMap,
} from 'rxjs/operators';

import {TUI_LINE_CLAMP_OPTIONS, TuiLineClampOptions} from './line-clamp.options';
import {TuiLineClampBoxComponent} from './line-clamp-box.component';

@Component({
    selector: 'tui-line-clamp',
    templateUrl: './line-clamp.template.html',
    styleUrls: ['./line-clamp.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_HINT_COMPONENT,
            useValue: TuiLineClampBoxComponent,
        },
    ],
})
export class TuiLineClampComponent implements DoCheck, AfterViewInit {
    @ViewChild(TuiHintDirective, {read: ElementRef})
    private readonly outlet?: ElementRef<HTMLElement>;

    private readonly linesLimit$ = new BehaviorSubject(1);
    private readonly isOverflown$ = new Subject<boolean>();
    private initialized = false;

    @Input()
    set linesLimit(linesLimit: number) {
        this.linesLimit$.next(linesLimit);
    }

    @Input()
    lineHeight: number | 'auto' = 24;

    @Input()
    content: PolymorpheusContent;

    @Output()
    readonly overflownChange: Observable<boolean> =
        this.isOverflown$.pipe(distinctUntilChanged());

    lineClamp$ = this.linesLimit$.pipe(
        startWith(1),
        pairwise(),
        switchMap(([prev, next]) =>
            next >= prev
                ? of(next)
                : tuiTypedFromEvent(this.el.nativeElement, 'transitionend').pipe(
                      filter(tuiIsCurrentTarget),
                      map(() => next),
                  ),
        ),
    );

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(ChangeDetectorRef) private readonly cd: ChangeDetectorRef,
        @Inject(NgZone) private readonly zone: NgZone,
        @Inject(WINDOW) private readonly window: Window,
        @Inject(TUI_LINE_CLAMP_OPTIONS) private readonly options: TuiLineClampOptions,
    ) {
        this.skipInitialTransition();
    }

    get overflown(): boolean {
        if (!this.outlet) {
            return false;
        }

        const {scrollHeight, scrollWidth} = this.outlet.nativeElement;
        const {clientHeight, clientWidth} = this.el.nativeElement;

        // 4px buffer for IE/Edge incorrectly rounding scrollHeight
        return scrollHeight - clientHeight > 4 || scrollWidth - clientWidth > 0;
    }

    get computedContent(): PolymorpheusContent {
        return this.options.showHint && this.overflown ? this.content : '';
    }

    private get computedLineHeight(): number {
        if (this.lineHeight === 'auto') {
            return (
                parseInt(
                    this.window.getComputedStyle(this.el.nativeElement).lineHeight,
                    10,
                ) || 24
            );
        }

        return this.lineHeight;
    }

    @HostListener('transitionend')
    updateView(): void {
        this.cd.detectChanges();
    }

    ngDoCheck(): void {
        this.update();
        this.isOverflown$.next(this.overflown);
    }

    ngAfterViewInit(): void {
        this.initialized = true;
    }

    private skipInitialTransition(): void {
        timer(0)
            .pipe(tuiZonefree(this.zone))
            .subscribe(() => {
                this.renderer.addClass(this.el.nativeElement, '_initialized');
                this.cd.detectChanges();
            });
    }

    private update(): void {
        if (this.outlet) {
            this.renderer.setStyle(
                this.el.nativeElement,
                'height',
                tuiPx(this.outlet.nativeElement.scrollHeight + 4),
            );
        }

        if (this.initialized) {
            this.renderer.setStyle(
                this.el.nativeElement,
                'max-height',
                tuiPx(this.computedLineHeight * this.linesLimit$.value),
            );
        }
    }
}
