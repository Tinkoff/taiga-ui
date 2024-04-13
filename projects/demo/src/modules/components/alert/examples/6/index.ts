import {Component} from '@angular/core';
import {TuiAlertModule, TuiButtonDirective} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    selector: 'tui-alerts-example-6',
    imports: [TuiButtonDirective, TuiAlertModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiAlertExampleComponent6 {
    protected show = false;
}
