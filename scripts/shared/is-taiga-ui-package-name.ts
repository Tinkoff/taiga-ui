export function isTaigaUiPackageName(name: string = '', ignores: string[]): boolean {
    return name?.startsWith('@taiga-ui/') && !ignores.includes(name);
}
