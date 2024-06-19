import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiNotification} from '@taiga-ui/core';
import {TuiCompassComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiCompassComponent, TuiNotification],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected colorVariants = ['#428bf9', 'rgb(234, 56, 24)', 'var(--tui-positive)', ''];

    protected color = this.colorVariants[0];

    protected degrees = 90;
}
