import {Directive, ElementRef, inject, INJECTOR} from '@angular/core';
import type {Validator} from '@angular/forms';
import {NG_VALIDATORS} from '@angular/forms';
import {TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk';

import {tuiCreateUnfinishedValidator} from './unfinished.validator';

@Directive({
    selector: '[tuiUnfinishedValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: TuiUnfinishedValidatorDirective,
            multi: true,
        },
    ],
})
export class TuiUnfinishedValidatorDirective implements Validator {
    private readonly injector = inject(INJECTOR);

    public readonly validate = tuiCreateUnfinishedValidator(
        () => this.injector.get(TUI_FOCUSABLE_ITEM_ACCESSOR),
        inject(ElementRef).nativeElement.getAttribute('tuiUnfinishedValidator') || '',
    );
}
