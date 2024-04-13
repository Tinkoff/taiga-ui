import {Component, inject} from '@angular/core';
import type {TuiDialogContext, TuiDialogSize} from '@taiga-ui/core';
import {TuiDialogService} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-dialog-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiDialogExampleComponent5 {
    private readonly dialogs = inject(TuiDialogService);

    protected onClick(
        content: PolymorpheusContent<TuiDialogContext>,
        header: PolymorpheusContent,
        size: TuiDialogSize,
    ): void {
        this.dialogs
            .open(content, {
                label: 'What a cool library set',
                header,
                size,
            })
            .subscribe();
    }
}
