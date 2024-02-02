import {ExistingProvider, FactoryProvider, Optional, SkipSelf, Type} from '@angular/core';
import {TuiPoint} from '@taiga-ui/core/types';

export abstract class TuiPositionAccessor {
    abstract readonly type: string;
    abstract getPosition(rect: DOMRect): TuiPoint;
}

export function tuiPositionAccessorFor(
    type: string,
    fallback: Type<TuiPositionAccessor>,
): FactoryProvider {
    return {
        provide: TuiPositionAccessor,
        deps: [[new SkipSelf(), new Optional(), TuiPositionAccessor], fallback],
        useFactory: (
            accessors: readonly TuiPositionAccessor[] | null,
            accessor: TuiPositionAccessor,
        ) => accessors?.find(accessor => accessor.type === type) || accessor,
    };
}

export function tuiAsPositionAccessor(
    useExisting: Type<TuiPositionAccessor>,
): ExistingProvider {
    return {
        provide: TuiPositionAccessor,
        multi: true,
        useExisting,
    };
}
