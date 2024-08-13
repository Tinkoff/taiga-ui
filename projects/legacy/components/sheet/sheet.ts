import type {TuiContext} from '@taiga-ui/cdk/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import type {Observable, Observer} from 'rxjs';

import type {TuiSheetOptions} from './sheet-options';

/**
 * @deprecated: drop in v5.0 use {@link TuiSheetDialog}
 */
export interface TuiSheet<O, I = undefined>
    extends TuiSheetOptions<I, O>,
        TuiContext<Observer<O>> {
    completeWith(value: O): void;
    readonly content: PolymorpheusContent<TuiSheet<O, I>>;
    readonly scroll$: Observable<number>;
}

/**
 * @deprecated: drop in v5.0 use {@link TuiSheetDialog}
 */
export interface TuiSheetRequiredProps<T = unknown> {
    item: TuiSheet<T>;
    stops: readonly number[];
}
