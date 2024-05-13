export interface TuiSchema {
    readonly addAlertModule: boolean;
    readonly addDialogsModule: boolean;
    readonly addGlobalStyles: boolean;
    readonly addSanitizer: boolean;
    readonly addons: readonly string[];
    readonly project: string;

    /**
     * @example
     * ```console
     * schematics ./dist/cdk:updateToV3 --allow-private --skip-deep-imports --dry-run false
     * ```
     */
    'skip-deep-imports'?: boolean;

    /**
     * @example
     * ```console
     * schematics ./dist/cdk:updateToV3 --skip-logs
     * ```
     */
    'skip-logs'?: boolean;

    /**
     * @example
     * ```console
     * schematics ./dist/cdk:updateToV3 --experimental
     * ```
     */
    experimental?: boolean;
}
