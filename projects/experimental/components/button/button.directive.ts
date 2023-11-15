import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_PLATFORM, TuiDirectiveStylesService, TuiPlatform} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiBrightness} from '@taiga-ui/core';
import {Observable} from 'rxjs';

import {TUI_BUTTON_OPTIONS, TuiButtonOptions} from './button.options';

@Component({
    template: '',
    styleUrls: ['./button.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-button-styles',
    },
})
export class TuiButtonStylesComponent {}

@Directive({
    selector: 'a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]',
    providers: [MODE_PROVIDER],
    host: {
        tuiButtonNew: '',
        tuiAppearance: '',
        '[class._icon-left]': 'iconLeft',
        '[class._icon-right]': 'iconRight',
        '[style.--t-mask-left]': '"url(" + iconLeft + ")"',
        '[style.--t-mask-right]': '"url(" + iconRight + ")"',
        '[attr.data-size]': 'size',
        '[attr.data-appearance]': 'appearance',
        '[attr.data-platform]': 'platform',
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiButtonDirective {
    @Input()
    size = this.options.size;

    @Input()
    appearance = this.options.appearance;

    @Input()
    iconLeft = '';

    @Input()
    iconRight = '';

    constructor(
        @Inject(TUI_BUTTON_OPTIONS) private readonly options: TuiButtonOptions,
        @Inject(TUI_PLATFORM) readonly platform: TuiPlatform,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiButtonStylesComponent);
    }
}
