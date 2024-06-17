import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {
    TuiButton,
    TuiDropdownDirective,
    TuiDropdownHoverDirective,
    TuiDropdownOptionsDirective,
} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/abstract-props-accessor';
import {AbstractExampleTuiDropdown} from '../../components/abstract/dropdown';
import {DropdownDocumentationComponent} from '../../components/abstract/dropdown-documentation';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiDropdownHoverDirective,
        TuiDropdownDirective,
        TuiDropdownOptionsDirective,
        TuiButton,
        DropdownDocumentationComponent,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => PageComponent),
        },
    ],
})
export default class PageComponent extends AbstractExampleTuiDropdown {
    protected showDelay = 200;

    protected hideDelay = 500;
}
