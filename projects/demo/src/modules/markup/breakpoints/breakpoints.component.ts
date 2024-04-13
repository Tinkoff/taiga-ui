import {Component} from '@angular/core';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import fileWithBreakpoints from '@taiga-ui/core/styles/variables/media.less?raw';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

/**
 * Match all code comments.
 *
 * @example
 * ```less
 * /* code comment (and multiline code comments) * /
 * // code comment
 * ```
 */
// eslint-disable-next-line unicorn/no-unsafe-regex
const CODE_COMMENTS = /(\/\*([^*]|(\*+[^*/]))*\*+\/)|(\/\/.*)/g;

function parseBreakpoints(file: string): Array<{name: string; value: string}> {
    return file
        .replaceAll(CODE_COMMENTS, '')
        .split(';')
        .map(line => line.trim())
        .filter(Boolean)
        .map(line => {
            const [name, ...value] = line.split(':');

            return {name, value: value.join(':').replaceAll(/[~'"]/g, '').trim()};
        });
}

@Component({
    selector: 'css-breakpoints',
    templateUrl: './breakpoints.template.html',
    styleUrls: ['./breakpoints.style.less'],
    encapsulation,
    changeDetection,
})
export class BreakpointsComponent {
    protected readonly breakpoints = parseBreakpoints(fileWithBreakpoints);
    protected readonly columnsNames = Object.keys(this.breakpoints[0]);

    protected readonly importTaigaUILocalLess = import(
        './examples/import/import-taiga-ui-local-less.md?raw'
    );

    protected readonly exampleBaseUsage = import(
        './examples/import/base-breakpoint-usage.md?raw'
    );

    protected readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
    };
}
