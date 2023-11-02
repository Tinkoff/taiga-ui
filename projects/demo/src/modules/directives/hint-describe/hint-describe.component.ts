import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, TuiDocumentationProperty} from '@taiga-ui/addon-doc';

import {AbstractExampleTuiHint} from '../../components/abstract/hint';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-hint-describe',
    templateUrl: './hint-describe.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiHintDescribeComponent),
        },
    ],
})
export class ExampleTuiHintDescribeComponent extends AbstractExampleTuiHint {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    id = '';

    readonly hintBaseProperties: Record<string, TuiDocumentationProperty> = {
        placeholder: {
            type: null,
            value: "My id is 'qwerty'",
        },
        tuiHint: {
            type: null,
            value: 'I will be visible upon keyboard focus',
        },
        tuiHintDescribe: {
            type: null,
            value: 'qwerty',
        },
    };
}
