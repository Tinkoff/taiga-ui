import {
    ChangeDetectionStrategy,
    Component,
    DoCheck,
    ElementRef,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {tuiIsString, TuiNativeValidatorDirective} from '@taiga-ui/cdk';
import {TUI_ICON_RESOLVER, TuiAppearanceDirective, TuiSizeS} from '@taiga-ui/core';

import {TUI_TOGGLE_OPTIONS} from './toggle.options';

@Component({
    selector: 'input[type="checkbox"][tuiToggle]',
    template: '',
    styleUrls: ['./toggle.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        {
            directive: TuiAppearanceDirective,
            inputs: [
                'tuiAppearance: appearance',
                'tuiAppearanceState',
                'tuiAppearanceFocus',
            ],
        },
        TuiNativeValidatorDirective,
    ],
    host: {
        '[disabled]': '!control || control.disabled',
        '[attr.data-size]': 'size',
        '[class._readonly]': '!control',
        '[class._icons]': 'showIcons',
    },
})
export class TuiToggleComponent implements DoCheck {
    private readonly appearance = inject(TuiAppearanceDirective);
    private readonly resolver = inject(TUI_ICON_RESOLVER);
    private readonly options = inject(TUI_TOGGLE_OPTIONS);
    private readonly el: HTMLInputElement = inject(ElementRef).nativeElement;

    protected readonly control = inject(NgControl, {optional: true});

    @Input()
    public size: TuiSizeS = this.options.size;

    @Input()
    public showIcons = this.options.showIcons;

    @HostBinding('style.--t-mask')
    public get icon(): string {
        const {options, resolver, size} = this;
        const icon = tuiIsString(options.icon) ? options.icon : options.icon(size);

        return `url(${resolver(icon)})`;
    }

    public ngDoCheck(): void {
        this.appearance.tuiAppearance = this.options.appearance(this.el);
    }
}
