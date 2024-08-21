import type {OnChanges} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    NgZone,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement, tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {tuiBadgeNotificationOptionsProvider} from '@taiga-ui/kit/components/badge-notification';

import {TuiSegmentedDirective} from './segmented.directive';

@Component({
    standalone: true,
    selector: 'tui-segmented',
    template: '<ng-content />',
    styleUrls: ['./segmented.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ResizeObserverService, tuiBadgeNotificationOptionsProvider({size: 's'})],
    hostDirectives: [TuiSegmentedDirective],
    host: {
        '[attr.data-size]': 'size',
    },
})
export class TuiSegmented implements OnChanges {
    private readonly el = tuiInjectElement();

    protected readonly sub = inject(ResizeObserverService, {self: true})
        .pipe(tuiZonefree(inject(NgZone)), takeUntilDestroyed())
        .subscribe(() => this.refresh());

    @Input()
    public size: TuiSizeL | TuiSizeS = 's';

    @Input()
    public activeItemIndex = 0;

    @Output()
    public readonly activeItemIndexChange = new EventEmitter<number>();

    public ngOnChanges(): void {
        this.refresh();
    }

    public update(activeItemIndex: number): void {
        if (activeItemIndex === this.activeItemIndex || activeItemIndex < 0) {
            return;
        }

        this.activeItemIndex = activeItemIndex;
        this.activeItemIndexChange.emit(activeItemIndex);
        this.refresh();
    }

    private get left(): number {
        const element = this.activeElement;

        return tuiIsHTMLElement(element) ? element.offsetLeft : 0;
    }

    private get width(): number {
        return this.activeElement?.clientWidth || 0;
    }

    private get activeElement(): Element | null {
        return this.el.children.item(this.activeItemIndex);
    }

    // TODO: Switch to HostBinding signals in Angular 17+
    private refresh(): void {
        this.el.style.setProperty('--t-left', tuiPx(this.left));
        this.el.style.setProperty('--t-width', tuiPx(this.width));
    }
}
