import {Directive, inject, Input, OnInit, Output} from '@angular/core';
import {NgControl} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {TUI_CARD_MASK} from '@taiga-ui/addon-commerce/constants';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {TUI_PAYMENT_SYSTEM_ICONS} from '@taiga-ui/addon-commerce/utils';
import {tuiControlValue, tuiPure} from '@taiga-ui/cdk';
import {TUI_ICON_RESOLVER} from '@taiga-ui/core';
import {distinctUntilChanged, map, skip, startWith, switchMap, timer} from 'rxjs';

import {TUI_INPUT_CARD_OPTIONS} from './input-card.options';

@Directive({
    standalone: true,
    selector: 'input[tuiInputCard]',
    host: {
        inputmode: 'numeric',
        placeholder: '0000 0000 0000 0000',
        '[autocomplete]': 'autocomplete ? "cc-number" : "off"',
        '[style.background-image]': 'backgroundImage',
    },
    hostDirectives: [MaskitoDirective],
})
export class TuiInputCard implements OnInit {
    private readonly icons = inject(TUI_PAYMENT_SYSTEM_ICONS);
    private readonly options = inject(TUI_INPUT_CARD_OPTIONS);
    private readonly resolver = inject(TUI_ICON_RESOLVER);
    private readonly control = inject(NgControl);
    private readonly mask = inject(MaskitoDirective);

    @Input()
    public autocomplete = this.options.autocomplete;

    @Input()
    public icon: string | null = null;

    @Output()
    public readonly binChange = timer(0).pipe(
        switchMap(() => tuiControlValue<string>(this.control)),
        map(value => (value.length < 7 ? null : value.replace(' ', '').slice(0, 6))),
        startWith(null),
        distinctUntilChanged(),
        skip(1),
    );

    public ngOnInit(): void {
        this.mask.options = {mask: TUI_CARD_MASK};
        this.mask.ngOnChanges();
    }

    protected get backgroundImage(): string | null {
        const system = this.getPaymentSystem(this.control.value);
        const url = this.icon || (system && this.resolver(this.icons[system]));

        return url && `url(${url})`;
    }

    @tuiPure
    private getPaymentSystem(value: string): TuiPaymentSystem | null {
        return this.options.paymentSystemHandler(value);
    }
}
