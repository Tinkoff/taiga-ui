import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiArrayRemove} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-elastic-container-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiElasticContainerExample4 {
    protected items = [
        {
            expanded: false,
            value: 'Test 1',
        },
        {
            expanded: false,
            value: 'Test 2',
        },
    ];

    public add(): void {
        this.items = this.items.concat({expanded: false, value: 'New value'});
    }

    public remove(index: number): void {
        this.items = tuiArrayRemove(this.items, index);
    }
}
