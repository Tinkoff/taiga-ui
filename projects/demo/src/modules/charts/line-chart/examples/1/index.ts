import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiContext} from '@taiga-ui/cdk';
import type {TuiPoint} from '@taiga-ui/core';

@Component({
    selector: 'tui-line-chart-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiLineChartExample1 {
    protected readonly value: readonly TuiPoint[] = [
        [50, 50],
        [100, 75],
        [150, 50],
        [200, 150],
        [250, 155],
        [300, 190],
        [350, 90],
    ];

    protected readonly stringify = String;

    protected readonly hintContent = ({
        $implicit,
    }: TuiContext<readonly TuiPoint[]>): number => $implicit[0][1];
}
