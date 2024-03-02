import {Component, type OnInit, ViewChild} from '@angular/core';
import {
    type AbstractControl,
    FormControl,
    FormGroup,
    type ValidationErrors,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValidationError} from '@taiga-ui/cdk';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

const secretRegexTen = /^\d{10}$/;
const secretRegexTwelve = /^\d{12}$/;

export function innValidator(field: AbstractControl): unknown {
    return field.value &&
        (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value))
        ? null
        : {
              inn: new TuiValidationError('Secret number contains 10 or 12 digits'),
          };
}

@Component({
    selector: 'tui-field-error-pipe-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiFieldErrorPipeExample3 implements OnInit {
    @ViewChild('errorContent')
    protected errorContent: PolymorpheusContent;

    @ViewChild('bigErrorContent')
    protected bigErrorContent: PolymorpheusContent;

    protected readonly testValue2 = new FormControl('');

    protected readonly testForm = new FormGroup({
        testValue1: new FormControl('', [Validators.required, this.getSecretValidator()]),
        testValue2: this.testValue2,
    });

    public ngOnInit(): void {
        this.testValue2.setValidators([Validators.required, this.companyValidator]);
    }

    private readonly companyValidator = (
        field: AbstractControl,
    ): ValidationErrors | null =>
        field.value
            ? {
                  inn: new TuiValidationError(this.bigErrorContent),
              }
            : null;

    private getSecretValidator(): (field: AbstractControl) => ValidationErrors | null {
        return (field: AbstractControl): ValidationErrors | null =>
            field.value &&
            (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value))
                ? null
                : {
                      secret: new TuiValidationError(this.errorContent),
                  };
    }
}
