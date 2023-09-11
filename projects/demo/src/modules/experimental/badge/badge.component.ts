import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {RawLoaderContent, TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeS, TuiSizeXL} from '@taiga-ui/core';
import {TuiBadgeAppearance} from '@taiga-ui/experimental';

@Component({
    selector: 'example-badge',
    templateUrl: './badge.template.html',
    changeDetection,
})
export class ExampleTuiBadgeComponent {
    readonly exampleModule: RawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: RawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
    };

    readonly appearanceVariants: TuiBadgeAppearance[] = [
        'accent',
        'default',
        'primary',
        'custom',
        'success',
        'error',
        'warning',
        'info',
        'neutral',
        'dark-text',
    ];

    appearance = this.appearanceVariants[0];

    values: {[key: string]: number | string} = {
        Taiga: 'Taiga',
        'Very long text': 'Very long text',
        '5': 5,
        '99': 99,
        '100': 100,
        '"100"': '100',
        '""': '',
    };

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeXL> = ['s', 'm', 'l', 'xl'];

    size: TuiSizeS | TuiSizeXL = this.sizeVariants[1];

    valueVariants: ReadonlyArray<number | string> = Object.keys(this.values);

    value: number | string = 'Taiga';

    hoverable = false;

    contentTypeVariants = ['empty', 'icon', 'image'];
    contentType = this.contentTypeVariants[0];
}
