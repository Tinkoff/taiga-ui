import {Component} from '@angular/core';
import {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValidationError} from '@taiga-ui/cdk';
import {tuiFilesAccepted} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    selector: 'tui-input-files-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputFilesExample2 {
    protected rejected: readonly File[] = [];

    public readonly control = new FormControl<File[]>([], [maxFilesLength(5)]);

    public readonly accepted$ = this.control.valueChanges.pipe(
        map(() => tuiFilesAccepted(this.control)),
    );

    public onReject(files: readonly File[]): void {
        this.rejected = Array.from(new Set(this.rejected.concat(files)));
    }

    public onRemove(file: File): void {
        this.rejected = this.rejected.filter(rejected => rejected !== file);
        this.control.setValue(
            this.control.value?.filter(current => current !== file) ?? [],
        );
    }
}

export function maxFilesLength(maxLength: number): ValidatorFn {
    return ({value}: AbstractControl) =>
        value.length > maxLength
            ? {
                  maxLength: new TuiValidationError(
                      'Error: maximum limit - 5 files for upload',
                  ),
              }
            : null;
}
