import {TuiWithOptionalMinMaxWithValue} from '@taiga-ui/core';

/** @internal */
export interface WithDateMaskPipeConfig<T, G>
    extends TuiWithOptionalMinMaxWithValue<T, G> {
    fillerLength: number;
    rangeFillerLength?: number;
}
