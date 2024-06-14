import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    NgZone,
} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {TUI_IS_IOS, TUI_SCROLL_REF} from '@taiga-ui/cdk/tokens';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map, startWith, throttleTime} from 'rxjs/operators';

@Component({
    selector: 'tui-scroll-controls',
    templateUrl: './scroll-controls.template.html',
    styleUrls: ['./scroll-controls.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiScrollControlsComponent {
    readonly refresh$ = this.animationFrame$.pipe(
        throttleTime(300),
        map(() => {
            const {clientHeight, scrollHeight, clientWidth, scrollWidth} =
                this.scrollRef.nativeElement;

            return [
                Math.ceil((clientHeight / scrollHeight) * 100) < 100,
                Math.ceil((clientWidth / scrollWidth) * 100) < 100,
            ];
        }),
        startWith([false, false]),
        distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]),
        tuiZoneOptimized(this.zone),
    );

    constructor(
        @Inject(TUI_IS_IOS) readonly isIOS: boolean,
        @Inject(NgZone) private readonly zone: NgZone,
        @Inject(TUI_SCROLL_REF) private readonly scrollRef: ElementRef<HTMLElement>,
        @Inject(ANIMATION_FRAME) private readonly animationFrame$: Observable<number>,
    ) {}
}
