import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'button[tuiAppBarBack], a[tuiAppBarBack]',
    templateUrl: './app-bar-back.template.html',
    styleUrls: ['./app-bar-back.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAppBarBack {}
