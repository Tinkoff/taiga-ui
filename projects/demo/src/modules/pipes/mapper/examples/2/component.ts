import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTypedMapper} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-mapper-example2',
    templateUrl: './template.html',
    encapsulation,
    changeDetection,
})
export class TuiMapperExample2 {
    numbers = [1, 2, 3, 4, 5] as const;

    readonly mapper: TuiTypedMapper<[readonly number[], number], number[]> = (
        numbers,
        multiplier,
    ) => numbers.map(number => number * multiplier);
}
