import {Component, Input} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';
import type {TuiDurationOptions} from '@taiga-ui/core';
import {tuiFadeIn} from '@taiga-ui/core';
import {concatMap, delay, from, of, repeat, startWith} from 'rxjs';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-fade-in-example',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiFadeIn],
})
export class TuiFadeInExample {
    @Input()
    public speed = 0;

    protected isShown$ = from([false, true]).pipe(
        concatMap(val => of(val).pipe(delay(1.5 * this.speed))),
        repeat(),
        startWith(true),
    );

    @tuiPure
    protected getAnimation(duration: number): TuiDurationOptions {
        return {value: '', params: {duration}};
    }
}
