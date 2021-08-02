import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as exampleLESS} from '!!raw-loader!./examples/1/index.less';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';

import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef} from '@angular/core';
import {
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MIN_HEIGHT,
    TuiDropdownWidthT,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {ExampleTuiDropdown} from '../../components/abstract/dropdown-controller-documentation/dropdown-controller-documentation.component';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-dropdown-context',
    templateUrl: './dropdown-context.component.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiDropdownContextComponent),
        },
    ],
})
export class ExampleTuiDropdownContextComponent implements ExampleTuiDropdown {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly exampleBasic: FrontEndExample = {
        HTML: example1Html,
        LESS: exampleLESS,
    };

    readonly exampleContextMenu: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly exampleReportMistakeForm: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
    };

    readonly dropdownAlignVariants: ReadonlyArray<TuiHorizontalDirection> = [
        'left',
        'right',
    ];
    readonly dropdownDirectionVariants: ReadonlyArray<TuiVerticalDirection> = [
        'bottom',
        'top',
    ];
    readonly dropdownLimitWidthVariants: ReadonlyArray<TuiDropdownWidthT> = [
        'min',
        'auto',
        'fixed',
    ];

    dropdownAlign = this.dropdownAlignVariants[0];
    dropdownDirection: TuiVerticalDirection | null = null;
    dropdownMinHeight = DEFAULT_MIN_HEIGHT;
    dropdownMaxHeight = DEFAULT_MAX_HEIGHT;
    dropdownLimitWidth: TuiDropdownWidthT = this.dropdownLimitWidthVariants[0];
}
