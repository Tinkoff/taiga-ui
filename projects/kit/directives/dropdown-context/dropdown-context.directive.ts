import {
    ComponentFactoryResolver,
    Directive,
    ElementRef,
    forwardRef,
    HostListener,
    Inject,
    Injector,
    Input,
    Optional,
} from '@angular/core';
import {
    getClosestFocusable,
    setNativeFocused,
    TuiActiveZoneDirective,
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiPortalService,
} from '@taiga-ui/cdk';
import {AbstractTuiDropdown, TUI_DROPDOWN_DIRECTIVE, TuiDropdown} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {EMPTY} from 'rxjs';

// @dynamic
@Directive({
    selector: '[tuiDropdownContext]',
    providers: [
        {
            provide: TUI_DROPDOWN_DIRECTIVE,
            useExisting: forwardRef(() => TuiDropdownContextDirective),
        },
    ],
})
export class TuiDropdownContextDirective
    extends AbstractTuiDropdown
    implements TuiDropdown {
    @Input('tuiDropdownContext')
    @tuiDefaultProp()
    content: PolymorpheusContent = '';

    readonly refresh$ = EMPTY;
    readonly context: TuiContextWithImplicit<() => void> = {
        $implicit: () => this.closeDropdownBox(),
    };
    private lastClickedClientRect: ClientRect = this.getClientRectFromDot(0, 0);

    constructor(
        protected readonly elementRef: ElementRef,
        @Inject(ComponentFactoryResolver)
        componentFactoryResolver: ComponentFactoryResolver,
        @Inject(Injector) injector: Injector,
        @Inject(TuiPortalService) portalService: TuiPortalService,
        @Optional() activeZone: TuiActiveZoneDirective | null,
    ) {
        super(componentFactoryResolver, injector, portalService, elementRef, activeZone);
    }

    get clientRect(): ClientRect {
        return this.lastClickedClientRect;
    }

    get fixed(): boolean {
        return true;
    }

    private get dropdownContent(): HTMLElement | null {
        return this.dropdownBoxRef?.instance.contentElementRef?.nativeElement || null;
    }

    @HostListener('contextmenu.prevent', ['$event.clientX', '$event.clientY'])
    onContextMenu(x: number, y: number) {
        this.closeDropdownBox();
        this.openDropdown(x, y);
    }

    /**
     * TODO: Optimize this
     * (.silent event modifier is not suitable for optimization because it breaks disappearing animation)
     */
    @HostListener('document:click', ['$event.target'])
    onLeftClickOutside(target: HTMLElement) {
        const clickedInside = this.dropdownContent?.contains(target);

        if (!clickedInside) {
            this.closeDropdownBox();
        }
    }

    @HostListener('document:contextmenu', ['$event.target'])
    onAnotherContextOpen(target: HTMLElement) {
        const isAnotherContextOpened = !this.elementRef.nativeElement.contains(target);

        if (isAnotherContextOpened) {
            this.closeDropdownBox();
        }
    }

    @HostListener('document:keydown.arrowDown', ['$event', 'true'])
    @HostListener('document:keydown.arrowUp', ['$event', 'false'])
    onArrow(event: KeyboardEvent, down: boolean) {
        if (!this.dropdownContent) {
            return;
        }

        event.preventDefault();

        const nextEl = this.dropdownContent.nextElementSibling;
        const initial =
            down || !this.checkIsFocusableElement(nextEl) ? this.dropdownContent : nextEl;
        const focusable = getClosestFocusable(initial, !down, this.dropdownContent);

        if (focusable === null) {
            return;
        }

        setNativeFocused(focusable);
    }

    @HostListener('document:keydown.esc', ['$event'])
    onKeyDownEsc(event: KeyboardEvent) {
        if (!this.dropdownContent) {
            return;
        }

        event.stopPropagation();
        this.closeDropdownBox();
    }

    private openDropdown(x: number, y: number): void {
        this.lastClickedClientRect = this.getClientRectFromDot(x, y);
        this.openDropdownBox();
    }

    private getClientRectFromDot(x: number, y: number): ClientRect {
        return {
            top: y,
            bottom: y,
            left: x,
            right: x,
            height: 0,
            width: 0,
        };
    }

    private checkIsFocusableElement(element: Element | null): element is HTMLElement {
        return !!element && 'focus' in element && 'blur' in element;
    }
}
