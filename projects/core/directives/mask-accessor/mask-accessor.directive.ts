import {Directive, Optional} from '@angular/core';
import type {ControlValueAccessor} from '@angular/forms';
import {DefaultValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {TUI_VALUE_ACCESSOR} from '@taiga-ui/core/tokens';

/**
 * @deprecated
 * TODO: Remove before v4.0
 */
@Directive({
    selector: 'input[tuiMaskAccessor]',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            deps: [[new Optional(), TUI_VALUE_ACCESSOR], DefaultValueAccessor],
            multi: true,
            useFactory: (
                accessor: readonly ControlValueAccessor[] | null,
                fallback: ControlValueAccessor,
            ): ControlValueAccessor => (accessor ? accessor[0] : fallback),
        },
    ],
})
export class TuiMaskAccessorDirective {}
