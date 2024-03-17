import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadgeDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-badge-example-2',
    imports: [TuiBadgeDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiBadgeExample2 {}
