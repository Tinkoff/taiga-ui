import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    Optional,
    Output,
    Self,
    ViewChild,
} from '@angular/core';
import {
    TuiActiveZoneDirective,
    tuiAsFocusableItemAccessor,
    TuiContextWithImplicit,
    TuiFocusableElementAccessor,
    tuiGetActualTarget,
    tuiGetClosestFocusable,
    tuiIsElement,
    tuiIsElementEditable,
    tuiIsHTMLElement,
    tuiIsNativeFocusedIn,
    tuiIsNativeKeyboardFocusable,
    TuiNativeFocusableElement,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {TuiPositionAccessor} from '@taiga-ui/core/abstract';
import {
    TuiDropdownDirective,
    TuiDropdownHoverDirective,
} from '@taiga-ui/core/directives/dropdown';
import {tuiIsEditingKey} from '@taiga-ui/core/utils/miscellaneous';
import {shouldCall} from '@tinkoff/ng-event-plugins';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, combineLatest, EMPTY, merge, of} from 'rxjs';
import {delay, distinctUntilChanged, map, share, skip, switchMap} from 'rxjs/operators';

import {TuiAccessorProxyDirective} from './accessor-proxy.directive';
import {TUI_HOSTED_DROPDOWN_COMPONENT} from './hosted-dropdown.token';
import {TuiHostedDropdownConnectorDirective} from './hosted-dropdown-connector.directive';

function shouldClose(
    this: TuiHostedDropdownComponent,
    event: Event | KeyboardEvent,
): boolean {
    return (
        'key' in event &&
        event.key.toLowerCase() === 'escape' &&
        this.canOpen &&
        this.open &&
        !this.dropdown?.nextElementSibling
    );
}

export interface TuiHostedDropdownContext
    extends TuiContextWithImplicit<TuiActiveZoneDirective> {
    close(): void;
}

@Component({
    selector: 'tui-hosted-dropdown',
    templateUrl: './hosted-dropdown.template.html',
    styleUrls: ['./hosted-dropdown.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiHostedDropdownComponent),
        {
            provide: TuiAccessorProxyDirective,
            deps: [[new Optional(), new Self(), TuiPositionAccessor]],
            useFactory: (position: TuiPositionAccessor[] | null) => position?.[0],
        },
        {
            provide: TUI_HOSTED_DROPDOWN_COMPONENT,
            useExisting: TuiHostedDropdownComponent,
        },
    ],
    host: {
        '[$.class._hosted_dropdown_focused]': 'focus$',
        '($.class._hosted_dropdown_focused)': 'focus$',
    },
})
export class TuiHostedDropdownComponent implements TuiFocusableElementAccessor {
    @ContentChild(TuiHostedDropdownConnectorDirective, {read: ElementRef})
    private readonly dropdownHost?: ElementRef<HTMLElement>;

    @ViewChild('wrapper', {read: ElementRef})
    private readonly wrapper?: ElementRef<HTMLDivElement>;

    @ViewChild(TuiDropdownDirective)
    private readonly dropdownDirective?: TuiDropdownDirective;

    private readonly openChange$ = new BehaviorSubject(false);

    private readonly hostHover$ = combineLatest([
        tuiTypedFromEvent(this.el.nativeElement, 'mouseover').pipe(
            map(e => this.computedHost.contains(tuiGetActualTarget(e))),
            switchMap(visible =>
                of(visible).pipe(
                    delay(
                        (visible ? this.hover$?.showDelay : this.hover$?.hideDelay) || 0,
                    ),
                ),
            ),
        ),
        this.hover$ || EMPTY,
    ]).pipe(map(([visible, hovered]) => visible && hovered));

    @ViewChild(TuiActiveZoneDirective)
    readonly activeZone!: TuiActiveZoneDirective;

    @Input()
    content: PolymorpheusContent<TuiHostedDropdownContext>;

    @Input()
    sided = false;

    @Input()
    canOpen = true;

    @Output('openChange')
    readonly open$ = merge(this.openChange$, this.hostHover$).pipe(
        skip(1),
        distinctUntilChanged(),
        share(),
    );

    @Output()
    readonly focusedChange = new EventEmitter<boolean>();

    readonly focus$ = new BehaviorSubject(false);

    /** TODO: rename in 4.0 */
    readonly openChange = this.openChange$;

    readonly context!: TuiContextWithImplicit<TuiActiveZoneDirective>;

