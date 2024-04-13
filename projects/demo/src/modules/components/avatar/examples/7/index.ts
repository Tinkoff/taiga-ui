import {Component} from '@angular/core';
import {TuiAvatarComponent, TuiAvatarOutlineDirective} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiAvatarComponent, TuiAvatarOutlineDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
