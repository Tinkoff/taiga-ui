import {Component} from '@angular/core';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiAddonDocModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class TuiEagerExample3 {
    protected readonly html = import('../setup/html.md?raw');
    protected readonly routes = import('../setup/routes.md?raw');
}
