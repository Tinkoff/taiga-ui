import {
    ContentChild,
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    inject,
    Input,
    OnChanges,
    Output,
} from '@angular/core';
import {
    TuiActiveZoneDirective,
    TuiDestroyService,
    tuiGetActualTarget,
    tuiGetClosestFocusable,
    tuiIsElement,
    tuiIsElementEditable,
    tuiIsHTMLElement,
    tuiIsNativeFocusedIn,
    tuiIsNativeKeyboardFocusable,
    TuiObscuredDirective,
    TuiObscuredService,
} from '@taiga-ui/cdk';
import {tuiAsDriver} from '@taiga-ui/core/abstract';
import {tuiIsEditingKey} from '@taiga-ui/core/utils/miscellaneous';
import {shouldCall} from '@tinkoff/ng-event-plugins';
import {fromEvent, merge} from 'rxjs';
import {filter, map, takeUntil} from 'rxjs/operators';

import {TuiDropdownDirective} from './dropdown.directive';
import {TuiDropdownDriver} from './dropdown.driver';

function shouldClose(
    this: TuiDropdownOpenDirective,
    event: Event | KeyboardEvent,
): boolean {
    return (
        'key' in event &&
        event.key.toLowerCase() === 'escape' &&
        this.tuiDropdownEnabled &&
        !!this.tuiDropdownOpen &&
        !this.dropdown?.nextElementSibling
    );
}

@Directive({
    standalone: true,
    selector: '[tuiDropdownOpen],[tuiDropdownOpenChange]',
    providers: [
        TuiDestroyService,
        TuiActiveZoneDirective,
        TuiObscuredService,
        TuiObscuredDirective,
        TuiDropdownDriver,
        tuiAsDriver(TuiDropdownDriver),
    ],
})
export class TuiDropdownOpenDirective implements OnChanges {
    @ContentChild('tuiDropdownHost', {descendants: true, read: ElementRef})
    private readonly dropdownHost?: ElementRef<HTMLElement>;

    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly directive = inject(TuiDropdownDirective);
    private readonly driver = inject(TuiDropdownDriver);
    private readonly obscured = inject(TuiObscuredDirective);

    @Input()
    tuiDropdownEnabled = true;

    @Input()
    tuiDropdownOpen: boolean | '' = false;

    @Output()
    readonly tuiDropdownOpenChange = new EventEmitter<boolean>();

    readonly sub = merge(
        this.obscured.tuiObscured.pipe(filter(Boolean)),
        inject(TuiActiveZoneDirective).tuiActiveZoneChange.pipe(filter(a => !a)),
        fromEvent(this.el, 'focusin').pipe(
            map(tuiGetActualTarget),
            filter(target => !this.host.contains(target)),
        ),
    )
        .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
        .subscribe(() => this.toggle(false));

    get dropdown(): HTMLElement | undefined {
        return this.directive.dropdownBoxRef?.location.nativeElement;
    }

    @HostListener('click', ['$event.target', '$event.defaultPrevented'])
    onClick(target: HTMLElement, prevented: boolean): void {
        if (!this.editable && !prevented && this.host.contains(target)) {
            this.update(!this.tuiDropdownOpen);
        }
    }

    @HostListener('keydown.arrowDown', ['$event', 'false'])
    @HostListener('keydown.arrowUp', ['$event', 'true'])
    onArrow(event: KeyboardEvent, up: boolean): void {
        if (!tuiIsElement(event.target) || !this.host.contains(event.target)) {
            return;
        }

        event.preventDefault();
        this.focusDropdown(up);
    }

    @shouldCall(shouldClose)
    @HostListener('document:keydown.silent.capture', ['$event'])
    onEsc(event: Event): void {
        event.preventDefault();
        this.toggle(false);
    }

    @HostListener('document:keydown.silent', ['$event'])
    onKeydown({key, target, defaultPrevented}: KeyboardEvent): void {
        if (
            !defaultPrevented &&
            tuiIsEditingKey(key) &&
            this.editable &&
            tuiIsHTMLElement(target) &&
            !tuiIsElementEditable(target)
        ) {
            this.host.focus({preventScroll: true});
        }
    }

    ngOnChanges(): void {
        this.drive();
    }

    toggle(open: boolean): void {
        if (this.focused && !open) {
            this.host.focus({preventScroll: true});
        }

        this.update(open);
    }

    private get host(): HTMLElement {
        const initial = this.dropdownHost?.nativeElement || this.el;
        const focusable = tuiIsNativeKeyboardFocusable(initial)
            ? initial
            : tuiGetClosestFocusable({initial, root: this.el});

        return this.dropdownHost?.nativeElement || focusable || this.el;
    }

    private get focused(): boolean {
        return tuiIsNativeFocusedIn(this.host) || tuiIsNativeFocusedIn(this.dropdown);
    }

    private get editable(): boolean {
        return tuiIsElementEditable(this.host);
    }

    private update(open: boolean): void {
        if (open && !this.tuiDropdownEnabled) {
            return;
        }

        this.tuiDropdownOpen = open;
        this.tuiDropdownOpenChange.emit(open);
        this.drive();
    }

    private drive(open = this.tuiDropdownOpen && this.tuiDropdownEnabled): void {
        this.obscured.tuiObscuredEnabled = !!open;
        this.driver.next(!!open);
    }

    private focusDropdown(previous: boolean): void {
        if (!this.dropdown) {
            this.update(true);

            return;
        }

        const doc = this.el.ownerDocument;
        const child = this.dropdown.appendChild(doc.createElement('div'));
        const initial = previous ? child : this.dropdown;
        const focusable = tuiGetClosestFocusable({
            initial,
            previous,
            root: this.dropdown,
        });

        child.remove();
        focusable?.focus();
    }
}

export const TUI_DROPDOWN_OPEN = {
    directive: TuiDropdownOpenDirective,
    inputs: ['tuiDropdownOpen', 'tuiDropdownEnabled'],
    outputs: ['tuiDropdownOpenChange'],
};
