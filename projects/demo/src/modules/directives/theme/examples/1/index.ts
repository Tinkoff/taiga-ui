import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwitchComponent} from '@taiga-ui/kit';
import {TuiInputModule, TuiInputNumberModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiInputModule, FormsModule, TuiSwitchComponent, TuiInputNumberModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected toggle = false;
    protected text = '';
    protected money = 237;
}
