import {Directive, inject, Input, Output} from '@angular/core';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk/directives/active-zone';
import {tuiIfMap} from '@taiga-ui/cdk/observables';
import {TuiDestroyService, TuiObscuredService} from '@taiga-ui/cdk/services';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

/**
 * Directive that monitors element visibility
 */
@Directive({
    selector: '[tuiObscured]',
    providers: [TuiObscuredService, TuiDestroyService],
})
export class TuiObscuredDirective {
    private readonly activeZone = inject(TuiActiveZoneDirective, {optional: true});
    private readonly enabled$ = new Subject<boolean>();
    private readonly obscured$ = inject(TuiObscuredService, {self: true}).pipe(
        map(by => !!by?.every(el => !this.activeZone?.contains(el))),
    );

    @Input()
    set tuiObscuredEnabled(enabled: boolean) {
        this.enabled$.next(enabled);
    }

    @Output()
    readonly tuiObscured = this.enabled$.pipe(tuiIfMap(() => this.obscured$));
}
