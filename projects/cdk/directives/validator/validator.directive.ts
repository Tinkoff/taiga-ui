import {Directive, forwardRef, Input, OnChanges, OnDestroy} from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    ValidationErrors,
    Validator,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';

@Directive({
    selector: '[tuiValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => TuiValidatorDirective),
        },
    ],
})
export class TuiValidatorDirective implements Validator, OnChanges, OnDestroy {
    private onChange = EMPTY_FUNCTION;

    @Input()
    tuiValidator: ValidatorFn = Validators.nullValidator;

    validate(control: AbstractControl): ValidationErrors | null {
        return this.tuiValidator(control);
    }

    registerOnValidatorChange(onChange: (...args: any[]) => void): void {
        this.onChange = onChange;
    }

    ngOnChanges(): void {
        this.onChange();
    }

    ngOnDestroy(): void {
        this.tuiValidator = Validators.nullValidator;
        this.onChange();
    }
}
