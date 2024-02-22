import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiNullableControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiHorizontalDirection,
    TuiModeDirective,
    TuiSizeL,
    TuiSizeXS,
} from '@taiga-ui/core';
import {TuiCheckboxComponent} from '@taiga-ui/kit/components/checkbox';

@Component({
    selector: 'tui-checkbox-block',
    templateUrl: './checkbox-block.template.html',
    styleUrls: ['./checkbox-block.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiCheckboxBlockComponent),
        tuiAsControl(TuiCheckboxBlockComponent),
    ],
})
export class TuiCheckboxBlockComponent
    extends AbstractTuiNullableControl<boolean>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiCheckboxComponent)
    private readonly checkbox?: TuiCheckboxComponent;

    protected readonly modeDirective = inject(TuiModeDirective, {optional: true});

    @Input()
    @HostBinding('attr.data-align')
    public contentAlign: TuiHorizontalDirection = 'right';

    @Input()
    @HostBinding('class._hidden_input')
    public hideCheckbox = false;

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeL | TuiSizeXS = 'l';

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.checkbox?.nativeFocusableElement ?? null;
    }

    @HostBinding('class._active')
    public get checked(): boolean {
        return this.value !== false && this.hideCheckbox;
    }

    public get checkboxSize(): TuiSizeL {
        return this.size === 'l' ? 'l' : 'm';
    }

    public get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    public get appearance(): TuiAppearance {
        if (!this.modeDirective?.mode) {
            return this.checked
                ? TuiAppearance.WhiteblockActive
                : TuiAppearance.Whiteblock;
        }

        return this.checked ? TuiAppearance.Primary : TuiAppearance.Secondary;
    }

    public onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    public onFocusVisible(focusVisible: boolean): void {
        this.updateFocusVisible(focusVisible);
    }

    /** @deprecated use 'value' setter */
    public onModelChange(value: boolean): void {
        this.value = value;
    }
}
