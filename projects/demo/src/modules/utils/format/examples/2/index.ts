import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import type {TuiCurrencyVariants} from '@taiga-ui/addon-commerce';
import {tuiGetCurrencySymbol} from '@taiga-ui/addon-commerce';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-format-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiFormatExample2 {
    protected readonly items = [
        'USD',
        'RUB',
        '643',
        'KZT',
        '051',
        'KRW',
        'CHF',
        'EUR',
        'GBP',
    ];

    protected parametersForm = new FormGroup({
        currency: new FormControl<TuiCurrencyVariants>(null),
    });

    protected get currency(): string | null {
        const {currency} = this.parametersForm.value;

        return currency ? tuiGetCurrencySymbol(currency) : null;
    }
}
