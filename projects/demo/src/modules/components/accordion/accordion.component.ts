import example1Html from '!!raw-loader!./examples/1/index.html';
import example1Scss from '!!raw-loader!./examples/1/index.scss';
import example1Ts from '!!raw-loader!./examples/1/index.ts';
import example2Html from '!!raw-loader!./examples/2/index.html';
import example2Scss from '!!raw-loader!./examples/2/index.scss';
import example2Ts from '!!raw-loader!./examples/2/index.ts';
import example3Html from '!!raw-loader!./examples/3/index.html';
import example3Scss from '!!raw-loader!./examples/3/index.scss';
import example3Ts from '!!raw-loader!./examples/3/index.ts';
import exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';
import {DOCUMENT} from '@angular/common';
import {Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {tuiCustomEvent} from '@taiga-ui/cdk';
import {TuiSizeS, TUI_EXPAND_LOADED} from '@taiga-ui/core';
import {TuiBorders} from '@taiga-ui/kit';

import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-accordion',
    templateUrl: './accordion.template.html',
    changeDetection,
})
export class ExampleTuiAccordionComponent {
    async = false;
    closeOthers = true;
    disabled = false;
    noPadding = false;
    open = false;
    rounded = true;
    showArrow = true;

    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        SCSS: example1Scss,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        SCSS: example2Scss,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        SCSS: example3Scss,
    };

    readonly bordersVariants: ReadonlyArray<TuiBorders | null> = [
        TuiBorders.All,
        TuiBorders.TopBottom,
    ];

    borders: TuiBorders | null = this.bordersVariants[0];

    readonly sizeVariants: ReadonlyArray<TuiSizeS> = ['s', 'm'];

    size: TuiSizeS = this.sizeVariants[1];

    @ViewChild('content')
    content?: ElementRef;

    constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}

    onOpenChange(open: boolean) {
        this.open = open;

        if (!this.async || !open) {
            return;
        }

        setTimeout(() => {
            const event = tuiCustomEvent(
                TUI_EXPAND_LOADED,
                {bubbles: true},
                this.documentRef,
            );

            if (this.content) {
                this.content.nativeElement.dispatchEvent(event);
            }
        }, 3000);
    }
}
