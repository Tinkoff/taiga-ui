import {
    AfterViewInit,
    Directive,
    ElementRef,
    Inject,
    Input,
    Optional,
    Self,
} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {POLLING_TIME} from '@taiga-ui/cdk/constants';
import {TuiFocusableElementAccessor} from '@taiga-ui/cdk/interfaces';
import {TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk/tokens';
import {setNativeFocused} from '@taiga-ui/cdk/utils/focus';
import {Observable, race, timer} from 'rxjs';
import {filter, map, take, throttleTime} from 'rxjs/operators';

const TIMEOUT = 1000;
const NG_ANIMATION_SELECTOR = '.ng-animating';

// @bad TODO: Consider removing iOS hacks
// TODO: in 3.0 change input name to tuiAutoFocus and handle empty string
@Directive({
    selector: '[tuiAutoFocus]',
})
export class TuiAutoFocusDirective implements AfterViewInit {
    @Input()
    autoFocus = true;

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Optional()
        @Self()
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        private readonly tuiFocusableComponent: TuiFocusableElementAccessor | null,
        @Inject(ANIMATION_FRAME) private readonly animationFrame$: Observable<number>,
    ) {}

    ngAfterViewInit() {
        if (!this.autoFocus) {
            return;
        }

        const element =
            this.tuiFocusableComponent?.nativeFocusableElement ||
            this.elementRef.nativeElement;

        race(
            timer(TIMEOUT),
            this.animationFrame$.pipe(
                throttleTime(POLLING_TIME),
                map(() => element.closest(NG_ANIMATION_SELECTOR)),
                filter(v => !v),
                take(1),
            ),
        ).subscribe(() => {
            setNativeFocused(element);
        });
    }
}
