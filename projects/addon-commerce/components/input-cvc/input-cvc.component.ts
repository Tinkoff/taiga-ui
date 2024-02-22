import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {MaskitoOptions} from '@maskito/core';
import {TuiCodeCVCLength} from '@taiga-ui/addon-commerce/types';
import {
    AbstractTuiControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiAutofillFieldName,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    TUI_DIGIT_REGEXP,
    TUI_TEXTFIELD_LABEL_OUTSIDE,
    TUI_TEXTFIELD_SIZE,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
} from '@taiga-ui/core';

@Component({
    selector: 'tui-input-cvc',
    templateUrl: './input-cvc.template.html',
    styleUrls: ['./input-cvc.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputCVCComponent),
        tuiAsControl(TuiInputCVCComponent),
    ],
})
export class TuiInputCVCComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly input?: TuiPrimitiveTextfieldComponent;

    private readonly textfieldLabelOutside = inject(TUI_TEXTFIELD_LABEL_OUTSIDE);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    protected exampleText = '000';

    protected maskOptions: MaskitoOptions = {
        mask: new Array(3).fill(TUI_DIGIT_REGEXP),
    };

    @Input()
    public autocompleteEnabled = false;

    @Input()
    public set length(length: TuiCodeCVCLength) {
        this.exampleText = '0'.repeat(length);
        this.maskOptions = {
            mask: new Array(length).fill(TUI_DIGIT_REGEXP),
        };
    }

    @HostBinding('attr.data-size')
    public get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.input?.nativeFocusableElement ?? null;
    }

    public get focused(): boolean {
        return !!this.input && this.input.focused;
    }

    public get autocomplete(): TuiAutofillFieldName {
        return this.autocompleteEnabled ? 'cc-csc' : 'off';
    }

    public get computedPlaceholder(): string {
        return this.textfieldLabelOutside.labelOutside ? '' : this.exampleText;
    }

    public onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    /** deprecated use 'value' setter */
    public onValueChange(value: string): void {
        this.value = value;
    }

    protected getFallbackValue(): string {
        return '';
    }
}
