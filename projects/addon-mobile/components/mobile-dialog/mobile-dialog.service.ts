import {inject, Injectable} from '@angular/core';
import type {TuiBaseDialogContext} from '@taiga-ui/cdk';
import {AbstractTuiDialogService} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';

import {TuiMobileDialogComponent} from './mobile-dialog.component';
import {TUI_MOBILE_DIALOG_OPTIONS} from './mobile-dialog.tokens';
import type {TuiMobileDialogOptions} from './mobile-dialog-options';

const DIALOG = new PolymorpheusComponent(TuiMobileDialogComponent);

@Injectable({
    providedIn: `root`,
})
export class TuiMobileDialogService extends AbstractTuiDialogService<
    TuiMobileDialogOptions<any>,
    number
> {
    protected readonly component = DIALOG;
    protected readonly defaultOptions: TuiMobileDialogOptions<any> = {
        ...inject(TUI_MOBILE_DIALOG_OPTIONS),
        data: undefined,
    };

    override open(
        content: PolymorpheusContent<
            TuiBaseDialogContext<number> & TuiMobileDialogOptions<any>
        >,
        options: Partial<TuiMobileDialogOptions<any>> = {},
    ): Observable<number> {
        return super.open(content, options);
    }
}
