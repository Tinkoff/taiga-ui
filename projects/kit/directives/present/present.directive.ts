import type {OnDestroy} from '@angular/core';
import {Directive, HostListener, Output} from '@angular/core';
import {BehaviorSubject, distinctUntilChanged, skip} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiPresentChange]',
    host: {
        '[style.animation]': '"tuiPresent 1s infinite"',
    },
})
export class TuiPresent implements OnDestroy {
    private readonly visibility$ = new BehaviorSubject(false);

    @Output()
    public readonly tuiPresentChange = this.visibility$.pipe(
        distinctUntilChanged(),
        skip(1),
    );

    public ngOnDestroy(): void {
        this.visibility$.next(false);
    }

    @HostListener('animationcancel.self', ['false'])
    @HostListener('animationstart.self', ['true'])
    protected onAnimation(visibility: boolean): void {
        this.visibility$.next(visibility);
    }
}
