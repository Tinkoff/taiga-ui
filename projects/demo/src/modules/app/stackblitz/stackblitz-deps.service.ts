import {Inject, Injectable} from '@angular/core';
import {environment} from '@demo/environments/environment';
import {LOCATION} from '@ng-web-apis/common';
import {TUI_VERSION} from '@taiga-ui/cdk';

@Injectable({providedIn: `root`})
export class StackblitzDepsService {
    constructor(@Inject(LOCATION) private readonly location: Location) {}

    async get(): Promise<Record<string, string>> {
        return {
            ...(await this.getAngularPackages()),
            ...this.getTaigaPackages(),
            ...(await this.getCommonPackages()),
        };
    }

    private async getAngularPackages(): Promise<Record<string, string>> {
        const {dependencies} = await import(`@demo/root-package`);
        const ngVersion = `${dependencies[`@angular/cdk`]?.split(`.`)?.[0] ?? ``}.x.x`;

        return {
            '@angular/animations': ngVersion,
            '@angular/cdk': ngVersion,
            '@angular/common': ngVersion,
            '@angular/compiler': ngVersion,
            '@angular/core': ngVersion,
            '@angular/forms': ngVersion,
            '@angular/localize': ngVersion,
            '@angular/platform-browser': ngVersion,
            '@angular/platform-browser-dynamic': ngVersion,
            '@angular/router': ngVersion,
        };
    }

    private getTaigaPackages(): Record<string, string> {
        const version =
            this.location.pathname.startsWith(`/next/`) ||
            this.location.host.endsWith(`web.app`) ||
            !environment.production
                ? `dev`
                : `${TUI_VERSION.split(`.`)[0]}.x.x`;

        return {
            '@taiga-ui/addon-charts': version,
            '@taiga-ui/addon-commerce': version,
            '@taiga-ui/addon-mobile': version,
            '@taiga-ui/addon-preview': version,
            '@taiga-ui/addon-table': version,
            '@taiga-ui/addon-tablebars': version,
            '@taiga-ui/cdk': version,
            '@taiga-ui/core': version,
            '@taiga-ui/i18n': version,
            '@taiga-ui/icons': version,
            '@taiga-ui/kit': version,
            '@taiga-ui/layout': version,
            '@taiga-ui/styles': version,
        };
    }

    private async getCommonPackages(): Promise<Record<string, string>> {
        const {dependencies: demoDeps} = await import(`@taiga-ui/demo/package.json`);
        const {dependencies: cdkDeps} = await import(`@taiga-ui/cdk/package.json`);
        const {dependencies: kitDeps} = await import(`@taiga-ui/kit/package.json`);
        const {dependencies: rootDeps, devDependencies: rootDevDeps} = await import(
            `@demo/root-package`
        );

        return {
            '@maskito/angular': kitDeps[`@maskito/angular`],
            '@maskito/core': kitDeps[`@maskito/core`],
            '@maskito/kit': kitDeps[`@maskito/kit`],
            '@ng-web-apis/common': cdkDeps[`@ng-web-apis/common`],
            '@ng-web-apis/intersection-observer':
                kitDeps[`@ng-web-apis/intersection-observer`],
            '@ng-web-apis/mutation-observer': cdkDeps[`@ng-web-apis/mutation-observer`],
            '@ng-web-apis/resize-observer': cdkDeps[`@ng-web-apis/resize-observer`],
            '@tinkoff/ng-dompurify': demoDeps[`@tinkoff/ng-dompurify`],
            '@tinkoff/ng-event-plugins': cdkDeps[`@tinkoff/ng-event-plugins`],
            '@tinkoff/ng-polymorpheus': cdkDeps[`@tinkoff/ng-polymorpheus`],
            dompurify: demoDeps.dompurify,
            rxjs: rootDeps.rxjs,
            'text-mask-core': kitDeps[`text-mask-core`],
            typescript: rootDevDeps.typescript,
            'zone.js': rootDeps[`zone.js`],
        };
    }
}
