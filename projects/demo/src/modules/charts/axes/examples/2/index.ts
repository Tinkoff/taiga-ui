import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_ALWAYS_DASHED, TUI_ALWAYS_NONE} from '@taiga-ui/addon-charts';
import {tuiCeil, tuiPure} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-axes-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiAxesExample2 {
    private readonly setNames = ['cdk', 'core', 'kit', 'charts'];

    readonly matrix: ReadonlyArray<[number, number, number, number]> = [
        [10, 20, 3, 7],
        [15, 18, 24, 1],
        [34, 23, 12, 9],
        [30, 14, 18, 14],
    ];

    readonly axisYSecondaryLabels = [
        '',
        `${this.getMax(this.matrix) / 2} k`,
        `${this.getMax(this.matrix)} k`,
    ];

    readonly axisXLabels = ['Q1', 'Q2', 'Q3', 'Q4'];

    readonly horizontalLinesHandler = TUI_ALWAYS_DASHED;

    readonly verticalLinesHandler = TUI_ALWAYS_NONE;

    getSetName(index: number): string {
        return this.setNames[index];
    }

    getBackground(index: number): string {
        return `var(--tui-chart-${index})`;
    }

    @tuiPure
    private getMax(matrix: ReadonlyArray<[number, number, number, number]>): number {
        return tuiCeil(
            matrix.reduce((max, value) => Math.max(...value, max), 0),
            -1,
        );
    }
}
