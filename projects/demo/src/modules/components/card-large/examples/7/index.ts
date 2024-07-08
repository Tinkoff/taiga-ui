import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiDataList,
    TuiDropdown,
    TuiIcon,
    TuiLink,
    TuiSurface,
} from '@taiga-ui/core';
import {TuiAvatar, TuiCell} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCardLarge,
        TuiDropdown,
        TuiRepeatTimes,
        TuiAvatar,
        TuiIcon,
        TuiDataList,
        NgForOf,
        TuiCell,
        TuiLink,
        TuiAppearance,
        TuiSurface,
        TuiHeader,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
