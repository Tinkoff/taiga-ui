import {Type} from '@angular/core';
import {DefaultExport, Route} from '@angular/router';
import {Observable} from 'rxjs';

interface Options {
    path?: string;
    title?: string;
    loadComponent?: () =>
        | Observable<DefaultExport<Type<unknown>> | Type<unknown>>
        | Promise<DefaultExport<Type<unknown>> | Type<unknown>>
        | Type<unknown>;
}

export function tuiProvideRoutePageTab({
    path,
    title,
    loadComponent,
}: Options = {}): Route {
    return {
        path,
        loadComponent,
        data: {title},
        children: [{path: `:tab`, loadComponent}],
    };
}
