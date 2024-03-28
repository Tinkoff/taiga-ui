import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonModule, TuiIconComponent} from '@taiga-ui/core';
import {TuiSurfaceModule} from '@taiga-ui/experimental';
import {TuiButtonGroupDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiButtonModule,
        TuiButtonGroupDirective,
        TuiSurfaceModule,
        TuiIconComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
