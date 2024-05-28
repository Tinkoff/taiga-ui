import {Directive, inject} from '@angular/core';
import type {TuiPoint, TuiRectAccessor} from '@taiga-ui/core';
import {
    tuiAsPositionAccessor,
    TuiHintDirective,
    TuiPositionAccessor,
} from '@taiga-ui/core';

@Directive({
    standalone: true,
    selector: '[tuiLineClampPosition]',
    providers: [tuiAsPositionAccessor(TuiLineClampPositionDirective)],
})
export class TuiLineClampPositionDirective extends TuiPositionAccessor {
    private readonly accessor = inject<TuiRectAccessor>(TuiHintDirective);
    public readonly type = 'hint';

    public getPosition(): TuiPoint {
        const {top, left} = this.accessor.getClientRect();

        return [top, left];
    }
}
