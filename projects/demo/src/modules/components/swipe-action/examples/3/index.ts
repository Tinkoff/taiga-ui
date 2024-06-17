import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {
    TuiSwipeActionsAutoClose,
    TuiSwipeActions,
} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiSurfaceDirective, TuiTitleDirective} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCellDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiSwipeActions,
        TuiSwipeActionsAutoClose,
        TuiCardLarge,
        TuiCellDirective,
        TuiSurfaceDirective,
        TuiAvatarComponent,
        TuiAmountPipe,
        AsyncPipe,
        TuiTitleDirective,
        TuiButton,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
