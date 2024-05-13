(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[39218],{39218:n=>{n.exports='<form [formGroup]="testForm">\n    <label\n        *ngFor="let phone of formData.controls; let i = index"\n        formArrayName="phones"\n        tuiLabel\n        class="tui-space_bottom-4"\n    >\n        Phone number {{ i + 1 }}\n        <span class="row">\n            <tui-input-phone\n                formControlName="{{ i }}"\n                tuiTextfieldSize="m"\n                class="input"\n                [tuiTextfieldLabelOutside]="true"\n            >\n                <input\n                    autocomplete="new-password"\n                    tuiTextfield\n                />\n            </tui-input-phone>\n            <button\n                appearance="icon"\n                iconLeft="tuiIconTrash"\n                size="m"\n                tuiIconButton\n                type="button"\n                class="tui-space_left-2 icon"\n                (click)="removePhone(i)"\n            >\n                Delete phone number\n            </button>\n        </span>\n        <ng-template #phoneErrorContent>Invalid phone number length</ng-template>\n        <tui-error\n            formControlName="{{ i }}"\n            [error]="[] | tuiFieldError | async"\n        />\n    </label>\n\n    <tui-error\n        formArrayName="phones"\n        class="form-array-error"\n        [error]="[] | tuiFieldError | async"\n    />\n\n    <button\n        size="s"\n        tuiButton\n        type="button"\n        class="tui-space_top-4"\n        (click)="addPhone()"\n    >\n        Add a phone number\n    </button>\n</form>\n'}}]);