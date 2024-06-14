import {RANGE_SEPARATOR_CHAR} from './date-time';

/**
 * @internal 'dd.mm.yyyy'.length
 * Used in:
 * - {@link TuiInputDate}
 * - {@link TuiInputDateRange}
 * - {@link TuiInputDateTime}
 */
export const DATE_FILLER_LENGTH = 10;
/**
 * @internal
 * Used in {@link TuiInputDateRange}
 */
export const DATE_RANGE_FILLER_LENGTH =
    2 * DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length;
