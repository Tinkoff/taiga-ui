import {Inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TuiMedia} from '@taiga-ui/core/interfaces';
import {TUI_MEDIA} from '@taiga-ui/core/tokens';
import {fromEvent, merge, Observable} from 'rxjs';
import {map, share, startWith} from 'rxjs/operators';

/**
 * Service to provide the current breakpoint based on Taiga UI's media queries
 */
@Injectable()
export class TuiBreakpointService extends Observable<string | null> {
    constructor(@Inject(TUI_MEDIA) media: TuiMedia, @Inject(WINDOW) windowRef: Window) {
        const breakpoints = getBreakpoints(media);
        const events$ = breakpoints.map(({query}) =>
            fromEvent<MediaQueryListEvent>(windowRef.matchMedia(query), `change`),
        );
        const media$ = merge(...events$).pipe(
            map(() => currentBreakpoint(breakpoints, windowRef.innerWidth).name),
            startWith(currentBreakpoint(breakpoints, windowRef.innerWidth).name),
            share(),
        );

        super(subscriber => media$.subscribe(subscriber));
    }
}

interface Breakpoint {
    name: string;
    query: string;
    width: number;
}

function getBreakpoints(media: TuiMedia): Breakpoint[] {
    return Object.entries(media).map(([name, value]) => ({
        name,
        query: `(max-width: ${value}px)`,
        width: value,
    }));
}

function currentBreakpoint(breakpoints: Breakpoint[], innerWidth: number): Breakpoint {
    return breakpoints.find(({width}) => innerWidth <= width) ?? breakpoints.slice(-1)[0];
}
