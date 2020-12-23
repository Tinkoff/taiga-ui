import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    NgZone,
    Optional,
} from '@angular/core';
import {tuiZoneOptimized} from '@taiga-ui/cdk';
import {tuiFadeIn} from '@taiga-ui/core/animations';
import {TuiModeDirective} from '@taiga-ui/core/directives/mode';
import {TuiBrightness} from '@taiga-ui/core/enums';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {interval} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';

// @bad TODO: handle click on bar to scroll to that position
// @dynamic
@Component({
    selector: 'tui-scroll-controls',
    templateUrl: './scroll-controls.template.html',
    styleUrls: ['./scroll-controls.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeIn],
})
export class TuiScrollControlsComponent {
    readonly refresh$ = interval(300).pipe(
        map(() => this.scrollbars),
        startWith([false, false]),
        distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]),
        tuiZoneOptimized(this.ngZone),
    );

    constructor(
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(TUI_SCROLL_REF) private readonly scrollRef: ElementRef<HTMLElement>,
        @Optional()
        @Inject(TuiModeDirective)
        private readonly modeDirective: TuiModeDirective | null,
    ) {}

    get isLight(): boolean {
        return !!this.modeDirective && this.modeDirective.mode === TuiBrightness.Light;
    }

    private get scrollbars(): [boolean, boolean] {
        const {
            clientHeight,
            scrollHeight,
            clientWidth,
            scrollWidth,
        } = this.scrollRef.nativeElement;

        return [
            Math.ceil((clientHeight / scrollHeight) * 100) < 100,
            Math.ceil((clientWidth / scrollWidth) * 100) < 100,
        ];
    }
}
