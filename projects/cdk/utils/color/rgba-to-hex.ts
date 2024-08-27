export function tuiRgbaToHex(color: string): string {
    if (!tuiIsValidRgba(color)) {
        throw new Error('Invalid RGBa');
    }

    const rgb =
        color.replaceAll(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i) ??
        null;

    let alpha: number | string = (rgb?.[4] ?? '').toString().trim();

    let hex = rgb
        ? ((parseInt(rgb?.[1] ?? '', 10) || 0) | (1 << 8)).toString(16).slice(1) +
          ((parseInt(rgb?.[2] ?? '', 10) || 0) | (1 << 8)).toString(16).slice(1) +
          ((parseInt(rgb?.[3] ?? '', 10) || 0) | (1 << 8)).toString(16).slice(1)
        : color;

    alpha = alpha !== '' ? alpha : 0o1;
    alpha = ((Number(alpha) * 255) | (1 << 8)).toString(16).slice(1);
    hex += alpha;

    return `#${hex.toUpperCase()}`;
}

export function tuiIsValidRgba(rgba: string): boolean {
    const range = '(\\d|[1-9]\\d|1\\d{2}|2[0-4]\\d|2[0-5]{2})';
    const alpha = '([01]|0?\\.\\d+)';

    return new RegExp(
        `^(?:rgb\\(\\s*${range}\\s*,\\s*${range}\\s*,\\s*${range}\\s*\\)|rgba\\(\\s*${range}\\s*,\\s*${range}\\s*,\\s*${range}\\s*,\\s*${alpha}\\s*\\))$`,
    ).test(rgba);
}
