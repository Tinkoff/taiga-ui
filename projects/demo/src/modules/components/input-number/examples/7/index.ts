import {Component} from '@angular/core';
import {TUI_DEFAULT_NUMBER_FORMAT, TUI_NUMBER_FORMAT} from '@taiga-ui/core';
import type {TuiLanguage} from '@taiga-ui/i18n';
import {TUI_LANGUAGE} from '@taiga-ui/i18n';
import type {BehaviorSubject, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-number-example-7',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_NUMBER_FORMAT,
            deps: [TUI_LANGUAGE],
            useFactory: (lang: BehaviorSubject<Observable<TuiLanguage>>) =>
                lang.pipe(
                    switchMap(lang => lang),
                    map(({name}) => ({
                        ...TUI_DEFAULT_NUMBER_FORMAT,
                        thousandSeparator: name === 'english' ? ',' : ' ',
                        decimalSeparator: name === 'english' ? '.' : ',',
                    })),
                ),
        },
    ],
})
export class TuiInputNumberExample7 {
    protected value = 1234.56;
}
