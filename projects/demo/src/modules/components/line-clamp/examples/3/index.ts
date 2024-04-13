import {Component, inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-line-clamp-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiLineClampExample3 {
    private readonly win = inject(WINDOW);

    protected getDynamicLineHeight(element: HTMLDivElement): number {
        return parseInt(this.win.getComputedStyle(element).lineHeight, 10);
    }

    protected getDynamicLineLimit(element: HTMLDivElement): number {
        return Math.floor(element.offsetHeight / 24);
    }
}
