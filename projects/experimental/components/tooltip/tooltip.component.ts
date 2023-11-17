import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    Inject,
    Input,
    Self,
    ViewChild,
} from '@angular/core';
import {TUI_PLATFORM, TuiDestroyService, tuiIsString, TuiPlatform} from '@taiga-ui/cdk';
import {
    TUI_HINT_OPTIONS,
    TuiHintHoverDirective,
    TuiHintOptions,
    TuiHintOptionsDirective,
} from '@taiga-ui/core';
import {MODE_PROVIDER} from '@taiga-ui/core';
import {TUI_MODE} from '@taiga-ui/core';
import {TuiBrightness} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {TUI_TOOLTIP_OPTIONS, TuiTooltipOptions} from './tooltip.options';

@Component({
    selector: 'tui-tooltip',
    templateUrl: './tooltip.template.html',
    styleUrls: ['./tooltip.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, MODE_PROVIDER],
    inputs: ['content', 'direction', 'appearance', 'showDelay', 'hideDelay'],
})
export class TuiTooltipComponent<C = any> extends TuiHintOptionsDirective {
    @ViewChild(TuiHintHoverDirective)
    readonly driver$?: TuiHintHoverDirective;

    @Input()
    describeId = '';

    @Input()
    context?: C;

    mode: TuiBrightness | null = null;

    constructor(
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TUI_MODE) mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_HINT_OPTIONS) options: TuiHintOptions,
        @Inject(TUI_TOOLTIP_OPTIONS) readonly tooltipOptions: TuiTooltipOptions,
        @Inject(TUI_PLATFORM) private readonly platform: TuiPlatform,
    ) {
        super(options);

        mode$.pipe(takeUntil(destroy$)).subscribe(mode => {
            this.mode = mode;
        });
    }

    get computedAppearance(): string {
        return this.appearance || this.mode || '';
    }

    get tooltipIcon(): PolymorpheusContent {
        const {icons} = this.tooltipOptions;

        return tuiIsString(icons) ? icons : icons[this.platform];
    }

    @HostListener('mousedown', ['$event'])
    stopOnMobile(event: MouseEvent): void {
        if (this.platform !== 'web') {
            event.preventDefault();
            event.stopPropagation();
        }

        this.driver$?.toggle();
    }
}
