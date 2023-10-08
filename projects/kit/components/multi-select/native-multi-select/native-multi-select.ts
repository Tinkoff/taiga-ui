import {Directive} from '@angular/core';
import {TuiTypedMapper} from '@taiga-ui/cdk';
import {AbstractTuiNativeSelect} from '@taiga-ui/kit/abstract';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';

import type {TuiMultiSelectDirective} from '../multi-select.directive';

@Directive()
export abstract class AbstractTuiNativeMultiSelect<T> extends AbstractTuiNativeSelect<
    TuiMultiSelectDirective<T>,
    T
> {
    selectedMapper: TuiTypedMapper<[T, ...any[]], boolean> = (option, value) =>
        value.includes(option);

    get stringify(): TuiItemsHandlers<T>['stringify'] {
        return this.host.stringify;
    }
}