    constructor(
        @Self()
        @Optional()
        @Inject(TuiDropdownHoverDirective)
        private readonly hover$: TuiDropdownHoverDirective | null,
        @Inject(ElementRef) private readonly el: ElementRef,
    ) {}

    @Input()
    set open(open: boolean) {
        this.openChange.next(open);
    }

    get open(): boolean {
        return this.openChange.value;
    }

    get host(): HTMLElement {
        return this.dropdownHost?.nativeElement || this.el.nativeElement;
    }

    get computedHost(): HTMLElement {
        return (
            this.dropdownHost?.nativeElement ||
            this.nativeFocusableElement ||
            this.el.nativeElement
        );
    }

    get dropdown(): HTMLElement | undefined {
        return this.dropdownDirective?.dropdownBoxRef?.location.nativeElement;
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return tuiIsNativeKeyboardFocusable(this.host)
            ? this.host
            : tuiGetClosestFocusable({
                  initial: this.host,
                  root: this.el.nativeElement,
              });
    }

    get focused(): boolean {
        return (
            tuiIsNativeFocusedIn(this.host) ||
            (this.open &&
                !!this.wrapper &&
                tuiIsNativeFocusedIn(this.wrapper.nativeElement))
        );
    }

    @HostListener('focusin.capture.silent')
    @HostListener('focusout.capture.silent')
    onFocusInOut(): void {
        this.focus$.next(this.focused);
    }

    @HostListener('focusin', ['$event.target'])
    onFocusIn(target: HTMLElement): void {
        if (!this.computedHost.contains(target)) {
            this.updateOpen(false);
        }
    }

    @HostListener('click', ['$event.target'])
    onClick(target: HTMLElement): void {
        if (
            !this.hostEditable &&
            this.computedHost.contains(target) &&
            !this.hover$?.hovered
        ) {
            this.updateOpen(!this.open);
        }
    }

    @shouldCall(shouldClose)
    @HostListener('document:keydown.silent.capture', ['$event'])
    onKeyDownEsc(event: Event): void {
        event.preventDefault();
        this.closeDropdown();
    }

    @HostListener('keydown.arrowDown', ['$event', 'true'])
    @HostListener('keydown.arrowUp', ['$event', 'false'])
    onArrow(event: KeyboardEvent, down: boolean): void {
        this.focusDropdown(event, down);
    }

    onKeydown({key, target, defaultPrevented}: KeyboardEvent): void {
        if (
            !defaultPrevented &&
            tuiIsEditingKey(key) &&
            this.hostEditable &&
            tuiIsHTMLElement(target) &&
            !tuiIsElementEditable(target)
        ) {
            this.focusHost();
        }
    }

    onActiveZone(active: boolean): void {
        this.updateFocused(active);

        if (!active) {
            this.updateOpen(false);
        }
    }

    onHostObscured(obscured: boolean): void {
        if (obscured) {
            this.closeDropdown();
        }
    }

    updateOpen(open: boolean): void {
        if (!open || this.canOpen) {
            this.open = open;
        }
    }

    readonly close = (): void => this.updateOpen(false);

    private get hostEditable(): boolean {
        return tuiIsElementEditable(this.computedHost);
    }

    private focusDropdown(event: KeyboardEvent, first: boolean): void {
        const host = this.nativeFocusableElement;

        if (
            !host ||
            !tuiIsHTMLElement(host) ||
            !tuiIsElement(event.target) ||
            !host.contains(event.target)
        ) {
            return;
        }

        if (
            !this.wrapper ||
            !this.open ||
            !this.dropdown ||
            !tuiIsHTMLElement(this.wrapper.nativeElement.nextElementSibling)
        ) {
            this.updateOpen(true);

            if (!tuiIsElementEditable(host)) {
                event.preventDefault();
            }

            return;
        }

        const initial = first
            ? this.wrapper.nativeElement
            : this.wrapper.nativeElement.nextElementSibling;
        const focusable = tuiGetClosestFocusable({
            initial,
            root: this.wrapper.nativeElement,
            previous: !first,
        });

        if (!focusable) {
            return;
        }

        focusable.focus();
        event.preventDefault();
    }

    private closeDropdown(): void {
        if (this.focused) {
            this.focusHost();
        }

        this.updateOpen(false);
    }

    private focusHost(): void {
        const host = this.nativeFocusableElement;

        if (host) {
            host.focus({preventScroll: true});
        }
    }

    private updateFocused(focused: boolean): void {
        this.focusedChange.emit(focused);
    }
}
