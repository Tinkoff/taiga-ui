import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk';
import {tuiAsDataList} from '@taiga-ui/core';
import type {TuiItemsHandlers} from '@taiga-ui/kit';
import {AbstractTuiNativeSelect} from '@taiga-ui/legacy/abstract';

import type {TuiSelectDirective} from '../select.directive';

@Component({
    selector: 'select[tuiSelect][labels]:not([multiple])',
    templateUrl: './native-select-group.template.html',
    styleUrls: ['./native-select.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsDataList(TuiNativeSelectGroupComponent),
        tuiProvide(AbstractTuiNativeSelect, TuiNativeSelectGroupComponent),
        {
            provide: TemplateRef,
            deps: [TuiNativeSelectGroupComponent],
            useFactory: ({datalist}: TuiNativeSelectGroupComponent<unknown>) => datalist,
        },
    ],
    host: {
        '[attr.aria-invalid]': 'host.invalid',
        '[disabled]': 'host.disabled || control.readOnly',
        '[tabIndex]': 'host.focusable ? 0 : -1',
        '[value]': 'host.value',
        '(change)': 'onValueChange($event.target.options.selectedIndex)',
    },
})
export class TuiNativeSelectGroupComponent<T> extends AbstractTuiNativeSelect<
    TuiSelectDirective,
    T
> {
    @Input()
    public items: readonly T[][] | null = [];

    @Input()
    public labels: readonly string[] = [];

    protected get stringify(): TuiItemsHandlers<T>['stringify'] {
        return this.host.stringify;
    }

    protected selected(option: T): boolean {
        return this.control.value === option;
    }

    protected onValueChange(index: number): void {
        const flatItems = this.items?.reduce((acc, val) => acc.concat(val), []);

        this.host.onValueChange(flatItems?.[index] || null);
    }
}
