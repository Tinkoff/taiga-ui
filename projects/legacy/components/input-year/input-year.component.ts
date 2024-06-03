import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import type {MaskitoOptions} from '@maskito/core';
import {maskitoNumberOptionsGenerator} from '@maskito/kit';
import type {TuiBooleanHandler, TuiFocusableElementAccessor} from '@taiga-ui/cdk';
import {
    AbstractTuiNullableControl,
    MAX_YEAR,
    MIN_YEAR,
    TUI_FALSE_HANDLER,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiPure,
} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS, TuiWithOptionalMinMax} from '@taiga-ui/core';
import {TUI_TEXTFIELD_SIZE, TuiPrimitiveTextfieldComponent} from '@taiga-ui/core';
import type {TuiInputDateOptions} from '@taiga-ui/kit';
import {TUI_INPUT_DATE_OPTIONS} from '@taiga-ui/kit';

const UP_TO_4_DIGITS_REG = /^\d{0,4}$/;

@Component({
    selector: 'tui-input-year',
    templateUrl: './input-year.template.html',
    styleUrls: ['./input-year.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputYearComponent),
        tuiAsControl(TuiInputYearComponent),
    ],
})
export class TuiInputYearComponent
    extends AbstractTuiNullableControl<number>
    implements TuiWithOptionalMinMax<number>, TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly options = inject(TUI_INPUT_DATE_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    @Input()
    public min: number | null = this.options.min.year;

    @Input()
    public max: number | null = this.options.max.year;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<number> = TUI_FALSE_HANDLER;

    public nativeValue = '';

    protected open = false;
    protected readonly initialItem = new Date().getFullYear();

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement || null;
    }

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    public onValueChange(value: string): void {
        this.value = value ? Number(value) : null;
    }

    public override writeValue(value: number | null): void {
        super.writeValue(value);
        this.updateNativeValue(value);
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected get calendarIcon(): TuiInputDateOptions['icon'] {
        return this.options.icon;
    }

    @tuiPure
    protected getMaskOptions(min: number | null, max: number | null): MaskitoOptions {
        return {
            ...maskitoNumberOptionsGenerator({
                min: min ?? MIN_YEAR,
                max: max ?? MAX_YEAR,
                thousandSeparator: '',
            }),
            mask: UP_TO_4_DIGITS_REG,
        };
    }

    protected onYearClick(year: number): void {
        this.value = year;
        this.updateNativeValue(year);
        this.onOpenChange(false);
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected onOpenChange(open: boolean): void {
        this.open = open;
    }

    protected toggle(): void {
        this.open = !this.open;
    }

    private updateNativeValue(value: number | null): void {
        this.nativeValue = value?.toString() || '';
    }
}
