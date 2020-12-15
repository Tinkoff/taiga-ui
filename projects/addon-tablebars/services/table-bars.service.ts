import {Injectable} from '@angular/core';
import {tuiAssert} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable, Subject} from 'rxjs';
import {TableBar} from '../classes/table-bar';
import {TuiTableBarOptions} from '../interfaces/table-bar-options';

const NO_HOST =
    'Table bars are disabled, enable support by adding TuiTableBarsHostModule to your main app module ' +
    'and tui-table-bars-host component to app template';

@Injectable({
    providedIn: 'root',
})
export class TuiTableBarsService {
    readonly bar$ = new Subject<TableBar | null>();

    open(content: PolymorpheusContent, options?: TuiTableBarOptions): Observable<never> {
        tuiAssert.assert(!!this.bar$.observers.length, NO_HOST);

        return new Observable(observer => {
            const tableBar = new TableBar(observer, content, options);

            this.bar$.next(tableBar);

            return () => {
                this.bar$.next(null);
            };
        });
    }
}
