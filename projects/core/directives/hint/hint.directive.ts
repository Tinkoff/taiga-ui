import type {OnChanges, OnDestroy} from '@angular/core';
import {Directive, ElementRef, Inject, INJECTOR, Input, Optional} from '@angular/core';
import {TuiActiveZoneDirective, tuiDefaultProp} from '@taiga-ui/cdk';
import type {TuiRectAccessor, TuiVehicle} from '@taiga-ui/core/abstract';
import {tuiAsRectAccessor, tuiAsVehicle} from '@taiga-ui/core/abstract';
import type {TuiPortalItem} from '@taiga-ui/core/interfaces';
import {TuiHintService} from '@taiga-ui/core/services';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

// eslint-disable-next-line import/no-cycle
import {TUI_HINT_COMPONENT} from './hint.providers';
import type {TuiHintOptions} from './hint-options.directive';
import {TUI_HINT_OPTIONS} from './hint-options.directive';

@Directive({
    selector: '[tuiHint]:not(ng-container)',
    providers: [
        tuiAsRectAccessor(TuiHintDirective),
        tuiAsVehicle(TuiHintDirective),
        {
            provide: PolymorpheusComponent,
            deps: [TUI_HINT_COMPONENT, INJECTOR],
            useClass: PolymorpheusComponent,
        },
    ],
})
export class TuiHintDirective<C>
    implements OnDestroy, OnChanges, TuiPortalItem<C>, TuiRectAccessor, TuiVehicle
{
    @Input('tuiHint')
    @tuiDefaultProp()
    content: PolymorpheusContent<C> = '';

    @Input('tuiHintContext')
    context?: C;

    @Input()
    @tuiDefaultProp()
    tuiHintAppearance: string | null = null;

    readonly type = 'hint';

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(PolymorpheusComponent)
        readonly component: PolymorpheusComponent<unknown, any>,
        @Inject(TuiHintService) private readonly hintService: TuiHintService,
        @Inject(TUI_HINT_OPTIONS) private readonly options: TuiHintOptions,
        @Optional()
        @Inject(TuiActiveZoneDirective)
        readonly activeZone?: TuiActiveZoneDirective | null,
    ) {}

    get appearance(): string {
        return this.tuiHintAppearance ?? this.options.appearance;
    }

    ngOnChanges(): void {
        if (!this.content) {
            this.toggle(false);
        }
    }

    ngOnDestroy(): void {
        this.toggle(false);
    }

    getClientRect(): ClientRect {
        return this.elementRef.nativeElement.getBoundingClientRect();
    }

    toggle(show: boolean): void {
        if (show && this.content) {
            this.hintService.add(this);
        } else {
            this.hintService.remove(this);
        }
    }
}
