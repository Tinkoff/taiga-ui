import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-pdf-viewer-example-3`,
    templateUrl: `index.html`,
    styleUrls: [`index.less`],
    changeDetection,
    encapsulation,
})
export class TuiPdfViewerExample3 {
    open = false;
}
