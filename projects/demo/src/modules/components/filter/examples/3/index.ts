import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

const getIcon: Record<string, string> = {
    Calendar: 'tuiIconCalendar',
    Favorite: 'tuiIconStar',
    Messages: 'tuiIconComment',
    FAQ: 'tuiIconHelpCircle',
    Settings: 'tuiIconSettings',
};

@Component({
    selector: 'tui-filter-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiFilterExample3 {
    items = ['Calendar', 'Favorite', 'Messages', 'FAQ', 'Settings'];

    form = new FormGroup({
        filters: new FormControl([]),
    });

    getItemIcon(title: string): string {
        return getIcon[title];
    }
}
