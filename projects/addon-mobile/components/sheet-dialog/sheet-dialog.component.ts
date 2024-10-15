import {NgForOf, NgIf} from '@angular/common';
import type {AfterViewInit, ElementRef, QueryList} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, ViewChildren} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiSlideInTop} from '@taiga-ui/core/animations';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';
import {shouldCall} from '@taiga-ui/event-plugins';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {fromEvent} from 'rxjs';

import type {TuiSheetDialogOptions} from './sheet-dialog.options';

// So we re-enter ngZone and trigger change detection
function isCloseable(this: TuiSheetDialogComponent<unknown>): boolean {
    return this.context.closeable === true;
}

@Component({
    standalone: true,
    selector: 'tui-sheet-dialog',
    imports: [NgForOf, NgIf, PolymorpheusOutlet, TuiButton],
    templateUrl: './sheet-dialog.template.html',
    styleUrls: ['./sheet-dialog.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop],
    host: {
        '[@tuiSlideInTop]': 'slideInTop',
        '[style.--tui-offset.px]': 'context.offset',
        '[class._closeable]': 'context.closeable === true',
        '(document:touchstart.passive.silent)': 'onPointerChange(1)',
        '(document:touchend.silent)': 'onPointerChange(-1)',
        '(document:touchcancel.silent)': 'onPointerChange(-1)',
        '(scroll.silent)': 'onPointerChange(0)',
        '(click.self)': 'close()',
    },
})
export class TuiSheetDialogComponent<I> implements AfterViewInit {
    @ViewChildren('stops')
    private readonly stops: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly el = tuiInjectElement();
    private pointers = 0;

    protected readonly slideInTop = {
        value: '',
        params: {
            start: '100vh',
            duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)),
        },
    };

    protected readonly context =
        injectContext<TuiPopover<TuiSheetDialogOptions<I>, any>>();

    protected readonly $ = fromEvent(this.el, 'scroll')
        .pipe(takeUntilDestroyed())
        .subscribe(() => {
            this.el.style.setProperty(
                '--t-sheet-scroll',
                tuiPx(this.el.scrollHeight - this.el.scrollTop),
            );
        });

    public ngAfterViewInit(): void {
        this.el.scrollTop =
            [
                ...this.stops.map((e) => e.nativeElement.offsetTop - this.context.offset),
                this.el.clientHeight ?? Infinity,
            ][this.context.initial] ?? 0;
    }

    @shouldCall(isCloseable)
    protected close(): void {
        this.context.$implicit.complete();
    }

    protected onPointerChange(delta: number): void {
        this.pointers += delta;

        if (!this.pointers && !this.el.scrollTop) {
            this.close();
        }
    }
}
