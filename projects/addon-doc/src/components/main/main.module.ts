import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    TuiAlertModule,
    TuiDialogModule,
    TuiRootModule,
    TuiThemeNightModule,
} from '@taiga-ui/core';
import {TuiToggleModule} from '@taiga-ui/kit';

import {TuiDocHeaderModule} from '../../internal/header/header.module';
import {TuiLanguageSwitcherModule} from '../language-switcher/language-switcher.module';
import {TuiDocNavigationModule} from '../navigation/navigation.module';
import {TuiDocMainComponent} from './main.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        TuiToggleModule,
        TuiThemeNightModule,
        TuiDocHeaderModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        TuiDocNavigationModule,
        TuiLanguageSwitcherModule,
    ],
    declarations: [TuiDocMainComponent],
    exports: [TuiDocMainComponent],
})
export class TuiDocMainModule {}
