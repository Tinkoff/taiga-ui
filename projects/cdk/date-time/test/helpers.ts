import {tuiIsNumber} from '@taiga-ui/cdk/utils';

declare const global: {Date: typeof Date};

const OriginalDate = global.Date;

export function tuiMockCurrentDate(dateOrNumber: Date | number): void {
    const date = tuiIsNumber(dateOrNumber)
        ? new OriginalDate(dateOrNumber)
        : dateOrNumber;

    class MockDate extends OriginalDate {
        constructor() {
            super();

            return date;
        }
    }

    global.Date = MockDate as typeof Date;
}

export function tuiRestoreRealDate(): void {
    global.Date = OriginalDate;
}

export function tuiMockDateInside(dateMock: Date | number, callback: () => void): void {
    tuiMockCurrentDate(dateMock);
    callback();
    tuiRestoreRealDate();
}
