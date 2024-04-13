import {Component} from '@angular/core';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

import {changeDetection} from '#/demo/emulate/change-detection';

@Component({
    selector: 'example-tui-pdf-viewer',
    templateUrl: './pdf-viewer.template.html',
    changeDetection,
})
export class ExampleTuiPdfViewerComponent {
    protected readonly exampleService = import('./examples/import/service.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        'actions-content.component.ts': import(
            './examples/2/actions-content.component.ts?raw'
        ),
        'actions-content.component.html': import(
            './examples/2/actions-content.component.html?raw'
        ),
        'pdf-content.component.ts': import('./examples/2/pdf-content.component.ts?raw'),
        'pdf-content.component.html': import(
            './examples/2/pdf-content.component.html?raw'
        ),
        'pdf-content.component.less': import(
            './examples/2/pdf-content.component.less?raw'
        ),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };
}
