import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';
import {TuiMarkerIconMode} from '@taiga-ui/kit';

@Component({
    selector: 'example-tui-marker-icon',
    templateUrl: './marker-icon.template.html',
    styleUrls: ['./marker-icon.style.less'],
    changeDetection,
})
export class ExampleTuiMarkerIconComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
    };

    readonly icons = ['tuiIconPaperclipLarge', 'tuiIconPhoneLarge', 'tuiIconStarLarge'];

    selectedIcon = this.icons[0];

    readonly sizeVariants: ReadonlyArray<TuiSizeXXL | TuiSizeXXS> = [
        'xxs',
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
    ];

    size = this.sizeVariants[2];

    readonly modeVariants: readonly TuiMarkerIconMode[] = [
        'link',
        'primary',
        'warning',
        'white',
        'secondary',
        'success',
        'error',
    ];

    mode: TuiMarkerIconMode | null = null;
}
