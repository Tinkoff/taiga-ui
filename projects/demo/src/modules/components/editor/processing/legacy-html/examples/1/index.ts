import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    defaultEditorExtensions,
    TUI_EDITOR_EXTENSIONS,
    TUI_EDITOR_VALUE_TRANSFORMER,
} from '@taiga-ui/addon-editor';

import {ExampleEditorConvertLegacyHtmlTransformer} from './transformer';

@Component({
    selector: 'tui-editor-legacy-html-example-1',
    templateUrl: './index.html',
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
        {
            provide: TUI_EDITOR_VALUE_TRANSFORMER,
            useClass: ExampleEditorConvertLegacyHtmlTransformer,
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorLegacyHtmlExample1 {
    control = new FormControl(
        // Legacy HTML markup from DB
        'WYSIWYG (What you see is what you get) — Rich Text Editor for using with Angular forms.<p><font size="6">Heading</font></p><font size="4">Lorem ipsum dolor sit amet <font color="#ff78a7">consectetur adipiscing elit</font>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span style="background-color: rgb(163, 129, 255);">Ut enim </span></font><blockquote>ad minim veniam, <u>quis nostrud exercitation</u> <b>ullamco</b>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</blockquote><p style="text-align: right;">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
        Validators.required,
    );
}
