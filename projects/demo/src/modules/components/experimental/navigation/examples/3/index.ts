import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem, TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiButton,
    TuiIcon,
    TuiLink,
    TuiSurface,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiNavigationModule} from '@taiga-ui/experimental';
import {TuiAvatar, TuiBreadcrumbs, TuiTab, TuiTabsHorizontal} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiNavigationModule,
        TuiIcon,
        TuiAvatar,
        TuiBreadcrumbs,
        TuiItem,
        TuiLink,
        TuiAppearance,
        TuiCardLarge,
        TuiHeader,
        TuiTitle,
        TuiButton,
        TuiTabsHorizontal,
        TuiTab,
        TuiSurface,
        TuiRepeatTimes,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
