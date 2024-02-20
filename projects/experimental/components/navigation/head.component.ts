import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {tuiDropdownOptionsProvider} from '@taiga-ui/core';
import {tuiAvatarOptionsProvider} from '@taiga-ui/experimental/components/avatar';
import {tuiBadgeOptionsProvider} from '@taiga-ui/experimental/components/badge';
import {tuiBadgeNotificationOptionsProvider} from '@taiga-ui/experimental/components/badge-notification';
import {tuiButtonOptionsProvider} from '@taiga-ui/experimental/components/button';

@Component({
    selector: 'header[tuiNavigationHeader]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./head.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAvatarOptionsProvider({size: 's', appearance: 'secondary'}),
        tuiBadgeNotificationOptionsProvider({size: 'xs'}),
        tuiBadgeOptionsProvider({size: 'm', appearance: 'primary'}),
        tuiButtonOptionsProvider({size: 's', appearance: 'flat'}),
        tuiDropdownOptionsProvider({appearance: 'dropdown-navigation'}),
    ],
    host: {
        tuiTheme: 'night',
    },
})
export class TuiHeadComponent {}
