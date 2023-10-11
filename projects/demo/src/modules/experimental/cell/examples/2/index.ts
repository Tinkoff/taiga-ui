import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiMoneyOptionsProvider} from '@taiga-ui/addon-commerce';
import {tuiAvatarOptionsProvider} from '@taiga-ui/experimental';

@Component({
    selector: 'tui-cell-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        tuiAvatarOptionsProvider({size: 's', round: true}),
        tuiMoneyOptionsProvider({sign: 'always', colored: true}),
    ],
    changeDetection,
    encapsulation,
})
export class TuiCellExample2 {}
