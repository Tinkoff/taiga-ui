import {isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {map, of, startWith, takeWhile, timer} from 'rxjs';

@Component({
    selector: 'tui-progress-circle-example-3',
    templateUrl: './index.html',
    styleUrls: ['index.less'],
    encapsulation,
    changeDetection,
})
export class TuiProgressCircleExample3 {
    protected readonly max = 100;
    protected readonly value$ =
        inject(TUI_IS_E2E) || isPlatformServer(inject(PLATFORM_ID))
            ? of(30)
            : timer(300, 200).pipe(
                  map(i => i + 30),
                  startWith(30),
                  takeWhile(value => value <= this.max),
              );
}
