import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {TuiHorizontalDirection} from '@taiga-ui/core';

@Component({
    selector: 'tui-avatar-stack',
    template: '<ng-content></ng-content>',
    styleUrls: ['./avatar-stack.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAvatarStackComponent {
    @Input()
    @HostBinding('attr.data-direction')
    direction: TuiHorizontalDirection = 'right';
}
