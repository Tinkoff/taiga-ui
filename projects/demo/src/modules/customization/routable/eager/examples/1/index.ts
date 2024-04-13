import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TuiButtonDirective} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [RouterLink, TuiButtonDirective, RouterOutlet],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class TuiEagerExample1 {}
