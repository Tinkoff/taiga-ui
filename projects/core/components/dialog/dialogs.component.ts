import {CommonModule, DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    TuiFocusTrapModule,
    TuiOverscrollModule,
    TuiScrollControlsModule,
} from '@taiga-ui/cdk';
import {tuiHost} from '@taiga-ui/core/animations';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {tap} from 'rxjs';

import {TUI_DIALOGS} from './dialog.tokens';

@Component({
    standalone: true,
    selector: 'tui-dialogs',
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiScrollControlsModule,
        TuiFocusTrapModule,
        TuiOverscrollModule,
    ],
    templateUrl: './dialogs.template.html',
    styleUrls: ['./dialogs.style.less'],
    // So that we do not force OnPush on custom dialogs
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    animations: [tuiHost],
})
export class TuiDialogsComponent {
    private readonly doc = inject(DOCUMENT);

    readonly dialogs$ = inject(TUI_DIALOGS).pipe(
        tap(({length}) => {
            this.doc.defaultView?.document.documentElement.classList.toggle(
                't-overscroll-none',
                !!length,
            );
        }),
    );
}
