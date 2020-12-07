import {
    Attribute,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    Inject,
    Input,
    QueryList,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {TUI_DOC_DEFAULT_TABS} from '../../tokens/default-tabs';
import {TuiDocPageTabConnectorDirective} from './page-tab.directive';
import {PAGE_PROVIDERS, PAGE_SEE_ALSO} from './page.providers';

// Ambient type cannot be used without dynamic https://github.com/angular/angular/issues/23395
// @dynamic
@Component({
    selector: 'tui-doc-page',
    templateUrl: './page.template.html',
    styleUrls: ['./page.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: PAGE_PROVIDERS,
})
export class TuiDocPageComponent {
    @Input()
    header = '';

    @Input()
    packageName = '';

    activeItemIndex = NaN;

    @ContentChildren(TuiDocPageTabConnectorDirective)
    readonly tabConnectors: QueryList<TuiDocPageTabConnectorDirective> = EMPTY_QUERY;

    constructor(
        @Attribute('deprecated') readonly deprecated: string | null,
        @Inject(ElementRef) readonly elementRef: ElementRef,
        @Inject(TUI_DOC_DEFAULT_TABS) readonly defaultTabs: ReadonlyArray<string>,
        @Inject(PAGE_SEE_ALSO) readonly seeAlso: ReadonlyArray<string>,
    ) {}

    get showSeeAlso(): boolean {
        return !!this.seeAlso.length && this.activeItemIndex === 0;
    }

    getRouterLink(tab: string = ''): string {
        return `./${tab.replace(/ /g, '_')}`;
    }
}
