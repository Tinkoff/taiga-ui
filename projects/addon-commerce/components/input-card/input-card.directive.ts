import type {OnInit} from '@angular/core';
import {Directive, inject, Input, Output} from '@angular/core';
import {DefaultValueAccessor, NgControl} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {TUI_MASK_CARD} from '@taiga-ui/addon-commerce/constants';
import {TUI_PAYMENT_SYSTEM_ICONS} from '@taiga-ui/addon-commerce/tokens';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiInjectIconResolver} from '@taiga-ui/core/tokens';
import {tuiMaskito} from '@taiga-ui/kit/utils';
import {distinctUntilChanged, map, skip, startWith, switchMap, timer} from 'rxjs';

import {TUI_INPUT_CARD_OPTIONS} from './input-card.options';

@Directive({
    standalone: true,
    selector: 'input[tuiInputCard]',
    hostDirectives: [MaskitoDirective],
    host: {
        inputmode: 'numeric',
        placeholder: '0000 0000 0000 0000',
        '[autocomplete]': 'autocomplete ? "cc-number" : "off"',
        '[style.background-image]': 'backgroundImage',
    },
})
export class TuiInputCard implements OnInit {
    private readonly icons = inject(TUI_PAYMENT_SYSTEM_ICONS);
    private readonly options = inject(TUI_INPUT_CARD_OPTIONS);
    private readonly resolver = tuiInjectIconResolver();
    private readonly control = inject(NgControl);
    private readonly accessor = inject(DefaultValueAccessor, {
        self: true,
        optional: true,
    });

    protected readonly mask = tuiMaskito(TUI_MASK_CARD);

    @Input()
    public autocomplete = this.options.autocomplete;

    @Input()
    public icon = this.options.icon;

    @Output()
    public readonly binChange = timer(0).pipe(
        switchMap(() => tuiControlValue<string>(this.control)),
        map((value) => (value.length < 6 ? null : value.replace(' ', '').slice(0, 6))),
        startWith(null),
        distinctUntilChanged(),
        skip(1),
    );

    public ngOnInit(): void {
        if (!this.accessor) {
            return;
        }

        const onChanges = this.accessor.onChange.bind(this.accessor);

        this.accessor.onChange = (value: string) => onChanges(value.replaceAll(' ', ''));
    }

    protected get backgroundImage(): string | null {
        const system = this.getPaymentSystem(this.control.value);
        const icon = system && this.icons[system] && this.resolver(this.icons[system]);
        const url = this.icon || icon;

        return url && this.icon !== '' ? `url(${url})` : null;
    }

    @tuiPure
    private getPaymentSystem(value: string): TuiPaymentSystem | null {
        return this.options.paymentSystemHandler(value);
    }
}
