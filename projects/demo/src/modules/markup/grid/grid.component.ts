import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.scss';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.scss';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'grid',
    templateUrl: './grid.template.html',
    styleUrls: ['./grid.style.scss'],
    changeDetection,
})
export class GridComponent {
    readonly example1: FrontEndExample = {
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly example2: FrontEndExample = {
        HTML: example2Html,
        LESS: example2Less,
    };
}
