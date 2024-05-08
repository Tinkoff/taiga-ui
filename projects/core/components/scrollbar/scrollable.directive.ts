import type {OnInit} from '@angular/core';
import {Directive} from '@angular/core';
import {tuiNativeElement} from '@taiga-ui/cdk';
import {TUI_SCROLLABLE} from '@taiga-ui/core/constants';

@Directive({
    standalone: true,
    selector: '[tuiScrollable]',
})
export class TuiScrollableDirective implements OnInit {
    private readonly el = tuiNativeElement();

    public ngOnInit(): void {
        this.el.dispatchEvent(
            new CustomEvent(TUI_SCROLLABLE, {
                bubbles: true,
                detail: this.el,
            }),
        );
    }
}
