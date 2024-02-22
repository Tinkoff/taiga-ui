import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    Output,
} from '@angular/core';
import {DomSanitizer, SafeValue} from '@angular/platform-browser';
import {TuiContext, tuiIsObserved, tuiPure} from '@taiga-ui/cdk';
import {
    TUI_COMMON_ICONS,
    TuiAppearanceDirective,
    tuiAppearanceOptionsProvider,
    TuiButtonModule,
    TuiLoaderModule,
    TuiSizeL,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiLanguage} from '@taiga-ui/i18n';
import {TUI_DIGITAL_INFORMATION_UNITS, TUI_FILE_TEXTS} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent, PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {map, Observable, of} from 'rxjs';

import {TuiFileLike, TuiFileState} from '../files.types';
import {TUI_FILE_OPTIONS} from './file.options';

@Component({
    standalone: true,
    selector: 'tui-file,a[tuiFile],button[tuiFile]',
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiLoaderModule,
        TuiSvgModule,
        TuiButtonModule,
    ],
    templateUrl: './file.template.html',
    styleUrls: ['./file.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAppearanceOptionsProvider(TUI_FILE_OPTIONS)],
    hostDirectives: [TuiAppearanceDirective],
})
export class TuiFileComponent {
    private readonly sanitizer = inject(DomSanitizer);
    private readonly options = inject(TUI_FILE_OPTIONS);
    private readonly units$ = inject(TUI_DIGITAL_INFORMATION_UNITS);

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly fileTexts$ = inject(TUI_FILE_TEXTS);

    @Input()
    public file: TuiFileLike = {name: ''};

    @Input()
    public state: TuiFileState = 'normal';

    @Input()
    public size: TuiSizeL = 'm';

    @Input()
    @HostBinding('attr.data-delete')
    public showDelete: boolean | 'always' = true;

    @Input()
    public showSize = true;

    @Input()
    public leftContent: PolymorpheusContent;

    @Output()
    public readonly remove = new EventEmitter<void>();

    public get preview(): SafeValue {
        return this.isBig ? this.createPreview(this.file) : '';
    }

    public get isBig(): boolean {
        return this.size === 'l';
    }

    public get isLoading(): boolean {
        return this.state === 'loading';
    }

    public get isError(): boolean {
        return this.state === 'error';
    }

    public get isDeleted(): boolean {
        return this.state === 'deleted';
    }

    public get allowDelete(): boolean {
        return this.showDelete && tuiIsObserved(this.remove);
    }

    public get icon(): PolymorpheusContent<TuiContext<TuiSizeL>> {
        return this.state === 'loading' ? '' : this.options.icons[this.state];
    }

    public get name(): string {
        return this.getName(this.file);
    }

    public get type(): string {
        return this.getType(this.file);
    }

    public get content$(): Observable<PolymorpheusContent> {
        return this.calculateContent$(this.state, this.file, this.fileTexts$);
    }

    public get fileSize$(): Observable<string | null> {
        return this.calculateFileSize$(this.file, this.units$);
    }

    @tuiPure
    private calculateContent$(
        state: TuiFileState,
        file: TuiFileLike,
        fileTexts$: Observable<Record<keyof TuiLanguage['fileTexts'], string>>,
    ): Observable<PolymorpheusContent> {
        return state === 'error' && !file.content
            ? fileTexts$.pipe(map(texts => texts.loadingError))
            : of(this.file.content || '');
    }

    @tuiPure
    private calculateFileSize$(
        file: TuiFileLike,
        units$: Observable<[string, string, string]>,
    ): Observable<string | null> {
        return units$.pipe(map(units => this.options.formatSize(units, file.size)));
    }

    @tuiPure
    private createPreview(file: TuiFileLike): SafeValue {
        if (file.src) {
            return file.src;
        }

        // TODO: iframe warning
        if (file instanceof File && file.type && file.type.startsWith('image/')) {
            return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
        }

        return '';
    }

    @tuiPure
    private getName(file: TuiFileLike): string {
        return file.name.split('.').slice(0, -1).join('.');
    }

    @tuiPure
    private getType(file: TuiFileLike): string {
        return `.${file.name.split('.').pop()}` || '';
    }
}
