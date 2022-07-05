import {
    TuiAutofillFieldName,
    TuiContextWithImplicit,
    TuiInputModeT,
    TuiInputTypeT,
} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TuiTextfieldAutocompleteDirective} from './textfield-autocomplete.directive';
import {TuiTextfieldCleanerDirective} from './textfield-cleaner.directive';
import {TuiTextfieldCustomContentDirective} from './textfield-custom-content.directive';
import {TuiTextfieldExampleTextDirective} from './textfield-example-text.directive';
import {TuiTextfieldIconDirective} from './textfield-icon.directive';
import {TuiTextfieldIconLeftDirective} from './textfield-icon-left.directive';
import {TuiTextfieldInputModeDirective} from './textfield-input-mode.directive';
import {TuiTextfieldLabelOutsideDirective} from './textfield-label-outside.directive';
import {TuiTextfieldMaxLengthDirective} from './textfield-max-length.directive';
import {TuiTextfieldSizeDirective} from './textfield-size.directive';
import {TuiTextfieldTypeDirective} from './textfield-type.directive';

export class TuiTextfieldController {
    constructor(
        readonly change$: Observable<void>,
        private readonly autocompleteDirective: TuiTextfieldAutocompleteDirective,
        private readonly cleanerDirective: TuiTextfieldCleanerDirective,
        private readonly customContentDirective: TuiTextfieldCustomContentDirective,
        private readonly exampleTextDirective: TuiTextfieldExampleTextDirective,
        private readonly iconDirective: TuiTextfieldIconDirective,
        private readonly iconLeftDirective: TuiTextfieldIconLeftDirective,
        private readonly inputModeDirective: TuiTextfieldInputModeDirective,
        private readonly labelOutsideDirective: TuiTextfieldLabelOutsideDirective,
        private readonly maxLengthDirective: TuiTextfieldMaxLengthDirective,
        private readonly sizeDirective: TuiTextfieldSizeDirective,
        private readonly typeDirective: TuiTextfieldTypeDirective,
    ) {}

    get autocomplete(): TuiAutofillFieldName | '' {
        return this.autocompleteDirective.autocomplete;
    }

    get cleaner(): boolean {
        return this.cleanerDirective.cleaner;
    }

    get customContent(): PolymorpheusContent {
        return this.customContentDirective.customContent || '';
    }

    get exampleText(): string {
        return this.exampleTextDirective.exampleText;
    }

    get icon(): PolymorpheusContent<TuiContextWithImplicit<TuiSizeS | TuiSizeL>> {
        return this.iconDirective.icon;
    }

    get iconLeft(): PolymorpheusContent<TuiContextWithImplicit<TuiSizeS | TuiSizeL>> {
        return this.iconLeftDirective.iconLeft;
    }

    get inputMode(): TuiInputModeT {
        return this.inputModeDirective.inputMode;
    }

    get labelOutside(): boolean {
        return this.labelOutsideDirective.labelOutside;
    }

    get maxLength(): number | null {
        return this.maxLengthDirective.maxLength;
    }

    get size(): TuiSizeS | TuiSizeL {
        return this.sizeDirective.size;
    }

    get type(): TuiInputTypeT {
        return this.typeDirective.type;
    }
}
