import {Component, inject} from '@angular/core';
import {TUI_IS_IOS} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-token-example-5',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTokensExample5 {
    protected readonly isIos = inject(TUI_IS_IOS);
}
