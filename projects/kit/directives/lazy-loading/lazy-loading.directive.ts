import {Directive, inject, Input, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {SafeResourceUrl} from '@angular/platform-browser';
import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

import {TuiLazyLoadingService} from './lazy-loading.service';

@Directive({
    standalone: true,
    selector: 'img[loading="lazy"]',
    providers: [TuiLazyLoadingService, IntersectionObserverService],
    host: {
        '[style.animation]': 'animation()',
        '[style.background]': 'background()',
        '[attr.src]': 'src()',
        '(load)': 'unset()',
        '(error)': 'unset()',
    },
})
export class TuiImgLazyLoading {
    private readonly el = tuiInjectElement<HTMLImageElement>();
    private readonly loading$ = inject(TuiLazyLoadingService);
    private readonly supported = 'loading' in this.el;
    protected src = signal<SafeResourceUrl | string | null>(null);
    protected animation = signal('tuiSkeletonVibe ease-in-out 1s infinite alternate');
    protected background = signal('var(--tui-background-neutral-2)');

    protected readonly $ =
        !this.supported &&
        this.loading$.pipe(takeUntilDestroyed()).subscribe((src) => this.src.set(src));

    @Input('src')
    public set srcSetter(src: SafeResourceUrl | string) {
        if (this.supported) {
            this.src.set(src);
        } else {
            this.loading$.next(src);
        }
    }

    protected unset(): void {
        this.background.set('');
        this.animation.set('');
    }
}
