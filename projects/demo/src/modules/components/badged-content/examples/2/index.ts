import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-badged-content-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiBadgedContentExample2 {
    value = '';

    contentTop = 0;

    get badgeValue(): number {
        return this.value.length;
    }

    get color(): string {
        return this.contentTop === 50 ? 'tuiIconCheck' : 'var(--tui-error-fill)';
    }

    get contentBottom(): string {
        return this.contentTop === 50 ? '' : '';
    }

    onClick() {
        this.contentTop++;
    }
}
