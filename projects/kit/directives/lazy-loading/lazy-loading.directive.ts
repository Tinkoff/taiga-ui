import {Directive, inject, Input, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {SafeResourceUrl} from '@angular/platform-browser';
import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

import {TuiLazyLoadingService} from './lazy-loading.service';

@Directive({
    standalone: true,
    selector: 'img[loading="lazy"],img[tuiLoading="lazy"]',
    providers: [TuiLazyLoadingService, IntersectionObserverService],
    host: {
        '[style.animation]': 'animation()',
        '[style.background]': 'background()',
        '[attr.loading]': 'supported ? "lazy" : null',
        '[attr.src]': 'src()',
        '(load)': 'unset()',
        '(error)': 'unset()',
    },
})
export class TuiImgLazyLoading {
    private readonly loading$ = inject(TuiLazyLoadingService);
    protected readonly supported = 'loading' in tuiInjectElement<HTMLImageElement>();
    protected src = signal<SafeResourceUrl | string | null>(null);
    protected animation = signal('tuiSkeletonVibe ease-in-out 1s infinite alternate');
    protected background = signal('var(--tui-background-neutral-2)');

    protected readonly $ = this.loading$
        .pipe(takeUntilDestroyed())
        .subscribe((src) => this.src.set(src));

    @Input('src')
    public set srcSetter(src: SafeResourceUrl | string) {
        this.src.set(this.supported ? src : null);
        this.loading$.next(src);
    }

    protected unset(): void {
        this.background.set('');
        this.animation.set('');
    }
}
