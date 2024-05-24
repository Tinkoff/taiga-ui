import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiTagOptionsProvider} from '@taiga-ui/legacy';

@Component({
    selector: 'tui-tag-example-5',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiTagOptionsProvider({
            size: 'l',
            status: 'success',
        }),
    ],
})
export class TuiTagExample5 {
    protected tag = 'Hello';
}
