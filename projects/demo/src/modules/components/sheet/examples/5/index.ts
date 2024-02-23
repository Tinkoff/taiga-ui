import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetOptions} from '@taiga-ui/addon-mobile';

const FRAMES = 166;

@Component({
    selector: 'tui-sheet-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSheetExample5 {
    protected open = false;

    protected readonly options: Partial<TuiSheetOptions> = {
        overlay: true,
        stops: ['4.5rem'],
    };

    public toggle(): void {
        this.open = !this.open;
    }

    public getTransform(y: number | null): string {
        const frame = Math.round((y || 0) / 2);
        const looped = frame % FRAMES;
        const percent = (100 / FRAMES) * looped;

        return `translate3d(0, -${percent}%, 0)`;
    }
}
