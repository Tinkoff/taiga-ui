/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

const MAX_PRECISION = 292;

/**
 * Rounding number to the set precision
 *
 * @param value
 * @param precision number of digits in a float part
 * @param func rounding function (round, floor, ceil)
 */
function calculate(
    value: number,
    precision: number,
    func: (x: number) => number,
): number {
    if (value === Infinity) {
        return value;
    }

    ngDevMode && console.assert(!Number.isNaN(value), 'Value must be number');
    ngDevMode && console.assert(Number.isInteger(precision), 'Precision must be integer');

    precision = Math.min(precision, MAX_PRECISION);

    const pair = `${value}e`.split('e');
    const tempValue = func(Number(`${pair[0]}e${Number(pair[1]) + precision}`));
    const processedPair = `${tempValue}e`.split('e');

    return Number(`${processedPair[0]}e${Number(processedPair[1]) - precision}`);
}

export function tuiRound(value: number, precision = 0): number {
    return calculate(value, precision, Math.round);
}

export function tuiCeil(value: number, precision = 0): number {
    return calculate(value, precision, Math.ceil);
}

export function tuiFloor(value: number, precision = 0): number {
    return calculate(value, precision, Math.floor);
}

export function tuiTrunc(value: number, precision = 0): number {
    return calculate(value, precision, Math.trunc);
}
