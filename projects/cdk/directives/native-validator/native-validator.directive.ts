import {Directive, ElementRef, HostListener, inject, Input, NgZone} from '@angular/core';
import type {AbstractControl, Validator} from '@angular/forms';
import {NG_VALIDATORS} from '@angular/forms';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {TuiDestroyService} from '@taiga-ui/cdk/services';
import {tuiProvide} from '@taiga-ui/cdk/utils';
import {takeUntil, timer} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiNativeValidator]',
    providers: [
        tuiProvide(NG_VALIDATORS, TuiNativeValidatorDirective, true),
        TuiDestroyService,
    ],
})
export class TuiNativeValidatorDirective implements Validator {
    private readonly zone = inject(NgZone);
    private readonly host: HTMLInputElement = inject(ElementRef).nativeElement;
    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    private control?: AbstractControl;

    @Input()
    public tuiNativeValidator = 'Invalid';

    public validate(control: AbstractControl): null {
        this.control = control;

        timer(0)
            .pipe(tuiZonefree(this.zone), takeUntil(this.destroy$))
            .subscribe(() => this.handleValidation());

        return null;
    }

    @HostListener('blur')
    protected handleValidation(): void {
        this.el.setCustomValidity?.(
            this.control?.touched && this.control?.invalid ? this.tuiNativeValidator : '',
        );
    }

    private get el(): HTMLInputElement {
        return this.host.querySelector('input,textarea,select') || this.host;
    }
}
