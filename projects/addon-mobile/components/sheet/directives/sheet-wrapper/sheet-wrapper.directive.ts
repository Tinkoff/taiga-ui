import {ContentChild, Directive, HostListener, Inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {clamp, tuiPure} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TuiSheetComponent} from '../../components/sheet/sheet.component';
import {
    TUI_SHEET_DRAGGED,
    TUI_SHEET_OFFSET,
    TUI_SHEET_SCROLL,
} from '../../components/sheet/sheet.providers';
import {processDragged} from '../../ios.hacks';

// Safety offset for shadow
const OFFSET = 16;

// @dynamic
@Directive({
    selector: '[tuiSheetWrapper]',
    host: {
        '[class._touched]': 'touched',
        '[$.class._overlay]': 'overlay$',
        '($.class._overlay)': 'overlay$',
        '[$.class._visible]': 'visible$',
        '($.class._visible)': 'visible$',
        '[$.style.height.px]': 'height$',
        '($.style.height.px)': 'height$',
    },
})
export class TuiSheetWrapperDirective {
    // Trying to get overflow: visible as early as possible for Safari
    touched = false;

    @ContentChild(TuiSheetComponent)
    private readonly sheet?: TuiSheetComponent<unknown>;

    @ContentChild(TuiSheetComponent, {read: TUI_SHEET_DRAGGED})
    private readonly dragged$!: Observable<boolean>;

    @ContentChild(TuiSheetComponent, {read: TUI_SHEET_SCROLL})
    private readonly scroll$!: Observable<number>;

    constructor(
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(TUI_SHEET_OFFSET) private readonly offset: number,
    ) {}

    @tuiPure
    get overlay$(): Observable<boolean> {
        return this.scroll$.pipe(
            map(y => y + 16 > this.windowRef.innerHeight - this.offset),
        );
    }

    @tuiPure
    get visible$(): Observable<boolean> {
        return processDragged(this.dragged$, this.scroll$);
    }

    @tuiPure
    get height$(): Observable<number> {
        return this.scroll$.pipe(map(this.getHeight.bind(this)));
    }

    @HostListener('touchstart', ['true'])
    @HostListener('touchend', ['false'])
    onTouch(touched: boolean) {
        this.touched = touched;
    }

    private getHeight(value: number): number {
        return clamp(
            this.withImage(value) + OFFSET,
            OFFSET,
            this.windowRef.innerHeight - this.offset,
        );
    }

    private withImage(value: number): number {
        return !this.sheet?.imageStop || Math.floor(value) > this.sheet.imageStop
            ? value
            : value - this.sheet.imageHeight;
    }
}
