import type {AfterViewChecked} from '@angular/core';
import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    inject,
    Input,
    Output,
} from '@angular/core';
import {tuiMoveFocus, tuiWithStyles} from '@taiga-ui/cdk';

import {TUI_TAB_ACTIVATE} from './tab.directive';
import {TuiTabsComponent} from './tabs.component';

@Directive({
    standalone: true,
    selector: 'tui-tabs:is(never)',
})
export class TuiTabsDirective implements AfterViewChecked {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    @Input()
    public activeItemIndex = 0;

    @Output()
    public readonly activeItemIndexChange = new EventEmitter<number>();

    protected readonly nothing = tuiWithStyles(TuiTabsComponent);

    public get tabs(): readonly HTMLElement[] {
        return Array.from(this.el.querySelectorAll<HTMLElement>('[tuiTab]'));
    }

    public get activeElement(): HTMLElement | null {
        return this.tabs[this.activeItemIndex] || null;
    }

    public moveFocus(current: HTMLElement, step: number): void {
        const {tabs} = this;

        tuiMoveFocus(tabs.indexOf(current), tabs, step);
    }

    public ngAfterViewChecked(): void {
        const {tabs, activeElement} = this;

        tabs.forEach(nativeElement => {
            const active = nativeElement === activeElement;

            nativeElement.classList.toggle('_active', active);
            nativeElement.setAttribute('tabIndex', active ? '0' : '-1');
        });
    }

    @HostListener(TUI_TAB_ACTIVATE, ['$event', '$event.target'])
    protected onActivate(event: Event, element: HTMLElement): void {
        const index = this.tabs.findIndex(tab => tab === element);

        event.stopPropagation();

        if (index === this.activeItemIndex) {
            return;
        }

        this.activeItemIndexChange.emit(index);
        this.activeItemIndex = index;
    }
}
