import {Directive, inject, Input, Provider} from '@angular/core';
import {AbstractTuiController, tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiAppearanceOptions} from '@taiga-ui/experimental/directives/appearance';

export interface TuiTextfieldOptions extends TuiAppearanceOptions {
    readonly size: TuiSizeL | TuiSizeS;
    readonly cleaner: boolean;
}

export const TUI_TEXTFIELD_DEFAULT_OPTIONS: TuiTextfieldOptions = {
    appearance: `textfield`,
    size: `l`,
    cleaner: false,
};

export const TUI_TEXTFIELD_OPTIONS = tuiCreateToken(TUI_TEXTFIELD_DEFAULT_OPTIONS);

export function tuiTextfieldOptionsProvider(
    options: Partial<TuiTextfieldOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_TEXTFIELD_OPTIONS,
        options,
        TUI_TEXTFIELD_DEFAULT_OPTIONS,
    );
}

@Directive({
    standalone: true,
    selector: `[tuiTextfieldAppearance],[tuiTextfieldSize],[tuiTextfieldCleaner]`,
    providers: [
        {
            provide: TUI_TEXTFIELD_OPTIONS,
            useExisting: TuiTextfieldOptionsDirective,
        },
    ],
})
export class TuiTextfieldOptionsDirective
    extends AbstractTuiController
    implements TuiTextfieldOptions
{
    private readonly options = inject(TUI_TEXTFIELD_OPTIONS, {skipSelf: true});

    @Input(`tuiTextfieldAppearance`)
    appearance = this.options.appearance;

    @Input(`tuiTextfieldSize`)
    size = this.options.size;

    @Input(`tuiTextfieldCleaner`)
    cleaner = this.options.cleaner;
}
