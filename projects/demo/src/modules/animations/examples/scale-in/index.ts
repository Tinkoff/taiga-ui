import {Component, Input} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';
import type {TuiDurationOptions} from '@taiga-ui/core';
import {tuiScaleIn} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-scale-in-example',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiScaleIn],
})
export class TuiScaleInExample {
    @Input()
    public speed = 0;

    protected readonly todoTasks = [
        {title: 'Install Angular', completed: true},
        {title: 'Install Taiga UI', completed: false},
        {title: 'Look into "Getting Started"', completed: false},
    ];

    @tuiPure
    protected getAnimation(duration: number): TuiDurationOptions {
        return {value: '', params: {duration}};
    }
}
