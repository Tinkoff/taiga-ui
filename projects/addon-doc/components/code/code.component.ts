import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {TuiRawLoaderContent} from '@taiga-ui/addon-doc/interfaces';
import {TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR} from '@taiga-ui/addon-doc/tokens';
import {tuiRawLoad} from '@taiga-ui/addon-doc/utils';
import {TuiHandler} from '@taiga-ui/cdk';
import {BehaviorSubject, Subject, timer} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';

@Component({
    selector: 'tui-doc-code',
    templateUrl: './code.template.html',
    styleUrls: ['./code.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocCodeComponent {
    private readonly rawLoader$$ = new BehaviorSubject<TuiRawLoaderContent>('');

    @Input()
    filename = '';

    readonly copy$ = new Subject<void>();

    readonly icon$ = this.copy$.pipe(
        switchMap(() =>
            timer(2000).pipe(
                map(() => 'tuiIconCopyLarge'),
                startWith('tuiIconCheckLarge'),
            ),
        ),
    );

    readonly processor$ = this.rawLoader$$.pipe(
        switchMap(tuiRawLoad),
        map((value: string): string[] => this.markdownCodeProcessor(value)),
    );

    constructor(
        @Inject(TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR)
        readonly markdownCodeProcessor: TuiHandler<string, string[]>,
    ) {}

    @Input()
    set code(code: TuiRawLoaderContent) {
        this.rawLoader$$.next(code);
    }

    @HostBinding('class._has-filename')
    get hasFilename(): boolean {
        return !!this.filename;
    }
}
