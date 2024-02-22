import {Component, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiDurationOptions, tuiHeightCollapse} from '@taiga-ui/core';

@Component({
    selector: 'tui-height-collapse-example',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiHeightCollapse],
})
export class TuiHeightCollapseExample {
    protected isOpen = false;

    @Input()
    public speed = 0;

    @tuiPure
    public getAnimation(duration: number): TuiDurationOptions {
        return {value: '', params: {duration}};
    }
}
