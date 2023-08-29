import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, tuiDocExampleOptionsProvider} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-tabs',
    templateUrl: './tabs.template.html',
    changeDetection,
    providers: [tuiDocExampleOptionsProvider({fullsize: true})],
})
export class ExampleTuiTabsComponent {
    buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4'];

    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
    };

    readonly example4: TuiDocExample = {
        HTML: import('./examples/4/index.html?raw'),
        TypeScript: import('./examples/4/index.ts?raw'),
    };

    readonly example5: TuiDocExample = {
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
        TypeScript: import('./examples/5/index.ts?raw'),
    };

    readonly example6: TuiDocExample = {
        HTML: import('./examples/6/index.html?raw'),
        LESS: import('./examples/6/index.less?raw'),
        TypeScript: import('./examples/6/index.ts?raw'),
    };

    readonly example7: TuiDocExample = {
        HTML: import('./examples/7/index.html?raw'),
        TypeScript: import('./examples/7/index.ts?raw'),
    };

    readonly example8: TuiDocExample = {
        HTML: import('./examples/8/index.html?raw'),
        LESS: import('./examples/8/index.less?raw'),
        TypeScript: import('./examples/8/index.ts?raw'),
    };

    readonly example9: TuiDocExample = {
        HTML: import('./examples/9/index.html?raw'),
        LESS: import('./examples/9/index.less?raw'),
        TypeScript: import('./examples/9/index.ts?raw'),
    };

    readonly moreContentVariants = ['', 'And more'];

    moreContent = this.moreContentVariants[0];

    underline = true;

    activeItemIndex = 0;

    itemsLimit = 999;
}
