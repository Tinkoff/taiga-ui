import {Directive, Input} from '@angular/core';
import {MASKITO_DEFAULT_OPTIONS, MaskitoOptions, maskitoTransform} from '@maskito/core';
import {AbstractTuiValueTransformer, TuiTypedMapper} from '@taiga-ui/cdk';
import {identity} from 'rxjs';

@Directive({
    selector: '[maskito][tuiUnmaskHandler]',
    providers: [
        {
            provide: AbstractTuiValueTransformer,
            useExisting: TuiUnmaskHandlerDirective,
        },
    ],
})
export class TuiUnmaskHandlerDirective extends AbstractTuiValueTransformer<string> {
    @Input()
    tuiUnmaskHandler: TuiTypedMapper<[string], string> = identity;

    @Input()
    maskito: MaskitoOptions = MASKITO_DEFAULT_OPTIONS;

    override fromControlValue(controlValue: unknown): string {
        return maskitoTransform(String(controlValue ?? ''), this.maskito);
    }

    override toControlValue(value: string): string {
        return this.tuiUnmaskHandler(value);
    }
}
