import {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, HostBinding, Inject} from '@angular/core';
import {DomSanitizer, SafeValue} from '@angular/platform-browser';
import {TuiDialog, tuiPure} from '@taiga-ui/cdk';
import {TUI_ANIMATION_OPTIONS, tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {TuiPdfViewerOptions} from './pdf-viewer-options';

@Component({
    selector: 'tui-pdf-viewer',
    templateUrl: './pdf-viewer.template.html',
    styleUrls: ['./pdf-viewer.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiFadeIn],
})
export class TuiPdfViewerComponent<I, O> {
    @HostBinding('@tuiSlideInTop')
    @HostBinding('@tuiFadeIn')
    readonly animation = {
        value: '',
        ...this.options,
    } as const;

    constructor(
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialog<TuiPdfViewerOptions<I>, O>,
    ) {}

    @tuiPure
    bypass(url: string): SafeValue {
        if (!url.endsWith('.pdf')) {
            throw 'PdfViewer is intended for PDF files only';
        }

        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
