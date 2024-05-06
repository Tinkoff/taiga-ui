import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe, TuiThumbnailCardComponent} from '@taiga-ui/addon-commerce';
import {
    TuiButtonDirective,
    TuiLabelComponent,
    TuiLinkDirective,
    TuiScrollbarComponent,
    TuiSurfaceDirective,
} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiBadgeDirective} from '@taiga-ui/kit';
import {TuiCardLargeDirective, TuiCellDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiSurfaceDirective,
        TuiThumbnailCardComponent,
        TuiAvatarComponent,
        TuiAmountPipe,
        TuiLabelComponent,
        TuiBadgeDirective,
        TuiButtonDirective,
        TuiLinkDirective,
        TuiCellDirective,
        TuiCardLargeDirective,
        CommonModule,
        TuiScrollbarComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less', './surface.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly reviews = [
        {
            name: 'Alex Inkin',
            time: '2 days ago',
            body: 'It is an absolute blast!',
        },
        {
            name: 'Alex Inkin',
            time: '3 days ago',
            body: 'I am starting to kind of enjoy this library.',
        },
        {
            name: 'Alex Inkin',
            time: '4 days ago',
            body: 'This library seems interesting but I hesitate refactoring our entire codebase...',
        },
    ];
}
