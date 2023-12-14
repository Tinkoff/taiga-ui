import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiClamp, TuiZoom} from '@taiga-ui/cdk';
import {map, scan, startWith, Subject} from 'rxjs';

@Component({
    selector: 'tui-zoom-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiZoomExample1 {
    readonly delta$ = new Subject<number>();

    readonly scale$ = this.delta$.pipe(
        scan((scale, next) => tuiClamp(scale + next, 0.5, 3), 1),
        startWith(1),
    );

    readonly transform$ = this.scale$.pipe(map(scale => `scale(${scale})`));

    onZoom({delta}: TuiZoom): void {
        this.delta$.next(delta);
    }
}
