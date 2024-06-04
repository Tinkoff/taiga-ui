import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIconComponent, TuiTextfield} from '@taiga-ui/core';
import {TuiTooltipModule} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [FormsModule, TuiTextfield, TuiIconComponent, TuiTooltipModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected value = 'Test';
}
