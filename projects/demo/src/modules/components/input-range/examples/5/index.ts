import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeySteps} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-range-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiInputRangeExample5 {
    protected readonly max = 1_000_000;
    protected readonly min = 0;
    protected readonly totalSteps = 100;
    protected readonly ticksLabels = ['0', '10K', '100K', '500k', '1000K'];
    protected readonly segments = this.ticksLabels.length - 1;

    protected readonly keySteps: TuiKeySteps = [
        // [percent, value]
        [0, this.min],
        [25, 10_000],
        [50, 100_000],
        [75, 500_000],
        [100, this.max],
    ];

    public readonly control = new FormControl([100_000, 500_000]);
}
