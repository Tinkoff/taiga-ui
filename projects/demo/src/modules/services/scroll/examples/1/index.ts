import type {ElementRef} from '@angular/core';
import {Component, inject, DestroyRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollService} from '@taiga-ui/cdk';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
    selector: 'tui-scroll-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: []
})
export class TuiScrollExample1 {
    private readonly scrollService = inject(TuiScrollService);
    private readonly destroyRef = inject(DestroyRef);

    protected scrollTop = 0;
    protected scrollLeft = 0;
    protected duration = 300;

    protected onClick({nativeElement}: ElementRef<HTMLElement>): void {
        this.scrollService
            .scroll$(nativeElement, this.scrollTop, this.scrollLeft, this.duration)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe();
    }
}
