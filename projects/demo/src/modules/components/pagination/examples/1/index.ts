import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiPaginationModule} from '@taiga-ui/kit';
import {TuiInputSliderModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiInputSliderModule,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiPaginationModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class PageComponent {
    protected length = 64;

    protected index = 10;

    protected goToPage(index: number): void {
        this.index = index;
        console.info('New page:', index);
    }
}
