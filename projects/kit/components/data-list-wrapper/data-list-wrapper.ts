import {
    Directive,
    ElementRef,
    EventEmitter,
    forwardRef,
    Input,
    Output,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {EMPTY_QUERY, tuiIsNativeFocused, tuiIsPresent} from '@taiga-ui/cdk';
import {
    TuiOptionComponent,
    TuiSizeL,
    TuiSizeXS,
    TuiValueContentContext,
} from '@taiga-ui/core';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Directive()
export abstract class AbstractTuiDataListWrapper<T> {
    @ViewChildren(forwardRef(() => TuiOptionComponent))
    protected readonly optionsQuery: QueryList<TuiOptionComponent<T>> = EMPTY_QUERY;

    @Input()
    disabledItemHandler: TuiItemsHandlers<T>['disabledItemHandler'] =
        this.itemsHandlers.disabledItemHandler;

    @Input()
    emptyContent: PolymorpheusContent;

    @Input()
    size: TuiSizeL | TuiSizeXS = this.defaultSize;

    @Output()
    readonly itemClick = new EventEmitter<T>();

    protected constructor(
        protected readonly itemsHandlers: TuiItemsHandlers<T>,
        protected readonly defaultSize: TuiSizeL | TuiSizeXS,
    ) {}

    @Input()
    itemContent: PolymorpheusContent<TuiValueContentContext<T>> = ({$implicit}) =>
        this.itemsHandlers.stringify($implicit);

    getContext(
        $implicit: T,
        {nativeElement}: ElementRef<HTMLElement>,
    ): TuiValueContentContext<T> {
        return {$implicit, active: tuiIsNativeFocused(nativeElement)};
    }

    getOptions(includeDisabled = false): readonly T[] {
        return this.optionsQuery
            .filter(({disabled}) => includeDisabled || !disabled)
            .map(({value}) => value)
            .filter(tuiIsPresent);
    }
}
