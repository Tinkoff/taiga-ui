import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {
    AbstractTuiNullableControl,
    TuiAutofillFieldName,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
    tuiPure,
} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiInputCardOptions} from './input-card.options';

@Directive()
export abstract class AbstractTuiInputCard<
        T,
        Options extends TuiInputCardOptions = TuiInputCardOptions,
    >
    extends AbstractTuiNullableControl<T>
    implements TuiFocusableElementAccessor
{
    @Input()
    public cardSrc: PolymorpheusContent;

    @Input()
    public autocompleteEnabled = this.options.autocompleteEnabled;

    @Output()
    public readonly binChange = new EventEmitter<string | null>();

    protected constructor(protected readonly options: Options) {
        super();
    }

    abstract get card(): string;

    abstract get nativeFocusableElement(): TuiNativeFocusableElement | null;

    protected get defaultIcon(): string | null {
        const paymentSystem = this.getPaymentSystem(this.card);

        return paymentSystem && this.options.icons[paymentSystem];
    }

    protected get paymentSystem(): TuiPaymentSystem | null {
        return this.getPaymentSystem(this.card);
    }

    /** @deprecated remove in 4.0 */
    protected get icon(): PolymorpheusContent {
        return this.cardSrc || this.defaultIcon;
    }

    protected get autocomplete(): TuiAutofillFieldName {
        return this.autocompleteEnabled ? 'cc-number' : 'off';
    }

    /**
     * @deprecated: drop in v4.0
     * use {@link autocomplete}
     */
    protected get autocompleteCard(): TuiAutofillFieldName {
        return this.autocomplete;
    }

    protected get bin(): string | null {
        return this.card.length < 6 ? null : this.card.slice(0, 6);
    }

    @tuiPure
    protected getPaymentSystem(cardNumber?: string | null): TuiPaymentSystem | null {
        return this.options.paymentSystemHandler(cardNumber);
    }
}
