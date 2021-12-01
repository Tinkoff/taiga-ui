import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-dialog-example-6',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiDialogExampleComponent6 {
    open = false;

    showDialog() {
        this.open = true;
    }
}
