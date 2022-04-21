import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    Inject,
    Input,
} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TUI_DATA_LIST_ACCESSOR} from '@taiga-ui/core';
import {TUI_ITEMS_HANDLERS, TuiItemsHandlers} from '@taiga-ui/kit/tokens';

import {AbstractDataListWrapper} from './data-list-wrapper';

@Component({
    selector: 'tui-data-list-wrapper:not([labels])',
    templateUrl: './data-list-wrapper.template.html',
    styleUrls: ['./data-list-wrapper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_DATA_LIST_ACCESSOR,
            useExisting: forwardRef(() => TuiDataListWrapperComponent),
        },
    ],
})
export class TuiDataListWrapperComponent<T> extends AbstractDataListWrapper<T> {
    @Input()
    @tuiDefaultProp()
    items: readonly T[] | null = [];

    constructor(@Inject(TUI_ITEMS_HANDLERS) itemsHandlers: TuiItemsHandlers<T>) {
        super(itemsHandlers);
    }
}
