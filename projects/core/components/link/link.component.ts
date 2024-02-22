import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    ALWAYS_TRUE_HANDLER,
    tuiAsFocusableItemAccessor,
    TuiDestroyService,
    TuiFocusableElementAccessor,
    TuiFocusVisibleService,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import {TuiHorizontalDirection} from '@taiga-ui/core/types';
import {map, merge} from 'rxjs';

// @bad TODO: Think about extending Interactive
@Component({
    selector: 'a[tuiLink], button[tuiLink]',
    templateUrl: './link.template.html',
    styleUrls: ['./link.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiLinkComponent),
        TuiFocusVisibleService,
        TuiDestroyService,
        MODE_PROVIDER,
    ],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
    exportAs: 'tuiLink',
})
export class TuiLinkComponent implements TuiFocusableElementAccessor {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    @HostBinding('class._focus-visible')
    protected focusVisible = false;

    protected readonly mode$ = inject(TUI_MODE);

    @Input()
    @HostBinding('class._pseudo')
    public pseudo = false;

    @Input()
    public icon = '';

    @Input()
    public iconAlign: TuiHorizontalDirection = 'right';

    @Input()
    @HostBinding('class._icon-rotated')
    public iconRotated = false;

    @Input()
    @HostBinding('attr.data-host-mode')
    public mode: 'negative' | 'positive' | null = null;

    public readonly focusedChange = merge(
        tuiTypedFromEvent(this.el, 'focusin').pipe(map(ALWAYS_TRUE_HANDLER)),
        tuiTypedFromEvent(this.el, 'focusout').pipe(map(ALWAYS_FALSE_HANDLER)),
    );

    constructor() {
        inject(TuiFocusVisibleService).subscribe(visible => {
            this.focusVisible = visible;
        });
    }

    public get nativeFocusableElement(): TuiNativeFocusableElement {
        return this.el;
    }

    public get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    public get hasIcon(): boolean {
        return !!this.icon;
    }

    public get iconAlignLeft(): boolean {
        return this.hasIcon && this.iconAlign === 'left';
    }

    public get iconAlignRight(): boolean {
        return this.hasIcon && this.iconAlign === 'right';
    }
}
