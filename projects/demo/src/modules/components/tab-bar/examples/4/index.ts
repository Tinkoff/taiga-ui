import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';
import {TuiButtonDirective} from '@taiga-ui/core';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiTabBar, AsyncPipe, NgForOf],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly load$ = new Subject<void>();

    protected readonly items$ = this.load$.pipe(
        startWith(null),
        switchMap(() =>
            timer(3000).pipe(
                map(() => [
                    {
                        text: 'Favorites',
                        icon: 'tuiIconHeart',
                    },
                    {
                        text: 'Calls',
                        icon: 'tuiIconPhone',
                    },
                    {
                        text: 'Profile',
                        icon: 'tuiIconUser',
                    },
                    {
                        text: 'Settings and configuration',
                        icon: 'tuiIconSettings',
                    },
                ]),
                startWith([]),
            ),
        ),
    );
}
