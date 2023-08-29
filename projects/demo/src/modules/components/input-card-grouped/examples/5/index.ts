import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TUI_INPUT_CARD_GROUPED_TEXTS} from '@taiga-ui/addon-commerce';
import {of} from 'rxjs';

@Component({
    selector: 'tui-input-card-grouped-example-5',
    templateUrl: './index.html',
    changeDetection,
    providers: [
        {
            provide: TUI_INPUT_CARD_GROUPED_TEXTS,
            useValue: of({
                cardNumberText: 'Number',
                cvcText: 'Code',
                expiryText: 'mm/yy',
            }),
        },
    ],
})
export class TuiInputCardGroupedExample5 {
    readonly control = new FormControl({
        card: '558620******2158',
        expire: '12/25',
    });
}
