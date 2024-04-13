import {Component, ViewChild} from '@angular/core';
import {TuiHostedDropdownComponent} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-hosted-dropdown-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiHostedDropdownExample1 {
    @ViewChild(TuiHostedDropdownComponent)
    protected component?: TuiHostedDropdownComponent;

    protected readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

    protected open = false;

    protected onClick(): void {
        this.open = false;
        this.component?.nativeFocusableElement?.focus();
    }
}
