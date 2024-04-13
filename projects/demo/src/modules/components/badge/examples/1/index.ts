import {Component} from '@angular/core';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiBadgeDirective} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    selector: 'tui-badge-example-1',
    imports: [TuiBadgeDirective, TuiRepeatTimesModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiBadgeExample1 {}
