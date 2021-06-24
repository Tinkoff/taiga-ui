import {APP_BASE_HREF} from '@angular/common';
import {ChangeDetectorRef, Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {TUI_IS_ANDROID, TUI_IS_IOS, tuiPure, watch} from '@taiga-ui/cdk';
import {VERSION} from '@taiga-ui/core';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {changeDetection} from '../../change-detection-strategy';

// @dynamic
@Component({
    selector: 'app',
    templateUrl: 'app.template.html',
    styleUrls: ['app.style.less'],
    changeDetection,
})
export class AppComponent {
    landing = false;

    readonly version = VERSION;

    constructor(
        @Inject(TUI_IS_ANDROID) readonly isAndroid: boolean,
        @Inject(TUI_IS_IOS) readonly isIos: boolean,
        @Inject(Router) router: Router,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(LOCAL_STORAGE) localStorage: Storage,
        @Inject(APP_BASE_HREF) baseHref: string,
    ) {
        router.events
            .pipe(
                map(() => router.routerState.snapshot.url === '/'),
                distinctUntilChanged(),
                watch(changeDetectorRef),
            )
            .subscribe(landing => {
                this.landing = landing;
            });

        const env = localStorage.getItem('env');

        if (env) {
            router.navigateByUrl(env.replace(baseHref, ''));
        }
    }

    @tuiPure
    get isChristmas(): boolean {
        const today = new Date();

        return (
            (!today.getMonth() && today.getDate() < 14) ||
            (today.getMonth() === 11 && today.getDate() > 25)
        );
    }
}
