import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiTab, TuiTabsVertical} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiTabsVertical, RouterLink, RouterLinkActive, TuiTab],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
}
