import {Component, ElementRef, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDestroyService, TuiScrollService} from '@taiga-ui/cdk';
import {takeUntil} from 'rxjs';

@Component({
    selector: 'tui-scroll-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [TuiDestroyService],
})
export class TuiScrollExample1 {
    private readonly scrollService = inject(TuiScrollService);
    private readonly destroy$ = inject(TuiDestroyService, {self: true});

    protected scrollTop = 0;
    protected scrollLeft = 0;
    protected duration = 300;

    public onClick({nativeElement}: ElementRef<HTMLElement>): void {
        this.scrollService
            .scroll$(nativeElement, this.scrollTop, this.scrollLeft, this.duration)
            .pipe(takeUntil(this.destroy$))
            .subscribe();
    }
}
