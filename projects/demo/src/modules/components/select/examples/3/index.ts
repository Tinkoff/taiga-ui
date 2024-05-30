import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocusDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataListComponent,
    TuiDataListDirective,
    TuiOptionComponent,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiSelectModule, TuiTextareaModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiSelectModule,
        TuiTextfieldControllerModule,
        TuiDataListComponent,
        TuiDataListDirective,
        NgIf,
        TuiOptionComponent,
        TuiSvgComponent,
        NgForOf,
        TuiTextareaModule,
        TuiAutoFocusDirective,
        TuiButtonDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly items = [
        'https://twitter.com/marsibarsi',
        'https://twitter.com/waterplea',
    ];

    protected readonly testForm = new FormGroup({
        email: new FormControl<string | null>(null),
        signature: new FormControl(''),
    });

    protected signatureVisible = false;

    protected toggle(): void {
        this.signatureVisible = !this.signatureVisible;
    }
}
