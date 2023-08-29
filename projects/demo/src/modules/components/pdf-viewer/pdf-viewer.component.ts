import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-pdf-viewer',
    templateUrl: './pdf-viewer.template.html',
    changeDetection,
})
export class ExampleTuiPdfViewerComponent {
    readonly exampleService = import('./examples/import/service.md?raw');
    readonly exampleModule = import('./examples/import/import-module.md?raw');

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
        'actions-content.component.html': import(
            './examples/2/actions-content.component.html?raw'
        ),
        'actions-content.component.ts': import(
            './examples/2/actions-content.component.ts?raw'
        ),
        'pdf-content.component.html': import(
            './examples/2/pdf-content.component.html?raw'
        ),
        'pdf-content.component.less': import(
            './examples/2/pdf-content.component.less?raw'
        ),
        'pdf-content.component.ts': import('./examples/2/pdf-content.component.ts?raw'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
    };
}
