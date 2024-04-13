import {Component, inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiDestroyService} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';

import {databaseMockData} from './database-mock-data';
import {RequestService} from './request.service';

@Component({
    selector: 'tui-combo-box-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [RequestService, TuiDestroyService],
})
export class TuiComboBoxExample2 {
    protected readonly service = inject(RequestService);

    protected search: string | null = '';

    protected readonly control = new FormControl(databaseMockData[0]);
}
