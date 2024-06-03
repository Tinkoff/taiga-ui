import {AsyncPipe, NgForOf, NgIf, NgStyle, NgTemplateOutlet} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    EventEmitter,
    HostBinding,
    HostListener,
    inject,
    Input,
    Output,
    TemplateRef,
} from '@angular/core';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';
import type {TuiSwipeDirection} from '@taiga-ui/cdk';
import {
    EMPTY_QUERY,
    TUI_IS_MOBILE,
    tuiClamp,
    tuiInjectElement,
    TuiItemDirective,
    TuiPanDirective,
    tuiPure,
    TuiSwipeDirective,
} from '@taiga-ui/cdk';

import {TuiCarouselDirective} from './carousel.directive';
import {TuiCarouselAutoscrollDirective} from './carousel-autoscroll.directive';
import {TuiCarouselScrollDirective} from './carousel-scroll.directive';

@Component({
    standalone: true,
    selector: 'tui-carousel',
    imports: [
        AsyncPipe,
        NgIf,
        NgForOf,
        NgStyle,
        NgTemplateOutlet,
        IntersectionObserverModule,
        TuiPanDirective,
        TuiSwipeDirective,
        TuiCarouselScrollDirective,
        TuiCarouselAutoscrollDirective,
    ],
    templateUrl: './carousel.template.html',
    styleUrls: ['./carousel.style.less'],
    hostDirectives: [
        {
            directive: TuiCarouselDirective,
            inputs: ['duration'],
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCarouselComponent {
    private readonly el = tuiInjectElement();
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly directive = inject(TuiCarouselDirective);
    private translate = 0;

    @ContentChildren(TuiItemDirective, {read: TemplateRef})
    protected readonly items: QueryList<TemplateRef<Record<string, unknown>>> =
        EMPTY_QUERY;

    @HostBinding('class._transitioned')
    protected transitioned = true;

    protected index = 0;

    @Input()
    @HostBinding('class._draggable')
    public draggable = false;

    @Input()
    public itemsCount = 1;

    @Output()
    public readonly indexChange = new EventEmitter<number>();

    @Input('index')
    public set indexSetter(index: number) {
        this.index = index;
        this.directive.duration = NaN;
    }

    public next(): void {
        if (this.items && this.index === this.items.length - this.itemsCount) {
            return;
        }

        this.updateIndex(this.index + 1);
    }

    public prev(): void {
        this.updateIndex(this.index - 1);
    }

    protected get transform(): string {
        const x = this.transitioned ? this.computedTranslate : this.translate;

        return `translateX(${100 * x}%)`;
    }

    @HostListener('touchstart', ['false'])
    @HostListener('touchend', ['true'])
    @HostListener('mousedown', ['false'])
    @HostListener('document:mouseup.silent', ['true'])
    protected onTransitioned(transitioned: boolean): void {
        this.transitioned = transitioned;

        if (!transitioned) {
            this.translate = this.computedTranslate;
        }
    }

    @tuiPure
    protected getStyle(itemsCount: number): Partial<CSSStyleDeclaration> {
        const percent = `${100 / itemsCount}%`;

        return {
            flexBasis: percent,
            minWidth: percent,
            maxWidth: percent,
        };
    }

    protected isDisabled(index: number): boolean {
        return index < this.index || index > this.index + this.itemsCount;
    }

    protected onIntersection(
        {intersectionRatio}: IntersectionObserverEntry,
        index: number,
    ): void {
        if (intersectionRatio && intersectionRatio !== 1 && !this.transitioned) {
            this.updateIndex(index - Math.floor(this.itemsCount / 2));
        }
    }

    protected onScroll(delta: number): void {
        if (!this.isMobile) {
            this.updateIndex(this.index + delta);
        }
    }

    protected onPan(x: number): void {
        if (!this.computedDraggable) {
            return;
        }

        const min = 1 - this.items.length / this.itemsCount;

        this.translate = tuiClamp(x / this.el.clientWidth + this.translate, min, 0);
    }

    protected onSwipe(direction: TuiSwipeDirection): void {
        if (direction === 'left') {
            this.next();
        } else if (direction === 'right') {
            this.prev();
        }
    }

    protected onAutoscroll(): void {
        this.updateIndex(this.index === this.items.length - 1 ? 0 : this.index + 1);
    }

    private get computedTranslate(): number {
        return -this.index / this.itemsCount;
    }

    private get computedDraggable(): boolean {
        return this.isMobile || this.draggable;
    }

    private updateIndex(index: number): void {
        this.index = tuiClamp(index, 0, this.items.length - 1);
        this.indexChange.emit(this.index);
        this.cdr.markForCheck();
    }
}
