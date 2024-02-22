import {Component, inject} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';

@Component({
    selector: 'example-avatar',
    templateUrl: './avatar.template.html',
    changeDetection,
})
export class ExampleTuiAvatarComponent {
    private readonly sanitizer = inject(DomSanitizer);

    protected readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    protected readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
    };

    protected readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
        LESS: import('./examples/6/index.less?raw'),
    };

    protected readonly sizes: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
    ];

    protected size = this.sizes[3];

    protected readonly srcVariants: ReadonlyArray<SafeResourceUrl | string> = [
        'MW',
        'https://avatars.githubusercontent.com/u/11832552',
        'https://taiga-ui.dev/assets/images/test-not-found.png',
        'tuiIconUserLarge',
        this.sanitizer.bypassSecurityTrustResourceUrl(
            'https://avatars.githubusercontent.com/u/10106368',
        ),
    ];

    protected src = this.srcVariants[0];

    protected round = true;
}
