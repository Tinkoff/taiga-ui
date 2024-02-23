import {Component, inject, TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPreviewDialogService} from '@taiga-ui/addon-preview';
import {tuiClamp, TuiSwipe} from '@taiga-ui/cdk';
import {TuiAlertService, TuiDialogContext} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-preview-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiPreviewExample1 {
    private readonly previewService = inject(TuiPreviewDialogService);
    private readonly alerts = inject(TuiAlertService);

    @ViewChild('preview')
    protected readonly preview?: TemplateRef<TuiDialogContext>;

    @ViewChild('contentSample')
    protected readonly contentSample?: TemplateRef<Record<string, unknown>>;

    protected index = 0;
    protected length = 2;

    public get title(): string {
        return this.index === 0 ? 'Transaction cert.jpg' : 'My face.jpg';
    }

    public get previewContent(): PolymorpheusContent {
        return this.index === 0 && this.contentSample
            ? this.contentSample
            : 'https://avatars.githubusercontent.com/u/10106368';
    }

    public show(): void {
        this.previewService.open(this.preview || '').subscribe({
            complete: () => console.info('complete'),
        });
    }

    public download(): void {
        this.alerts.open('Downloading...').subscribe();
    }

    public delete(): void {
        this.alerts.open('Deleting...').subscribe();
    }

    public onSwipe(swipe: TuiSwipe): void {
        if (swipe.direction === 'left') {
            this.index = tuiClamp(this.index + 1, 0, this.length - 1);
        }

        if (swipe.direction === 'right') {
            this.index = tuiClamp(this.index - 1, 0, this.length - 1);
        }
    }
}
