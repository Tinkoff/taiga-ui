import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    standalone: true,
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleComponent {
    protected readonly examples = [
        'Basic',
        'Avatar',
        'Single item',
        'Cards List',
        'Cell List',
        'Cell List (2 columns)',
        'Cell List (actions)',
        'Footer alignment',
        'Map',
        'Image',
        'Image-dark',
        'Paddings and radiuses',
    ];
}
