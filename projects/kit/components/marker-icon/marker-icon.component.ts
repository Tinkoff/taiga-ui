import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';
import {TuiMarkerIconMode} from '@taiga-ui/kit/types';

@Component({
    selector: 'tui-marker-icon, a[tuiMarkerIcon], button[tuiMarkerIcon]',
    templateUrl: './marker-icon.template.html',
    styleUrls: ['./marker-icon.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiMarkerIconComponent {
    protected readonly mode$ = inject(TUI_MODE);

    @Input()
    @HostBinding('attr.data-marker-mode')
    public mode: TuiMarkerIconMode | null = null;

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeXXL | TuiSizeXXS = 'm';

    @Input()
    public src = '';
}
