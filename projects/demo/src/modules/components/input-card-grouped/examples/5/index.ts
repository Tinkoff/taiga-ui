import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import type {TuiCard} from '@taiga-ui/addon-commerce';
import {TUI_INPUT_CARD_GROUPED_TEXTS} from '@taiga-ui/addon-commerce';
import {of} from 'rxjs';

import {changeDetection} from '#/demo/emulate/change-detection';

@Component({
    selector: 'tui-input-card-grouped-example-5',
    templateUrl: './index.html',
    changeDetection,
    providers: [
        {
            provide: TUI_INPUT_CARD_GROUPED_TEXTS,
            useValue: of({
                cardNumberText: 'Number',
                expiryText: 'mm/yy',
                cvcText: 'Code',
            }),
        },
    ],
})
export class TuiInputCardGroupedExample5 {
    protected readonly control = new FormControl<Partial<TuiCard>>({
        card: '558620******2158',
        expire: '12/25',
    });
}
