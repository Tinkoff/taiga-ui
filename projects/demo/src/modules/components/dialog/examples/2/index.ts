import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDialogService} from '@taiga-ui/core';

import {DialogExampleComponent} from './dialog-example/dialog-example.component';

@Component({
    selector: 'tui-dialog-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiDialogExampleComponent2 {
    private readonly dialog = this.dialogs.open<number>(DialogExampleComponent, {
        data: 237,
        dismissible: true,
        label: 'Heading',
    });

    constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {}

    showDialog(): void {
        this.dialog.subscribe({
            next: data => {
                console.info(`Dialog emitted data = ${data}`);
            },
            complete: () => {
                console.info('Dialog closed');
            },
        });
    }
}
