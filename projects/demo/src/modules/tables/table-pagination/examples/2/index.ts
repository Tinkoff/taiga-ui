import {Component} from '@angular/core';
import type {TuiTablePaginationOptions} from '@taiga-ui/addon-table';
import {tuiTablePaginationOptionsProvider} from '@taiga-ui/addon-table';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

const customOptionContent: TuiTablePaginationOptions['sizeOptionContent'] = ({
    $implicit,
    total,
}) => {
    switch ($implicit) {
        case 10:
            return 'Ten';
        case total:
            return 'Show all rows';
        default:
            return $implicit;
    }
};

@Component({
    selector: 'tui-table-pagination-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiTablePaginationOptionsProvider({sizeOptionContent: customOptionContent}),
    ],
})
export class TuiTablePaginationExample2 {
    protected total = 350;
    protected sizeOptions = [10, 50, 100, this.total];
}
