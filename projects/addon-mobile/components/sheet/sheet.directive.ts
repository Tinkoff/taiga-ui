import {
    ChangeDetectorRef,
    Directive,
    Inject,
    Input,
    Output,
    TemplateRef,
} from '@angular/core';
import {tuiIfMap} from '@taiga-ui/cdk';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {Subject} from 'rxjs';
import {endWith, ignoreElements, share} from 'rxjs/operators';

import {TuiSheet} from './sheet';
import {TuiSheetService} from './sheet.service';
import {TuiSheetOptions} from './sheet-options';

/**
 * @deprecated: use {@link TuiSheetDialogDirective}
 * drop in v4.0
 */
@Directive({
    selector: 'ng-template[tuiSheet]',
})
export class TuiSheetDirective extends PolymorpheusTemplate<TuiSheet<never>> {
    private readonly open$ = new Subject<boolean>();

    @Input()
    tuiSheetOptions: Partial<TuiSheetOptions> = {};

    /**
     * @deprecated: use {@link tuiSheetOptions}
     */
    set options(val: Partial<TuiSheetOptions>) {
        this.tuiSheetOptions = val;
    }

    /**
     * @deprecated: use {@link tuiSheetOptions}
     */
    get options(): Partial<TuiSheetOptions> {
        return this.tuiSheetOptions;
    }

    @Input()
    set tuiSheet(open: boolean) {
        this.open$.next(open);
    }

    @Output()
    readonly tuiSheetChange = this.open$.pipe(
        tuiIfMap(() =>
            this.service
                .open(this, this.tuiSheetOptions)
                .pipe(ignoreElements(), endWith(false)),
        ),
        share(),
    );

    constructor(
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(TemplateRef) templateRef: TemplateRef<TuiSheet<never>>,
        @Inject(TuiSheetService) private readonly service: TuiSheetService,
    ) {
        super(templateRef, cdr);
    }
}
