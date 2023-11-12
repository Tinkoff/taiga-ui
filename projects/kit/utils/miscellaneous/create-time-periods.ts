import {HOURS_IN_DAY, TuiTime} from '@taiga-ui/cdk';

export function tuiCreateTimePeriods(
    minHour: number = 0,
    maxHour: number = HOURS_IN_DAY,
    minutes: readonly number[] = [0, 30],
): readonly TuiTime[] {
    const timeArray: TuiTime[] = [];

    // eslint-disable-next-line functional/no-loop-statements
    for (let i = minHour; i < maxHour; i++) {
        // eslint-disable-next-line functional/no-loop-statements
        for (const minute of minutes) {
            const time = new TuiTime(i, minute);

            timeArray.push(time);
        }
    }

    return timeArray;
}
