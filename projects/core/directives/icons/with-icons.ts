import {Directive} from '@angular/core';

import {TuiIcons} from './icons.directive';

@Directive({
    standalone: true,
    hostDirectives: [
        {
            directive: TuiIcons,
            inputs: ['iconLeft', 'iconRight'],
        },
    ],
})
export class TuiWithIcons {}
