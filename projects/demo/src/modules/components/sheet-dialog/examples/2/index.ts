import {Component} from '@angular/core';
import type {TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-sheet-dialog-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSheetDialogExample2 {
    protected open = false;

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        label: 'Alexander Inkin',
        closeable: false,
    };
}
