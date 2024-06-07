import {Directive, Optional, SkipSelf} from '@angular/core';
import type {TuiPoint} from '@taiga-ui/core';
import {TuiPositionAccessor} from '@taiga-ui/core';

@Directive({
    selector: '[tuiAccessorProxy]',
    providers: [
        {
            provide: TuiPositionAccessor,
            multi: true,
            deps: [
                [new Optional(), new SkipSelf(), TuiAccessorProxyDirective],
                TuiAccessorProxyDirective,
            ],
            useFactory: (
                accessor: TuiPositionAccessor | null,
                fallback: TuiPositionAccessor,
            ) => accessor || fallback,
        },
    ],
})
export class TuiAccessorProxyDirective extends TuiPositionAccessor {
    public readonly type = 'dummy';

    public getPosition(): TuiPoint {
        return [0, 0];
    }
}
