import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiDocExample,
    tuiDocExampleOptionsProvider,
    TuiRawLoaderContent,
} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-cell',
    templateUrl: './cell.template.html',
    styleUrls: ['./cell.styles.less'],
    providers: [tuiDocExampleOptionsProvider({fullsize: true})],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class ExampleTuiCellComponent {
    readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
    };

    readonly example4: TuiDocExample = {
        HTML: import('./examples/4/index.html?raw'),
    };

    readonly example5: TuiDocExample = {
        HTML: import('./examples/5/index.html?raw'),
    };

    readonly example6: TuiDocExample = {
        HTML: import('./examples/6/index.html?raw'),
    };
}
