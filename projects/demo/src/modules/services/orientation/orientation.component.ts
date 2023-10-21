import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-orientation',
    templateUrl: './orientation.template.html',
    changeDetection,
})
export class ExampleTuiOrientationComponent {
    injectService = import('./examples/inject-service.md?raw');

    readonly example: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };
}
