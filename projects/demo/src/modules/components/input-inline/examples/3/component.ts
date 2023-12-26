import {ChangeDetectorRef, Component, Inject, OnInit, Self} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E, TuiDestroyService, tuiWatch, tuiZoneOptimized} from '@taiga-ui/cdk';
import {Observable, takeUntil, timer} from 'rxjs';

@Component({
    selector: 'tui-input-inline-example-3',
    templateUrl: './template.html',
    styleUrls: ['./style.less'],
    encapsulation,
    changeDetection,
    providers: [TuiDestroyService],
})
export class TuiInputInlineExample3 implements OnInit {
    count = '0';

    constructor(
        @Inject(ChangeDetectorRef) private readonly cd: ChangeDetectorRef,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: Observable<unknown>,
        @Inject(TUI_IS_E2E) readonly isE2E: boolean,
    ) {}

    ngOnInit(): void {
        if (this.isE2E) {
            return;
        }

        timer(0, 3000)
            .pipe(tuiZoneOptimized(), tuiWatch(this.cd), takeUntil(this.destroy$))
            .subscribe(value => {
                this.count = String(value);
            });
    }
}
