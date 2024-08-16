import {DOCUMENT} from '@angular/common';
import type {OnDestroy} from '@angular/core';
import {Directive, inject} from '@angular/core';
import {
    tuiContainsOrAfter,
    tuiInjectElement,
    tuiIsHTMLElement,
} from '@taiga-ui/cdk/utils/dom';
import {
    tuiBlurNativeFocused,
    tuiGetClosestFocusable,
    tuiGetNativeFocused,
} from '@taiga-ui/cdk/utils/focus';

@Directive({
    standalone: true,
    selector: '[tuiFocusTrap]',
    host: {
        tabIndex: '0',
        '(window:focusin.silent)': 'onFocusIn($event.target)',
    },
})
export class TuiFocusTrap implements OnDestroy {
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement();
    private readonly activeElement = tuiGetNativeFocused(this.doc);

    constructor() {
        /**
         * This would cause currently focused element to lose focus,
         * but it might cause ExpressionChanged error due to potential HostBinding.
         * Microtask keeps it in the same frame but allows change detection to run
         */
        void Promise.resolve().then(() => this.el.focus());
    }

    public ngOnDestroy(): void {
        tuiBlurNativeFocused(this.doc);

        /**
         * HostListeners are triggered even after ngOnDestroy
         * {@link https://github.com/angular/angular/issues/38100}
         * so we need to delay it but stay in the same sync cycle,
         * therefore using Promise instead of setTimeout
         */
        // eslint-disable-next-line
        Promise.resolve().then(() => {
            if (tuiIsHTMLElement(this.activeElement)) {
                this.activeElement.focus();
            }
        });
    }

    protected onFocusIn(node: Node): void {
        if (!tuiContainsOrAfter(this.el, node)) {
            tuiGetClosestFocusable({
                initial: this.el,
                root: this.el,
            })?.focus();
        }
    }
}
