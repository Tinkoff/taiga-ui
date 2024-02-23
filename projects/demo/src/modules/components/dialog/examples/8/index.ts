import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDialogService} from '@taiga-ui/core';
import {TuiDialogFormService} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-dialog-example-8',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [TuiDialogFormService],
})
export class TuiDialogExampleComponent8 {
    private readonly dialogForm = inject(TuiDialogFormService);
    private readonly dialogs = inject(TuiDialogService);

    protected value = '';

    public onModelChange(value: string): void {
        this.value = value;
        this.dialogForm.markAsDirty();
    }

    public onClick(content: PolymorpheusContent): void {
        const closeable = this.dialogForm.withPrompt({
            label: 'Are you sure?',
            data: {
                content: 'Your data will be <strong>lost</strong>',
            },
        });

        this.dialogs.open(content, {closeable, dismissible: closeable}).subscribe({
            complete: () => {
                this.value = '';
                this.dialogForm.markAsPristine();
            },
        });
    }
}
