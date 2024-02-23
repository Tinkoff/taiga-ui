import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-avatar-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiAvatarExample1 {
    protected avatar = 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';
}
