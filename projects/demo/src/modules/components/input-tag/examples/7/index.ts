import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputTagModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiInputTagModule, FormsModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected value = ['Use', 'space', 'button'];
    protected customSeparator = /[\s,]/; // Use space or comma to create new tag
}
