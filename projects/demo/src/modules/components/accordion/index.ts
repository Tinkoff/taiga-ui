import type {ElementRef} from '@angular/core';
import {Component, DestroyRef, inject, ViewChild} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeS} from '@taiga-ui/core';
import {TUI_EXPAND_LOADED} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';
import {timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiAccordion, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    private readonly destroyRef = inject(DestroyRef);

    @ViewChild('content')
    protected content?: ElementRef;

    protected async = false;
    protected closeOthers = true;
    protected disabled = false;
    protected noPadding = false;
    protected open = false;
    protected rounded = true;
    protected showArrow = true;
    protected disableHover = false;

    protected readonly bordersVariants = ['all', 'top-bottom'] as const;

    protected borders: 'all' | 'top-bottom' = this.bordersVariants[0];

    protected readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];

    protected size: TuiSizeS = this.sizeVariants[1]!;

    protected onOpenChange(open: boolean): void {
        this.open = open;

        if (!this.async || !open) {
            return;
        }

        timer(3000)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() =>
                this.content?.nativeElement.dispatchEvent(
                    new CustomEvent(TUI_EXPAND_LOADED, {bubbles: true}),
                ),
            );
    }
}
