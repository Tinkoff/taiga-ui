import {Component} from '@angular/core';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

import {changeDetection} from '#/demo/emulate/change-detection';

@Component({
    selector: 'example-form',
    templateUrl: './form.template.html',
    changeDetection,
})
export class FormComponent {
    protected readonly example1: TuiDocExample = {
        TypeScript: import('./example/index.ts?raw'),
        HTML: import('./example/index.html?raw'),
        LESS: import('./example/index.less?raw'),
    };
}
