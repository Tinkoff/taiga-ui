import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPreviewDialogService} from '@taiga-ui/addon-preview';
import {TuiDialogContext, TuiDialogService} from '@taiga-ui/core';

@Component({
    selector: 'tui-preview-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiPreviewExample4 {
    @ViewChild('preview')
    readonly preview?: TemplateRef<TuiDialogContext<void>>;

    constructor(
        @Inject(TuiPreviewDialogService)
        private readonly previewDialogService: TuiPreviewDialogService,
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    ) {}

    show(): void {
        this.previewDialogService.open(this.preview || '').subscribe();
    }

    showDialog(template: TemplateRef<any>): void {
        this.dialogService.open(template).subscribe();
    }
}
