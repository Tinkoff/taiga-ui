import {
    Directive,
    ElementRef,
    Inject,
    Input,
    NgZone,
    OnDestroy,
    Optional,
    Output,
    SkipSelf,
} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk/decorators';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {TUI_ACTIVE_ELEMENT} from '@taiga-ui/cdk/tokens';
import {tuiArrayRemove} from '@taiga-ui/cdk/utils';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map, skip, startWith} from 'rxjs/operators';

@Directive({
    selector:
        '[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)',
    exportAs: 'tuiActiveZone',
    host: {
        '(document:mousedown.silent)': '(0)',
    },
})
export class TuiActiveZoneDirective implements OnDestroy {
    private subActiveZones: readonly TuiActiveZoneDirective[] = [];

    private tuiActiveZoneParent: TuiActiveZoneDirective | null = null;

    @Input('tuiActiveZoneParent')
    set tuiActiveZoneParentSetter(zone: TuiActiveZoneDirective | null) {
        this.setZone(zone);
    }

    @Output()
    readonly tuiActiveZoneChange = this.active$.pipe(
        map(element => !!element && this.contains(element)),
        startWith(false),
        distinctUntilChanged(),
        skip(1),
        tuiZoneOptimized(this.zone),
    );

    constructor(
        @Inject(TUI_ACTIVE_ELEMENT)
        private readonly active$: Observable<Element | null>,
        @Inject(NgZone) private readonly zone: NgZone,
        @Inject(ElementRef) private readonly el: ElementRef<Element>,
        @Optional()
        @SkipSelf()
        @Inject(TuiActiveZoneDirective)
        private readonly directParentActiveZone: TuiActiveZoneDirective | null,
    ) {
        this.directParentActiveZone?.addSubActiveZone(this);
    }

    ngOnDestroy(): void {
        this.directParentActiveZone?.removeSubActiveZone(this);
        this.tuiActiveZoneParent?.removeSubActiveZone(this);
    }

    contains(node: Node): boolean {
        return (
            this.el.nativeElement.contains(node) ||
            this.subActiveZones.some(
                (item, index, array) =>
                    array.indexOf(item) === index && item.contains(node),
            )
        );
    }

    @tuiPure
    private setZone(zone: TuiActiveZoneDirective | null): void {
        this.tuiActiveZoneParent?.removeSubActiveZone(this);
        zone?.addSubActiveZone(this);
        this.tuiActiveZoneParent = zone;
    }

    private addSubActiveZone(activeZone: TuiActiveZoneDirective): void {
        this.subActiveZones = [...this.subActiveZones, activeZone];
    }

    private removeSubActiveZone(activeZone: TuiActiveZoneDirective): void {
        this.subActiveZones = tuiArrayRemove(
            this.subActiveZones,
            this.subActiveZones.indexOf(activeZone),
        );
    }
}
