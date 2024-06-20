import {Directive, inject, Output} from '@angular/core';

import {TuiHoveredService} from './hovered.service';

@Directive({
    standalone: true,
    selector: '[tuiHoveredChange]',
    providers: [TuiHoveredService],
})
export class TuiHovered {
    @Output()
    public readonly tuiHoveredChange = inject(TuiHoveredService);
}
