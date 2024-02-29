import {
    ChangeDetectionStrategy,
    Component,
    DoCheck,
    inject,
    Input,
    TrackByFunction,
    ViewChild,
} from '@angular/core';
import {TuiHandler} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {distinctUntilChanged, map, startWith, Subject} from 'rxjs';

import {TuiTreeChildrenDirective} from '../../directives/tree-children.directive';
import {TuiTreeContext} from '../../misc/tree.interfaces';
import {TUI_TREE_NODE} from '../../misc/tree.tokens';
import {TuiTreeItemComponent} from '../tree-item/tree-item.component';

@Component({
    selector: 'tui-tree[value]',
    templateUrl: './tree.template.html',
    styleUrls: ['./tree.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_TREE_NODE,
            useExisting: TuiTreeComponent,
        },
    ],
    host: {
        role: 'tree',
    },
})
export class TuiTreeComponent<T> implements DoCheck {
    private readonly check$ = new Subject<void>();

    @ViewChild(TuiTreeItemComponent)
    protected readonly item?: TuiTreeItemComponent;

    @ViewChild(TuiTreeComponent)
    protected readonly child?: TuiTreeComponent<T>;

    protected readonly children$ = this.check$.pipe(
        startWith(null),
        map(() => this.handler(this.value)),
        distinctUntilChanged(),
    );

    protected readonly directive = inject<TuiTreeChildrenDirective<T>>(
        TuiTreeChildrenDirective,
        {
            optional: true,
        },
    );

    @Input()
    public value!: T;

    @Input()
    public trackBy: TrackByFunction<T> = (_: number, item: T) => item;

    @Input()
    public content: PolymorpheusContent<TuiTreeContext<T>> = ({$implicit}) =>
        String($implicit);

    public ngDoCheck(): void {
        this.checkChanges();
    }

    protected checkChanges(): void {
        this.check$.next();
        this.item?.checkChanges();
        this.child?.checkChanges();
    }

    private get handler(): TuiHandler<T, readonly T[]> {
        return this.directive?.childrenHandler || TuiTreeChildrenDirective.defaultHandler;
    }
}
