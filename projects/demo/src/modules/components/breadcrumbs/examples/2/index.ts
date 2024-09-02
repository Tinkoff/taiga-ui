import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem, TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown, TuiLink} from '@taiga-ui/core';
import {TuiBreadcrumbs, tuiBreadcrumbsOptionsProvider} from '@taiga-ui/kit';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiBreadcrumbs,
        TuiDropdown,
        TuiDataList,
        TuiInputNumberModule,
        TuiRepeatTimes,
        TuiLink,
        TuiButton,
        TuiItem,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiBreadcrumbsOptionsProvider({
            icon: '@tui.arrow-right',
            size: 'l',
        }),
    ],
})
export default class Example {
    protected readonly items = [
        {
            caption: 'Open Source',
            link: 'https://github.com',
        },
        {
            caption: 'Angular',
            link: 'https://github.com/topics/angular',
        },
        {
            caption: 'TramvaiJS',
            link: 'https://github.com/tramvaijs/tramvai',
        },
        {
            caption: 'Taiga UI',
            link: 'https://github.com/taiga-family/taiga-ui',
        },
        {
            caption: 'Components',
            link: 'https://taiga-ui.dev',
        },
        {
            caption: 'Breadcrumbs',
            link: 'https://taiga-ui.dev/navigation/breadcrumbs',
        },
    ];

    protected max = 4;
}
