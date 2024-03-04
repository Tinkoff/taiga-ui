import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDocExample} from '@taiga-ui/addon-doc';

import {AbstractExampleTuiHint} from '../../components/abstract/hint';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-hint-pointer',
    templateUrl: './hint-pointer.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiHintPointerComponent),
        },
    ],
})
export class ExampleTuiHintPointerComponent extends AbstractExampleTuiHint {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected showDelay = 0;
    protected hideDelay = 0;
}
