import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    Optional,
} from '@angular/core';
import {INTERSECTION_ROOT} from '@ng-web-apis/intersection-observer';

import {TuiSwipeActionsOpenDirective} from './swipe-actions-open.directive';

@Component({
    selector: 'tui-swipe-actions',
    templateUrl: './swipe-actions.template.html',
    styleUrls: ['./swipe-actions.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-actions-width]': 'actionsWidth',
        '[style.--t-content-width]': 'contentWidth',
    },
    providers: [
        {
            provide: INTERSECTION_ROOT,
            useExisting: ElementRef,
        },
    ],
})
export class TuiSwipeActionsComponent {
    actionsWidth = 0;
    contentWidth = 0;

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Optional()
        @Inject(TuiSwipeActionsOpenDirective)
        private readonly open?: TuiSwipeActionsOpenDirective,
    ) {}

    onResize({target}: ResizeObserverEntry): void {
        this.actionsWidth = target.clientWidth;
        this.contentWidth = this.elementRef.nativeElement.scrollWidth - this.actionsWidth;
    }

    onIntersection({isIntersecting}: IntersectionObserverEntry): void {
        this.open?.update(isIntersecting);
    }
}
