import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

@Component({
    selector: 'tui-compass',
    template: '',
    styleUrls: ['./compass.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCompassComponent {
    @Input()
    @HostBinding('style.--t-degrees.deg')
    degrees = NaN;
}
