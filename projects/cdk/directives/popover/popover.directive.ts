import {Directive, inject, OnChanges} from '@angular/core';
import {tuiIfMap} from '@taiga-ui/cdk/observables';
import {TuiPopover, TuiPopoverService} from '@taiga-ui/cdk/services';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {distinctUntilChanged, endWith, ignoreElements, share, Subject} from 'rxjs';

@Directive()
export abstract class TuiPopoverDirective<T>
    extends PolymorpheusTemplate<TuiPopover<T, void>>
    implements OnChanges
{
    private readonly service = inject(TuiPopoverService<T>);
    private readonly open$ = new Subject<boolean>();

    options: Partial<T> = {};
    open = false;

    readonly openChange = this.open$.pipe(
        distinctUntilChanged(),
        tuiIfMap(() =>
            this.service.open(this, this.options).pipe(ignoreElements(), endWith(false)),
        ),
        share(),
    );

    ngOnChanges(): void {
        this.open$.next(this.open);
    }
}
