import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TUI_DOC_MAP_PAGES, TUI_DOC_SEE_ALSO_TEXT} from '@taiga-ui/addon-doc/tokens';

@Component({
    selector: 'tui-doc-see-also',
    templateUrl: './see-also.template.html',
    styleUrls: ['./see-also.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocSeeAlsoComponent {
    private readonly pages = inject(TUI_DOC_MAP_PAGES);
    protected readonly text = inject(TUI_DOC_SEE_ALSO_TEXT);

    @Input()
    public seeAlso: readonly string[] = [];

    protected getRouterLink(pageTitle: string): string {
        return this.pages.get(pageTitle)?.route ?? '';
    }
}
