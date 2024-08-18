import {Directive, inject, Input, NgZone} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WA_ANIMATION_FRAME} from '@ng-web-apis/common';
import {tuiScrollFrom, tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {merge, throttleTime} from 'rxjs';

import {TuiScrollbarService} from './scrollbar.service';

const MIN_WIDTH = 24;

interface ComputedDimension {
    scrollTop: number;
    scrollHeight: number;
    clientHeight: number;
    scrollLeft: number;
    scrollWidth: number;
    clientWidth: number;
}

@Directive({
    standalone: true,
    selector: '[tuiScrollbar]',
    providers: [TuiScrollbarService],
})
export class TuiScrollbarDirective {
    private readonly el = inject(TUI_SCROLL_REF).nativeElement;
    private readonly style = tuiInjectElement().style;

    protected readonly scrollSub = inject(TuiScrollbarService)
        .pipe(takeUntilDestroyed())
        .subscribe(([top, left]) => {
            this.el.style.scrollBehavior = 'auto';
            this.el.scrollTo({top, left});
            this.el.style.scrollBehavior = '';
        });

    protected readonly styleSub = merge(
        inject(WA_ANIMATION_FRAME).pipe(throttleTime(100)),
        tuiScrollFrom(this.el),
    )
        .pipe(tuiZonefree(inject(NgZone)), takeUntilDestroyed())
        .subscribe(() => {
            const dimension: ComputedDimension = {
                scrollTop: this.el.scrollTop,
                scrollHeight: this.el.scrollHeight,
                clientHeight: this.el.clientHeight,
                scrollLeft: this.el.scrollLeft,
                scrollWidth: this.el.scrollWidth,
                clientWidth: this.el.clientWidth,
            };

            if (this.tuiScrollbar === 'vertical') {
                this.style.top = `${this.getThumb(dimension) * 100}%`;
                this.style.height = `${this.getView(dimension) * 100}%`;
            } else {
                this.style.left = `${this.getThumb(dimension) * 100}%`;
                this.style.width = `${this.getView(dimension) * 100}%`;
            }
        });

    @Input()
    public tuiScrollbar: 'horizontal' | 'vertical' = 'vertical';

    private getScrolled(dimension: ComputedDimension): number {
        return this.tuiScrollbar === 'vertical'
            ? dimension.scrollTop / (dimension.scrollHeight - dimension.clientHeight)
            : dimension.scrollLeft / (dimension.scrollWidth - dimension.clientWidth);
    }

    private getCompensation(dimension: ComputedDimension): number {
        if (
            ((dimension.clientHeight * dimension.clientHeight) / dimension.scrollHeight >
                MIN_WIDTH &&
                this.tuiScrollbar === 'vertical') ||
            ((dimension.clientWidth * dimension.clientWidth) / dimension.scrollWidth >
                MIN_WIDTH &&
                this.tuiScrollbar === 'horizontal')
        ) {
            return 0;
        }

        return this.tuiScrollbar === 'vertical'
            ? MIN_WIDTH / dimension.clientHeight
            : MIN_WIDTH / dimension.clientWidth;
    }

    private getThumb(dimension: ComputedDimension): number {
        const compensation = this.getCompensation(dimension) || this.getView(dimension);

        return this.getScrolled(dimension) * (1 - compensation);
    }

    private getView(dimension: ComputedDimension): number {
        return this.tuiScrollbar === 'vertical'
            ? Math.ceil((dimension.clientHeight / dimension.scrollHeight) * 100) / 100
            : Math.ceil((dimension.clientWidth / dimension.scrollWidth) * 100) / 100;
    }
}
