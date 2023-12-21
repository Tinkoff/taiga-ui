import {
    ComponentFactoryResolver,
    createComponent,
    EnvironmentInjector,
    Inject,
    inject,
    Injectable,
    INJECTOR,
    Injector,
    Type,
} from '@angular/core';

// TODO: Add cleanup with DestroyRef in Angular 16+ and replace service with just a map from a token
export function tuiWithStyles(component: Type<unknown>): void {
    const map = inject(TuiDirectiveStylesService).map;
    const environmentInjector = inject(EnvironmentInjector);

    if (!map.has(component)) {
        map.set(component, createComponent(component, {environmentInjector}));
    }
}

/**
 * @deprecated use {@link tuiWithStyles} instead
 */
@Injectable({
    providedIn: 'root',
})
export class TuiDirectiveStylesService {
    readonly map = new Map();

    constructor(
        @Inject(ComponentFactoryResolver)
        private readonly resolver: ComponentFactoryResolver,
        @Inject(INJECTOR) private readonly injector: Injector,
    ) {}

    addComponent(component: Type<unknown>): void {
        if (!this.map.has(component)) {
            this.map.set(
                component,
                this.resolver.resolveComponentFactory(component).create(this.injector),
            );
        }
    }
}
