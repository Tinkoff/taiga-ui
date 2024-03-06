import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-breakpoint',
    templateUrl: './breakpoint.template.html',
    changeDetection,
})
export class ExampleTuiBreakpointComponent {
    protected injectService = import('./examples/inject-service.md?raw');

    protected readonly example: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };
}
