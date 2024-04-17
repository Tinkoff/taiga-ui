import {Injectable} from '@angular/core';
import {TuiDay, TuiDayRange, TuiValueTransformer} from '@taiga-ui/cdk';

class ExampleDateRangeTransformer extends TuiValueTransformer<
    TuiDayRange | null,
    [Date, Date] | null
> {
    constructor(
        private readonly dateTransformer: TuiValueTransformer<TuiDay | null, Date | null>,
    ) {
        super();
    }

    public fromControlValue(controlValue: [Date, Date] | null): TuiDayRange | null {
        const [transformedFrom, transformedTo] = controlValue || [null, null];
        const from =
            transformedFrom && this.dateTransformer.fromControlValue(transformedFrom);
        const to = transformedTo && this.dateTransformer.fromControlValue(transformedTo);

        return from && to && new TuiDayRange(from, to);
    }

    public toControlValue(componentValue: TuiDayRange | null): [Date, Date] | null {
        const from =
            componentValue && this.dateTransformer.toControlValue(componentValue.from);
        const to =
            componentValue && this.dateTransformer.toControlValue(componentValue.to);

        return from && to && [from, to];
    }
}

@Injectable()
export class ExampleDateTransformer extends TuiValueTransformer<
    TuiDay | null,
    Date | null
> {
    public fromControlValue(controlValue: Date | null): TuiDay | null {
        return controlValue && TuiDay.fromLocalNativeDate(controlValue);
    }

    public toControlValue(componentValue: TuiDay | null): Date | null {
        return componentValue?.toLocalNativeDate() || null;
    }
}

export function getExampleDateRangeTransformer(
    dateTransformer: ExampleDateTransformer | null,
): TuiValueTransformer<TuiDayRange | null, [Date, Date] | null> | null {
    return dateTransformer && new ExampleDateRangeTransformer(dateTransformer);
}
