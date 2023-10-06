import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-surface-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSurfaceExample6 {
    readonly reviews = [
        {
            name: 'Alex Inkin',
            time: '2 days ago',
            body: 'It is an absolute blast!',
        },
        {
            name: 'Alex Inkin',
            time: '3 days ago',
            body: "I'm starting to kind of enjoy this library.",
        },
        {
            name: 'Alex Inkin',
            time: '4 days ago',
            body: 'This library seems interesting but I hesitate refactoring our entire codebase...',
        },
    ];
}
