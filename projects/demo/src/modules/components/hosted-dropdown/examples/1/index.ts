import {NgForOf} from '@angular/common';
import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButtonDirective,
    TuiDataListComponent,
    TuiHostedDropdownComponent,
    TuiHostedDropdownModule,
    TuiOptGroupDirective,
    TuiOptionComponent,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [
        TuiHostedDropdownModule,
        TuiButtonDirective,
        TuiDataListComponent,
        TuiOptGroupDirective,
        TuiOptionComponent,
        NgForOf,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    @ViewChild(TuiHostedDropdownComponent)
    protected component?: TuiHostedDropdownComponent;

    protected readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

    protected open = false;

    protected onClick(): void {
        this.open = false;
        this.component?.nativeFocusableElement?.focus();
    }
}
