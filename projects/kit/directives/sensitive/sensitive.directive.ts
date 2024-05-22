import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiWithStyles} from '@taiga-ui/cdk';
import {map} from 'rxjs';

const rowsInSvg = 3;

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./sensitive.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-sensitive-styles',
    },
})
class TuiSensitiveStyles {}

@Directive({
    standalone: true,
    selector: '[tuiSensitive]',
    providers: [ResizeObserverService],
    host: {
        '[style.--t-offset.px]': 'offset',
        '[$.style.--t-mask-height.px]': 'height$',
        '($.style.--t-mask-height.px)': 'height$',
        '[class.tui-sensitive]': 'tuiSensitive',
    },
})
export class TuiSensitiveDirective {
    @Input()
    public tuiSensitive: boolean | null = false;

    protected readonly nothing = tuiWithStyles(TuiSensitiveStyles);
    protected readonly offset = Math.round(Math.random() * 10) * 10;
    protected readonly height$ = inject(ResizeObserverService).pipe(
        map(([{contentRect}]) => [
            Math.max(2, Math.floor(contentRect.height / 16) + 1),
            contentRect.height,
        ]),
        map(([rows, height]) => height * (rowsInSvg / rows)),
    );
}
