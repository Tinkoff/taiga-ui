import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {
    TUI_DATE_RANGE_VALUE_TRANSFORMER,
    TUI_DATE_VALUE_TRANSFORMER,
} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

import {
    ExampleDateTransformer,
    getExampleDateRangeTransformer,
} from './value-transformers';

@Component({
    selector: 'tui-input-date-range-example-4',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_DATE_VALUE_TRANSFORMER,
            useClass: ExampleDateTransformer,
        },
        {
            provide: TUI_DATE_RANGE_VALUE_TRANSFORMER,
            deps: [TUI_DATE_VALUE_TRANSFORMER],
            useFactory: getExampleDateRangeTransformer,
        },
    ],
})
export class TuiInputDateRangeExample4 {
    protected readonly control = new FormControl([
        new Date(2018, 2, 10),
        new Date(2018, 3, 20),
    ]);
}
