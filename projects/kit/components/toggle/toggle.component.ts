import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiContext,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {TuiBrightness, TuiModeDirective, TuiSizeL, TuiSizeXS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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

    private readonly modeDirective = inject(TuiModeDirective, {optional: true});

    protected readonly options = inject(TUI_TOGGLE_OPTIONS);

    @Input()
    public singleColor = this.options.singleColor;

    @Input()
    public showIcons = this.options.showIcons;

    @Input()
    public showLoader = false;

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeL = this.options.size;

    public get iconOn(): PolymorpheusContent<TuiContext<TuiSizeL>> {
        return this.options.icons.toggleOn;
    }

    public get iconOff(): PolymorpheusContent<TuiContext<TuiSizeL>> {
        return this.options.icons.toggleOff;
    }

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.focusableElement?.nativeElement ?? null;
    }

    public get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    public get appearance(): string {
        return this.singleColor || this.value
            ? this.options.appearances.checked
            : this.options.appearances.unchecked;
    }

    public get sizeM(): boolean {
        return this.size === 'm';
    }

    public get loaderSize(): TuiSizeXS {
        return this.sizeM ? 'xs' : 's';
    }

    @HostBinding('attr.data-mode')
    public get hostMode(): TuiBrightness | null {
        return this.modeDirective?.mode ?? null;
    }

    /** @deprecated use 'value' setter */
    public onChecked(checked: boolean): void {
        this.value = checked;
    }

    public onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    public onFocusVisible(focusVisible: boolean): void {
        this.updateFocusVisible(focusVisible);
    }

    protected getFallbackValue(): boolean {
        return false;
    }
}
