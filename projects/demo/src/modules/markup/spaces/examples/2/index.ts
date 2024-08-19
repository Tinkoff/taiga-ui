import {ClipboardModule} from '@angular/cdk/clipboard';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocCopy} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    imports: [TuiDocCopy, ClipboardModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
