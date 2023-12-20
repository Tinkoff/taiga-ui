import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiDocMainModule, TuiLanguageSwitcherModule} from '@taiga-ui/addon-doc';
import {
    TuiMobileDialogModule,
    TuiSheetDialogModule,
    TuiSheetModule,
} from '@taiga-ui/addon-mobile';
import {TuiPreviewModule} from '@taiga-ui/addon-preview';
import {TuiTableBarsHostModule} from '@taiga-ui/addon-tablebars';
import {
    TuiAlertModule,
    TuiDialogModule,
    TuiLinkModule,
    TuiModeModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiPdfViewerModule, TuiPushModule} from '@taiga-ui/kit';

import {CustomHostModule} from '../customization/portals/examples/1/portal/custom-host.module';
import {AppComponent} from './app.component';
import {APP_PROVIDERS} from './app.providers';
import {AppRoutingModule} from './app.routes';
import {TuiAutoGeneratedCodeHintsModule} from './autogenerated-code-hints/autogenerated-code-hints.module';
import {GettingStartedModule} from './getting-started/getting-started.module';
import {HomeModule} from './home/home.module';
import {LandingModule} from './landing/landing.module';
import {LogoModule} from './logo/logo.module';
import {VersionManagerModule} from './version-manager/version-manager.module';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({appId: 'tui-demo'}),
        AppRoutingModule,
        BrowserAnimationsModule,
        TuiDocMainModule,
        TuiTableBarsHostModule,
        TuiDialogModule,
        TuiPreviewModule,
        TuiPdfViewerModule,
        TuiSheetModule,
        TuiSheetDialogModule,
        TuiAlertModule,
        TuiPushModule,
        TuiMobileDialogModule,
        TuiModeModule,
        TuiLinkModule,
        GettingStartedModule,
        HomeModule,
        LandingModule,
        LogoModule,
        VersionManagerModule,
        TuiLanguageSwitcherModule,
        CustomHostModule,
        HttpClientModule,
        TuiTextfieldControllerModule,
        TuiAutoGeneratedCodeHintsModule,
    ],
    declarations: [AppComponent],
    providers: APP_PROVIDERS,
    bootstrap: [AppComponent],
})
export class AppBrowserModule {}
