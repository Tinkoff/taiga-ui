import {inject, Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk';
import {TUI_DIALOGS} from '@taiga-ui/core';

import {TuiSheetDialogComponent} from './sheet-dialog.component';
import type {TuiSheetDialogOptions} from './sheet-dialog.options';
import {TUI_SHEET_DIALOG_OPTIONS} from './sheet-dialog.options';

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiSheetDialogService(
            TUI_DIALOGS,
            TuiSheetDialogComponent,
            inject(TUI_SHEET_DIALOG_OPTIONS),
        ),
})
export class TuiSheetDialogService<T = any> extends TuiPopoverService<
    TuiSheetDialogOptions<T>
> {}
