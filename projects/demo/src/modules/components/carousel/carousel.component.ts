import {Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';

import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-carousel',
    templateUrl: './carousel.template.html',
    styleUrls: ['./carousel.style.less'],
    changeDetection,
})
export class ExampleTuiCarouselComponent {
    duration = 0;
    index = 0;
    itemsCount = 1;

    readonly exampleImportModule = import(
        '!!raw-loader!./examples/import/import-module.txt'
    );

    readonly exampleInsertTemplate = import(
        '!!raw-loader!./examples/import/insert-template.txt'
    );

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/4/index.ts'),
        HTML: import('!!raw-loader!./examples/4/index.html'),
        LESS: import('!!raw-loader!./examples/4/index.less'),
    };
}
