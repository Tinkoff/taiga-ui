import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {AbstractTuiController} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_MAX_LENGTH =
    new InjectionToken<TuiTextfieldMaxLengthDirective>('tuiTextfieldMaxLength', {
        factory: maxLengthDirectiveFactory,
    });

@Directive({
    selector: '[tuiTextfieldMaxLength]',
    providers: [
        {
            provide: TUI_TEXTFIELD_MAX_LENGTH,
            useExisting: forwardRef(() => TuiTextfieldMaxLengthDirective),
        },
    ],
})
export class TuiTextfieldMaxLengthDirective extends AbstractTuiController {
    @Input('tuiTextfieldMaxLength')
    maxLength: number | null = null;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function maxLengthDirectiveFactory(): TuiTextfieldMaxLengthDirective {
    return new TuiTextfieldMaxLengthDirective();
}
