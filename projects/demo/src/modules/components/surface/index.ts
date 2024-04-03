import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemoModule} from '@demo/utils';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemoModule, TuiNotificationModule],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleComponent {
    protected readonly layerExample: TuiDocExample = {
        HTML: import('./examples/7/index.html?raw'),
        'surface.less': import('./examples/7/surface.less?raw'),
        LESS: import('./examples/7/index.less?raw'),
    };
}
