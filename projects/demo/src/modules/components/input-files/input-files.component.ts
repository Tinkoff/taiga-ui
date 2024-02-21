import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeL} from '@taiga-ui/core';
import {TuiFileLike, TuiInputFilesOptions} from '@taiga-ui/kit';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-files',
    templateUrl: './input-files.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputFilesComponent),
        },
    ],
})
export class ExampleTuiInputFilesComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
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
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
    };

    readonly control = new FormControl<TuiFileLike | null>(null);
    readonly multipleControl = new FormControl<TuiFileLike[] | null>(null);

    multiple = true;
    showSize = true;
    showDelete: boolean | 'always' = true;
    expanded = false;
    maxFilesCount = 3;
    accept = '';
    acceptVariants = ['image/*', 'application/pdf', 'image/*,application/pdf'];
    capture: TuiInputFilesOptions['capture'] = null;
    captureVariants: Array<TuiInputFilesOptions['capture']> = [
        null,
        'user',
        'environment',
    ];

    readonly showDeleteVariants: Array<boolean | 'always'> = [true, false, 'always'];
    override readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    override size = this.sizeVariants[0];

    removeFile(file: TuiFileLike): void {
        this.multipleControl.setValue(
            this.multipleControl.value?.filter(current => current.name !== file.name) ||
                null,
        );
    }

    multipleChange(multiple: boolean): void {
        this.control.setValue(null);
        this.multiple = multiple;
    }
}
