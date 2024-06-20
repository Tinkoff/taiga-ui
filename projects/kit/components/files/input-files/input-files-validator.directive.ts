import type {OnChanges, OnInit} from '@angular/core';
import {Directive, HostBinding, inject, Input} from '@angular/core';
import {Validators} from '@angular/forms';
import {TuiValidatorDirective} from '@taiga-ui/cdk/directives/validator';

import {
    tuiCreateFileFormatValidator,
    tuiCreateFileSizeValidator,
} from '../files.validators';
import {TUI_INPUT_FILES_OPTIONS} from './input-files.options';

@Directive({
    standalone: true,
    selector: 'input:is(never)',
    exportAs: 'tuiInputFilesValidator',
    hostDirectives: [TuiValidatorDirective],
})
export class TuiInputFilesValidator implements OnChanges, OnInit {
    private readonly options = inject(TUI_INPUT_FILES_OPTIONS);
    private readonly validator = inject(TuiValidatorDirective);

    @Input()
    @HostBinding('accept')
    public accept = this.options.accept;

    @Input()
    public maxFileSize = this.options.maxFileSize;

    public ngOnChanges(): void {
        this.validate();
    }

    public ngOnInit(): void {
        this.validate();
    }

    private validate(): void {
        this.validator.tuiValidator =
            Validators.compose([
                tuiCreateFileFormatValidator(this.accept),
                tuiCreateFileSizeValidator(this.maxFileSize),
            ]) || Validators.nullValidator;
        this.validator.ngOnChanges();
    }
}
