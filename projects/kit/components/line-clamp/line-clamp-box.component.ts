import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';
import {TUI_HINT_PROVIDERS, tuiFadeIn, TuiHintComponent} from '@taiga-ui/core';

@Component({
    selector: 'tui-line-clamp-box',
    template: `
        <ng-container *polymorpheusOutlet="content as text">{{ text }}</ng-container>
    `,
    styleUrls: ['./line-clamp-box.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_HINT_PROVIDERS,
    animations: [tuiFadeIn],
})
export class TuiLineClampBoxComponent extends TuiHintComponent {
    @HostBinding('style.min-width.px')
    public get width(): number {
        return this.accessor.getClientRect().width;
    }
}
