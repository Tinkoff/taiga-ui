import {ChangeDetectorRef, Directive, inject, Input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiWatch, tuiZonefull} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {BehaviorSubject, combineLatest, distinctUntilChanged, map} from 'rxjs';

@Directive({
    standalone: true,
    selector: 'progress[tuiProgressBar][tuiProgressColorSegments]',
    providers: [ResizeObserverService],
    host: {'[style.--tui-progress-color]': 'color()'},
})
export class TuiProgressColorSegments {
    private readonly colors$ = new BehaviorSubject<string[]>([]);
    private readonly el = tuiInjectElement<HTMLProgressElement>();

    protected readonly color = toSignal(
        combineLatest([
            this.colors$,
            inject(ResizeObserverService, {self: true}).pipe(
                map(() => this.el.offsetWidth),
                distinctUntilChanged(),
            ),
        ]).pipe(
            map(([colors, width]) => {
                const segmentWidth = Math.ceil(width / colors.length);
                const colorsString = colors.reduce(
                    (acc, color, i) =>
                        `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`,
                    '',
                );

                return `linear-gradient(to right ${colorsString})`;
            }),
            tuiZonefull(),
            tuiWatch(inject(ChangeDetectorRef)),
        ),
    );

    @Input('tuiProgressColorSegments')
    public set colors(colors: string[]) {
        this.colors$.next(colors);
    }
}
