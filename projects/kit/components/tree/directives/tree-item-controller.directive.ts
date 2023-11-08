import {Directive, Input} from '@angular/core';

import {TuiTreeItemComponent} from '../components/tree-item/tree-item.component';
import {TuiTreeController} from '../misc/tree.interfaces';
import {TUI_TREE_CONTROLLER} from '../misc/tree.tokens';

@Directive({
    selector: '[tuiTreeController]:not([map])',
    providers: [
        {
            provide: TUI_TREE_CONTROLLER,
            useExisting: TuiTreeItemControllerDirective,
        },
    ],
    exportAs: 'tuiTreeController',
})
export class TuiTreeItemControllerDirective implements TuiTreeController {
    private readonly map = new WeakMap<TuiTreeItemComponent, boolean>();

    @Input('tuiTreeController')
    fallback = true;

    isExpanded(item: TuiTreeItemComponent): boolean {
        return this.map.get(item) ?? this.fallback;
    }

    toggle(item: TuiTreeItemComponent): void {
        this.map.set(item, !this.isExpanded(item));
    }
}
