export function tuiIsExpireValid(expire: string): boolean {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear() - 2000;
    const month = parseInt(expire.slice(0, 2), 0);
    const year = parseInt(expire.slice(-2), 0);

    return year > currentYear || (year === currentYear && month >= currentMonth);
}
