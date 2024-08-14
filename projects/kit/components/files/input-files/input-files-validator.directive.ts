import type {OnChanges, OnInit} from '@angular/core';
import {Directive, inject, Input} from '@angular/core';
import {Validators} from '@angular/forms';
import {TuiValidator} from '@taiga-ui/cdk/directives/validator';

import {
    tuiCreateFileFormatValidator,
    tuiCreateFileSizeValidator,
} from '../files.validators';
import {TUI_INPUT_FILES_OPTIONS} from './input-files.options';

@Directive({
    standalone: true,
    exportAs: 'tuiInputFilesValidator',
    hostDirectives: [TuiValidator],
    host: {
        '[accept]': 'accept',
    },
})
export class TuiInputFilesValidator implements OnChanges, OnInit {
    private readonly options = inject(TUI_INPUT_FILES_OPTIONS);
    private readonly validator = inject(TuiValidator);

    @Input()
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
