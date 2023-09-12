import {inject, Provider, Type} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';
import {TuiRectAccessor} from '@taiga-ui/core/abstract';

/**
 * Viewport accessor
 */
export const TUI_VIEWPORT = tuiCreateTokenFromFactory<TuiRectAccessor>(() => {
    const win = inject(WINDOW);

    return {
        type: `viewport`,
        getClientRect() {
            return {
                top: 0,
                left: 0,
                right: win.innerWidth,
                bottom: win.innerHeight,
                width: win.innerWidth,
                height: win.innerHeight,
            };
        },
    };
});

export function tuiAsViewport(useExisting: Type<TuiRectAccessor>): Provider {
    return {
        provide: TUI_VIEWPORT,
        useExisting,
    };
}
