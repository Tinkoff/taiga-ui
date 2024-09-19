import {NgForOf, TitleCasePipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {tuiScrollbarOptionsProvider} from '@taiga-ui/core/components/scrollbar';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import {TuiFlagPipe} from '@taiga-ui/core/pipes/flag';
import type {TuiCountryIsoCode, TuiLanguageName} from '@taiga-ui/i18n/types';
import {TuiLanguageSwitcherService} from '@taiga-ui/i18n/utils';

@Component({
    standalone: true,
    selector: 'tui-doc-language-switcher',
    imports: [
        NgForOf,
        ReactiveFormsModule,
        TitleCasePipe,
        TuiButton,
        TuiDataList,
        TuiDropdown,
        TuiFlagPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiScrollbarOptionsProvider({mode: 'hover'})],
})
export class TuiDocLanguageSwitcher {
    protected readonly switcher = inject(TuiLanguageSwitcherService);
    protected readonly language = new FormControl(capitalize(this.switcher.language));

    protected open = false;

    public readonly flags = new Map<TuiLanguageName, TuiCountryIsoCode>([
        ['belarusian', 'BY'],
        ['chinese', 'CN'],
        ['dutch', 'NL'],
        ['english', 'GB'],
        ['french', 'FR'],
        ['german', 'DE'],
        ['hebrew', 'IL'],
        ['italian', 'IT'],
        ['japan', 'JP'],
        ['kazakh', 'KZ'],
        ['korean', 'KR'],
        ['malay', 'MY'],
        ['polish', 'PL'],
        ['portuguese', 'PT'],
        ['russian', 'RU'],
        ['spanish', 'ES'],
        ['turkish', 'TR'],
        ['ukrainian', 'UA'],
        ['vietnamese', 'VN'],
    ]);

    public readonly names: TuiLanguageName[] = Array.from(this.flags.keys());

    public setLang(lang: TuiLanguageName): void {
        this.language.setValue(lang);
        this.switcher.setLanguage(lang);
        this.open = false;
    }
}

function capitalize(value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
