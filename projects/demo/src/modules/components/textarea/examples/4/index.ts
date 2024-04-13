import type {AfterViewInit} from '@angular/core';
import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

const LONG_TEXT_EXAMPLE = `
In Java: everything is an object.
In Clojure: everything is a list.
In JavaScript: everything is a terrible mistake.
`;

export function maxLengthMessageFactory(context: {requiredLength: string}): string {
    return `Maximum length — ${context.requiredLength}`;
}

@Component({
    selector: 'tui-textarea-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Enter this!',
                maxlength: maxLengthMessageFactory,
            },
        },
    ],
})
export class TuiTextareaExample4 implements AfterViewInit {
    protected readonly maxLength = 97;

    protected readonly testForm = new FormGroup({
        testValue1: new FormControl(LONG_TEXT_EXAMPLE.trim(), [
            Validators.required,
            Validators.maxLength(this.maxLength),
        ]),
    });

    public ngAfterViewInit(): void {
        tuiMarkControlAsTouchedAndValidate(this.testForm);
    }
}
