import {
    AfterViewInit,
    ContentChildren,
    Directive,
    ElementRef,
    QueryList,
} from '@angular/core';
import {
    EMPTY_QUERY,
    tuiGetClosestFocusable,
    tuiItemsQueryListObservable,
    tuiPreventDefault,
    tuiPure,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {EMPTY, merge, Observable} from 'rxjs';
import {
    debounceTime,
    filter,
    map,
    mapTo,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';

// TODO: 3.0 Move into separate module
@Directive({
    selector: `tui-data-list[tuiDataListDropdownManager]`,
})
export class TuiDataListDropdownManagerDirective implements AfterViewInit {
    @ContentChildren(TuiDropdownDirective, {descendants: true})
    private readonly dropdowns: QueryList<TuiDropdownDirective> = EMPTY_QUERY;

    @ContentChildren(TuiDropdownDirective, {read: ElementRef, descendants: true})
    private readonly elements: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    ngAfterViewInit(): void {
        this.right$.subscribe(index => {
            this.tryToFocus(index);
        });

        merge(this.immediate$, this.debounce$)
            .pipe(
                switchMap(active => {
                    this.dropdowns.forEach((dropdown, index) => {
                        dropdown.open = index === active;
                    });

                    const element = this.elements.toArray()[active];
                    const dropdown = this.dropdowns.toArray()[active];

                    if (!element || !dropdown || !dropdown.dropdownBoxRef) {
                        return EMPTY;
                    }

                    const {nativeElement} = dropdown.dropdownBoxRef.location;
                    const mouseEnter$ = tuiTypedFromEvent(
                        nativeElement,
                        `mouseenter`,
                    ).pipe(take(1));
                    const esc$ = merge(
                        tuiTypedFromEvent(element.nativeElement, `keydown`),
                        tuiTypedFromEvent(nativeElement, `keydown`),
                    ).pipe(filter(({keyCode}) => keyCode === 27));

                    return merge(mouseEnter$, esc$).pipe(
                        tap(event => {
                            if (dropdown.dropdownBoxRef) {
                                event.stopPropagation();
                            }

                            element.nativeElement.focus();
                            // TODO: iframe warning
                            dropdown.open = event instanceof MouseEvent;
                        }),
                    );
                }),
            )
            .subscribe();
    }

    @tuiPure
    private get elements$(): Observable<readonly HTMLElement[]> {
        return tuiItemsQueryListObservable(this.elements).pipe(
            map(array => array.map(({nativeElement}) => nativeElement)),
            shareReplay({bufferSize: 1, refCount: true}),
        );
    }

    @tuiPure
    private get right$(): Observable<number> {
        return this.elements$.pipe(
            switchMap(elements =>
                merge(
                    ...elements.map((element, index) =>
                        tuiTypedFromEvent(element, `keydown`).pipe(
                            filter(({keyCode}) => keyCode === 39),
                            tuiPreventDefault(),
                            mapTo(index),
                        ),
                    ),
                ),
            ),
        );
    }

    @tuiPure
    private get immediate$(): Observable<number> {
        return this.elements$.pipe(
            switchMap(elements =>
                merge(
                    ...elements.map((element, index) =>
                        tuiTypedFromEvent(element, `click`).pipe(mapTo(index)),
                    ),
                ),
            ),
        );
    }

    @tuiPure
    private get debounce$(): Observable<number> {
        return this.elements$.pipe(
            switchMap(elements =>
                merge(
                    ...elements.map((element, index) =>
                        merge(
                            tuiTypedFromEvent(element, `focus`),
                            tuiTypedFromEvent(element, `blur`),
                        ).pipe(
                            filter(({relatedTarget}) =>
                                this.notInDropdown(relatedTarget, index),
                            ),
                            map(({type}) => (type === `focus` ? index : NaN)),
                        ),
                    ),
                ),
            ),
            debounceTime(300),
        );
    }

    private notInDropdown(element: EventTarget | null, index: number): boolean {
        const dropdown = this.dropdowns.toArray()[index];

        return (
            !dropdown ||
            !dropdown.dropdownBoxRef ||
            !dropdown.dropdownBoxRef.location.nativeElement.contains(element)
        );
    }

    private tryToFocus(index: number): void {
        const dropdown = this.dropdowns.toArray()[index];
        const content = dropdown?.dropdownBoxRef?.instance.contentElementRef;

        if (!content) {
            return;
        }

        const item = tuiGetClosestFocusable(
            content.nativeElement,
            false,
            content.nativeElement,
        );

        if (item) {
            item.focus();
        }
    }
}
