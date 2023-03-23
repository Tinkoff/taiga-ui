import type {TuiBaseDialogContext} from '@taiga-ui/cdk/interfaces';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export type TuiDialog<T, O> = T &
    TuiBaseDialogContext<O> & {content: PolymorpheusContent<T & TuiBaseDialogContext<O>>};
