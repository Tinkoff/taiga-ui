import type {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import type {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/cdk';
import type {TuiBrightness, TuiMedia} from '@taiga-ui/core';
import {
    TUI_ANIMATION_OPTIONS,
    TUI_CLOSE_WORD,
    TUI_MEDIA,
    tuiIsMobile,
    tuiSlideInTop,
} from '@taiga-ui/core';
import type {Observable} from 'rxjs';

import type {TuiTableBar} from '../../classes/table-bar';
import {TuiTableBarsService} from '../../services/table-bars.service';

// TODO: Accessibility
@Component({
    selector: 'tui-table-bars-host',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './table-bars-host.template.html',
    styleUrls: ['./table-bars-host.style.less'],
    animations: [tuiSlideInTop, TUI_PARENT_ANIMATION],
})
export class TuiTableBarsHostComponent {
    readonly animation = {
        value: '',
        ...this.options,
    } as const;

    constructor(
        @Inject(TuiTableBarsService) readonly service: TuiTableBarsService,
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(TUI_MEDIA) private readonly media: TuiMedia,
        @Inject(WINDOW) private readonly windowRef: Window,
    ) {}

    get isMobile(): boolean {
        return tuiIsMobile(this.windowRef, this.media);
    }

    get closeIcon(): string {
        return this.isMobile ? 'tuiIconX' : 'tuiIconXLarge';
    }

    getMode(mode: TuiBrightness): TuiBrightness | null {
        return mode === 'onLight' ? 'onDark' : null;
    }

    onCloseClick(itemToRemove: TuiTableBar): void {
        itemToRemove.close();
    }

    getItemContext(item: TuiTableBar): TuiContextWithImplicit<() => void> {
        return {
            $implicit: () => item.close(),
        };
    }
}
