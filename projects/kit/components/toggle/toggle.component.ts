import {
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    HostBinding,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    type TuiContext,
    type TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    type TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    type TuiBrightness,
    TuiModeDirective,
    type TuiSizeL,
    type TuiSizeXS,
} from '@taiga-ui/core';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_TOGGLE_OPTIONS} from './toggle.options';

@Component({
    selector: 'tui-toggle',
    templateUrl: './toggle.template.html',
    styleUrls: ['./toggle.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiToggleComponent),
        tuiAsControl(TuiToggleComponent),
    ],
    host: {'[class._checked]': 'value'},
})
export class TuiToggleComponent
    extends AbstractTuiControl<boolean>
    implements TuiFocusableElementAccessor
{
    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<TuiNativeFocusableElement>;

    private readonly options = inject(TUI_TOGGLE_OPTIONS);

    private readonly modeDirective = inject(TuiModeDirective, {optional: true});

    @Input()
    public singleColor = this.options.singleColor;

    @Input()
    public showIcons = this.options.showIcons;

    @Input()
    public showLoader = false;

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeL = this.options.size;

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.focusableElement?.nativeElement ?? null;
    }

    public get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    @HostBinding('attr.data-mode')
    protected get hostMode(): TuiBrightness | null {
        return this.modeDirective?.mode ?? null;
    }

    protected get iconOn(): PolymorpheusContent<TuiContext<TuiSizeL>> {
        return this.options.icons.toggleOn;
    }

    protected get iconOff(): PolymorpheusContent<TuiContext<TuiSizeL>> {
        return this.options.icons.toggleOff;
    }

    protected get appearance(): string {
        return this.singleColor || this.value
            ? this.options.appearances.checked
            : this.options.appearances.unchecked;
    }

    protected get sizeM(): boolean {
        return this.size === 'm';
    }

    protected get loaderSize(): TuiSizeXS {
        return this.sizeM ? 'xs' : 's';
    }

    /** @deprecated use 'value' setter */
    protected onChecked(checked: boolean): void {
        this.value = checked;
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected onFocusVisible(focusVisible: boolean): void {
        this.updateFocusVisible(focusVisible);
    }

    protected getFallbackValue(): boolean {
        return false;
    }
}
