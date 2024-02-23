import {
    Directive,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    inject,
    Input,
    Output,
} from '@angular/core';
import {tuiPx} from '@taiga-ui/cdk/utils/format';

import {TuiResizeableDirective} from './resizeable.directive';

// TODO: Migrate to PointerEvent in 4.0
@Directive({
    selector: '[tuiResizer]',
    host: {'[style.touchAction]': '"none"'},
})
export class TuiResizerDirective {
    private readonly resizeable: ElementRef<HTMLElement> = inject(TuiResizeableDirective);

    protected x = NaN;
    protected y = NaN;
    protected width = 0;
    protected height = 0;

    @Input()
    public tuiResizer: readonly [x: number, y: number] = [0, 0];

    @Output()
    public readonly tuiSizeChange = new EventEmitter<readonly [x: number, y: number]>();

    @HostBinding('style.cursor')
    public get cursor(): string {
        if (!this.tuiResizer[0]) {
            return 'ns-resize';
        }

        if (!this.tuiResizer[1]) {
            return 'ew-resize';
        }

        if (this.tuiResizer[0] * this.tuiResizer[1] > 0) {
            return 'nwse-resize';
        }

        return 'nesw-resize';
    }

    @HostListener('touchstart.silent.passive', ['$event'])
    public onTouchStart({touches}: TouchEvent): void {
        this.onMouseDown(touches[0].clientX, touches[0].clientY);
    }

    @HostListener('mousedown.silent.prevent', ['$event.x', '$event.y'])
    public onMouseDown(x: number, y: number): void {
        this.x = x;
        this.y = y;
        this.width = this.resizeable.nativeElement.clientWidth;
        this.height = this.resizeable.nativeElement.clientHeight;
    }

    @HostListener('document:mousemove.silent', ['$event'])
    public onMouseMove({x, y, buttons}: MouseEvent): void {
        if (!buttons) {
            this.onMouseUp();
        } else {
            this.onMove(x, y);
        }
    }

    @HostListener('document:touchmove.silent', ['$event'])
    public onTouchMove({touches}: TouchEvent): void {
        this.onMove(touches[0].clientX, touches[0].clientY);
    }

    @HostListener('document:mouseup.silent')
    @HostListener('document:touchend.silent')
    public onMouseUp(): void {
        this.x = NaN;
    }

    public onMove(x: number, y: number): void {
        if (Number.isNaN(this.x)) {
            return;
        }

        const {style} = this.resizeable.nativeElement;
        const size = [
            this.width + this.tuiResizer[0] * (x - this.x),
            this.height + this.tuiResizer[1] * (y - this.y),
        ] as const;

        if (this.tuiResizer[0]) {
            style.width = tuiPx(size[0]);
        }

        if (this.tuiResizer[1]) {
            style.height = tuiPx(size[1]);
        }

        this.tuiSizeChange.emit(size);
    }
}
