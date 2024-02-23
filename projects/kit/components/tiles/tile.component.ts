import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    inject,
    Input,
    OnDestroy,
    ViewChild,
} from '@angular/core';

import {TuiTileService} from './tile.service';
import {TuiTilesComponent} from './tiles.component';

@Component({
    selector: 'tui-tile',
    templateUrl: './tile.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiTileService],
})
export class TuiTileComponent implements OnDestroy, AfterViewInit {
    @ViewChild('wrapper')
    private readonly wrapper?: ElementRef<HTMLElement>;

    private readonly service = inject(TuiTileService);
    private readonly tiles = inject(TuiTilesComponent);

    @HostBinding('class._dragged')
    protected dragged = false;

    @Input()
    public width = 1;

    @Input()
    public height = 1;

    public readonly element: HTMLElement = inject(ElementRef).nativeElement;

    @HostBinding('style.gridColumn')
    public get column(): string {
        return `span var(--tui-width, ${this.width})`;
    }

    @HostBinding('style.gridRow')
    public get row(): string {
        return `span var(--tui-height, ${this.height})`;
    }

    @HostListener('pointerenter')
    public onEnter(): void {
        this.tiles.rearrange(this.element);
    }

    public onDrag(offset: readonly [number, number]): void {
        const dragged = !Number.isNaN(offset[0]);

        this.dragged = this.dragged || dragged;
        this.tiles.element = dragged ? this.element : null;
        this.service.setOffset(offset);
    }

    public onTransitionEnd(): void {
        this.dragged = false;
    }

    public ngAfterViewInit(): void {
        if (this.wrapper) {
            this.service.init(this.wrapper.nativeElement);
        }
    }

    public ngOnDestroy(): void {
        if (this.tiles.element === this.element) {
            this.tiles.element = null;
        }
    }
}
