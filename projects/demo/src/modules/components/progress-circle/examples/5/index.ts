import {isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {map, of, repeat, share, takeWhile, timer} from 'rxjs';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-progress-circle-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiProgressCircleExample5 {
    protected readonly max = 100;

    protected readonly value$ =
        inject(TUI_IS_E2E) || isPlatformServer(inject(PLATFORM_ID))
            ? of(30)
            : timer(300, 200).pipe(
                  takeWhile(value => value <= this.max),
                  share(),
                  repeat(),
              );

    protected readonly color$ = this.value$.pipe(
        map(value => {
            if (value < 33) {
                return 'red';
            }

            if (value < 66) {
                return 'yellow';
            }

            return 'green';
        }),
    );
}
