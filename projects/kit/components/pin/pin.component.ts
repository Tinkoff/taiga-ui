import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

@Component({
    standalone: true,
    selector: 'tui-pin,[tuiPin]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./pin.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPin {
    @Input()
    @HostBinding('class._open')
    public open = false;
}
