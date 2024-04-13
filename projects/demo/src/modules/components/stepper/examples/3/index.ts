import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {TuiStepperModule} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiStepperModule, NgForOf],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly steps = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
}
