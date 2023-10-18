import {APP_BASE_HREF, DOCUMENT} from '@angular/common';
import {
    Component,
    Inject,
    InjectFlags,
    Injector,
    OnInit,
    Self,
    ViewEncapsulation,
} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {TUI_DOC_PAGE_LOADED} from '@taiga-ui/addon-doc';
import {TUI_IS_E2E, TuiDestroyService, TuiResizeService} from '@taiga-ui/cdk';
import {Metrika} from 'ng-yandex-metrika';
import {Observable} from 'rxjs';
import {distinctUntilChanged, filter, map, takeUntil} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import {AbstractDemoComponent, DEMO_PAGE_LOADED_PROVIDER} from './abstract.app';
import {
    TUI_SELECTED_VERSION_META,
    TUI_VERSION_MANAGER_PROVIDERS,
} from './version-manager/version-manager.providers';
import {TuiVersionMeta} from './version-manager/versions.constants';

@Component({
    selector: 'app',
    templateUrl: './app.template.html',
    styleUrls: ['./app.style.less'],
    providers: [
        TuiResizeService,
        TuiDestroyService,
        DEMO_PAGE_LOADED_PROVIDER,
        TUI_VERSION_MANAGER_PROVIDERS,
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class AppComponent extends AbstractDemoComponent implements OnInit {
    readonly isLanding$ = this.router.events.pipe(
        map(() => this.router.routerState.snapshot.url === '/'),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(TUI_IS_E2E) isE2E: boolean,
        @Inject(TUI_DOC_PAGE_LOADED) pageLoaded$: Observable<boolean>,
        @Inject(TUI_SELECTED_VERSION_META) selectedVersion: TuiVersionMeta | null,
        @Inject(Router) protected readonly router: Router,
        @Inject(LOCAL_STORAGE) protected readonly storage: Storage,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: Observable<void>,
        @Inject(Injector) private readonly injector: Injector,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(APP_BASE_HREF) private readonly appBaseHref: string,
    ) {
        super(isE2E, pageLoaded$, selectedVersion);
    }

    override async ngOnInit(): Promise<void> {
        await super.ngOnInit();
        this.enableYandexMetrika();
        this.setBaseHrefIfNotPresent();
    }

    private enableYandexMetrika(): void {
        if (ngDevMode && (!environment.production || this.isE2E)) {
            console.info('Yandex.Metrika disabled for non-production mode.');

            return;
        }

        try {
            const metrika = this.injector.get(Metrika, null, InjectFlags.Optional);

            this.router.events
                .pipe(
                    filter(
                        (event): event is NavigationEnd => event instanceof NavigationEnd,
                    ),
                    takeUntil(this.destroy$),
                )
                .subscribe(event => {
                    // eslint-disable-next-line
                    metrika?.hit(event.urlAfterRedirects, {referer: event.url});
                });
        } catch {
            ngDevMode && console.error('You forgot to import MetrikaModule!');
        }
    }

    /**
     * @description:
     * By default, on webcontainer.io will not be provided base[href] in index.html,
     * we use fallback for correct processing of routing
     */
    private setBaseHrefIfNotPresent(): void {
        if (this.doc.getElementsByTagName('base')[0].href) {
            return;
        }

        const base = this.doc.createElement('base');

        base.href = this.appBaseHref;
        this.doc.getElementsByTagName('head')[0].appendChild(base);
    }
}
