import type {DoCheck, Signal} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Directive,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {
    TUI_APPEARANCE_OPTIONS,
    tuiAppearanceState,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {
    TUI_HINT_OPTIONS,
    TuiHintDescribe,
    TuiHintDirective,
    TuiHintHover,
} from '@taiga-ui/core/directives/hint';
import {TUI_ICON_START} from '@taiga-ui/core/tokens';
import {map} from 'rxjs';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./tooltip.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-tooltip',
    },
})
class TuiTooltipStyles {}

@Directive({
    standalone: true,
    selector: 'tui-icon[tuiTooltip]',
    providers: [
        {
            provide: TUI_APPEARANCE_OPTIONS,
            useValue: {appearance: 'icon'},
        },
        {
            provide: TUI_ICON_START,
            useFactory: () => inject(TUI_HINT_OPTIONS).icon,
        },
    ],
    hostDirectives: [
        TuiWithAppearance,
        {
            directive: TuiHintDescribe,
            inputs: ['tuiHintDescribe'],
        },
        {
            directive: TuiHintDirective,
            inputs: ['tuiHint: tuiTooltip', 'tuiHintAppearance', 'tuiHintContext'],
        },
    ],
    host: {
        tuiTooltip: '',
        '(mousedown)': 'stopOnMobile($event)',
    },
})
export class TuiTooltip implements DoCheck {
    private readonly textfield = inject(TuiTextfieldComponent, {optional: true});
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly describe = inject(TuiHintDescribe);
    private readonly driver = inject(TuiHintHover);

    protected readonly nothing = tuiWithStyles(TuiTooltipStyles);
    protected readonly state: Signal<unknown> = tuiAppearanceState(
        toSignal(
            inject(TuiHintHover).pipe(
                map((hover) => (hover ? 'hover' : null)),
                tuiWatch(inject(ChangeDetectorRef)),
            ),
            {initialValue: null},
        ),
    );

    public ngDoCheck(): void {
        if (this.textfield?.id) {
            this.describe.tuiHintDescribe = this.textfield.id;
        }
    }

    protected stopOnMobile(event: MouseEvent): void {
        if (this.isMobile) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.driver.toggle();
    }
}
