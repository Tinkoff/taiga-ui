import {Component} from '@angular/core';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

import {changeDetection} from '#/demo/emulate/change-detection';

@Component({
    selector: 'example-tui-highlight',
    templateUrl: './highlight.template.html',
    changeDetection,
})
export class ExampleTuiHighlightComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };
}
