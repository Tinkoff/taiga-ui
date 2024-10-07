import type {Provider, WritableSignal} from '@angular/core';
import {Directive, inject, Input, Optional, signal, SkipSelf} from '@angular/core';
import {tuiCreateToken, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

const DEFAULT = {
    appearance: 'textfield',
    size: 'l',
    cleaner: true,
    readOnly: false,
} as const;

export interface TuiTextfieldOptions {
    readonly appearance: WritableSignal<string>;
    readonly size: WritableSignal<TuiSizeL | TuiSizeS>;
    readonly cleaner: WritableSignal<boolean>;
    readonly readOnly: WritableSignal<boolean>;
}

export const TUI_TEXTFIELD_OPTIONS = tuiCreateToken<TuiTextfieldOptions>({
    appearance: signal(DEFAULT.appearance),
    size: signal(DEFAULT.size),
    cleaner: signal(DEFAULT.cleaner),
    readOnly: signal(DEFAULT.readOnly),
});

export function tuiTextfieldOptionsProvider(
    options: Partial<TuiTextfieldOptions>,
): Provider {
    return {
        provide: TUI_TEXTFIELD_OPTIONS,
        deps: [[new Optional(), new SkipSelf(), TUI_TEXTFIELD_OPTIONS]],
        useFactory: (parent: TuiTextfieldOptions | null): TuiTextfieldOptions => ({
            appearance: signal(parent?.appearance() ?? DEFAULT.appearance),
            size: signal(parent?.size() ?? DEFAULT.size),
            cleaner: signal(parent?.cleaner() ?? DEFAULT.cleaner),
            readOnly: signal(parent?.readOnly() ?? DEFAULT.readOnly),
            ...options,
        }),
    };
}

@Directive({
    standalone: true,
    selector: '[tuiTextfieldAppearance],[tuiTextfieldSize],[tuiTextfieldCleaner]',
    providers: [tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTextfieldOptionsDirective)],
})
export class TuiTextfieldOptionsDirective implements TuiTextfieldOptions {
    private readonly options = inject(TUI_TEXTFIELD_OPTIONS, {skipSelf: true});

    // TODO: refactor to signal inputs after Angular update
    public appearance = signal(this.options.appearance());
    public size = signal(this.options.size());
    public cleaner = signal(this.options.cleaner());
    public readOnly = signal(this.options.readOnly());

    @Input()
    public set tuiTextfieldAppearance(appearance: string) {
        this.appearance.set(appearance);
    }

    @Input()
    public set tuiTextfieldSize(size: TuiSizeL | TuiSizeS) {
        this.size.set(size);
    }

    @Input()
    public set tuiTextfieldCleaner(enabled: boolean) {
        this.cleaner.set(enabled);
    }
}
