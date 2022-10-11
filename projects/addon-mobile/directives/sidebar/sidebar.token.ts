import {Directive} from '@angular/core';
import {TuiLightweightToken} from '@taiga-ui/core';

/**
 * @internal
 * Such a token prevents circular dependencies between
 * sidebar.directive.ts -> sidebar.component.ts -> sidebar.directive.ts
 *
 * more: https://angular.io/guide/lightweight-injection-tokens
 */
@Directive()
export class TuiSidebarToken extends TuiLightweightToken {}
