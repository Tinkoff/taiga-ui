import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';

import {changeDetection} from '#/demo/emulate/change-detection';
import {TuiExamplePipe, TuiSetupComponent} from '#/demo/utils';

import {TuiNumberFormatExample1} from './examples/1';

@Component({
    standalone: true,
    selector: 'example-tui-number-format',
    imports: [
        TuiExamplePipe,
        TuiSetupComponent,
        AsyncPipe,
        TuiAddonDocModule,
        TuiNumberFormatExample1,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleTuiNumberFormatComponent {}
