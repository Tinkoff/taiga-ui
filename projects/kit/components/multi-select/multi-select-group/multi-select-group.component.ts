import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import type {TuiIdentityMatcher} from '@taiga-ui/cdk';
import {
    EMPTY_QUERY,
    TUI_DEFAULT_IDENTITY_MATCHER,
    tuiControlValue,
    tuiGetOriginalArrayFromQueryList,
    tuiIsPresent,
    tuiPure,
    tuiQueryListChanges,
} from '@taiga-ui/cdk';
import type {TuiDataListHost} from '@taiga-ui/core';
import {TUI_DATA_LIST_HOST, TuiOptionComponent} from '@taiga-ui/core';
import {TUI_MULTI_SELECT_TEXTS} from '@taiga-ui/kit/tokens';
import type {Observable} from 'rxjs';
import {combineLatest, map} from 'rxjs';

@Component({
    selector: 'tui-opt-group[tuiMultiSelectGroup]',
    templateUrl: './multi-select-group.template.html',
    styleUrls: ['./multi-select-group.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMultiSelectGroupComponent<T> {
    @ContentChildren(TuiOptionComponent)
    private readonly options: QueryList<TuiOptionComponent<T>> = EMPTY_QUERY;

    private readonly host = inject<TuiDataListHost<T>>(TUI_DATA_LIST_HOST);
    private readonly control = inject(NgControl);

    @HostBinding('class._label')
    @Input()
    public label = '';

    protected readonly multiSelectTexts$ = inject(TUI_MULTI_SELECT_TEXTS);

    @tuiPure
    protected get empty$(): Observable<boolean> {
        return tuiQueryListChanges(this.options).pipe(map(({length}) => !length));
    }

    @tuiPure
    protected get disabled$(): Observable<boolean> {
        return tuiQueryListChanges(this.options).pipe(
            map(items => items.every(({disabled}) => disabled)),
        );
    }

    @tuiPure
    protected get value$(): Observable<boolean | null> {
        return combineLatest([this.items$, this.valueChanges$]).pipe(
            map(([items, current]) => {
                let result = false;

                for (let i = 0; i < items.length; i++) {
                    const selected = current.some(selected =>
                        this.matcher(selected, items[i]),
                    );

                    if ((!selected && result) || (selected && !result && i)) {
                        return null;
                    }

                    result = selected;
                }

                return result;
            }),
        );
    }

    protected onClick(checked: boolean | null): void {
        if (!this.control.control) {
            return;
        }

        const controlValue: readonly T[] = this.control.value || [];
        const {values} = this;
        const filtered = controlValue.filter(current =>
            values.every(item => !this.matcher(current, item)),
        );

        this.control.control.setValue(checked ? filtered : [...filtered, ...values]);
    }

    @tuiPure
    private get items$(): Observable<readonly T[]> {
        return tuiQueryListChanges(this.options).pipe(
            map(options => options.map(({value}) => value).filter(tuiIsPresent)),
        );
    }

    @tuiPure
    private get valueChanges$(): Observable<readonly T[]> {
        return tuiControlValue<readonly T[]>(this.control).pipe(
            map(value => value || []),
        );
    }

    private get values(): readonly T[] {
        return this.filter(tuiGetOriginalArrayFromQueryList(this.options));
    }

    private get matcher(): TuiIdentityMatcher<T> {
        return this.host.identityMatcher || TUI_DEFAULT_IDENTITY_MATCHER;
    }

    @tuiPure
    private filter(items: ReadonlyArray<TuiOptionComponent<T>>): readonly T[] {
        return items.map(({value}) => value).filter(tuiIsPresent);
    }
}
