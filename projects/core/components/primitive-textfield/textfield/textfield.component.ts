import {ChangeDetectionStrategy, Component, ElementRef, Inject} from '@angular/core';
import {TuiIdService} from '@taiga-ui/cdk';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    TuiTextfieldController,
} from '@taiga-ui/core/directives';
import {TuiTextfieldHost} from '@taiga-ui/core/interfaces';
import {TUI_TEXTFIELD_HOST} from '@taiga-ui/core/tokens';

@Component({
    selector: 'input[tuiTextfield], textarea[tuiTextfield]',
    template: '',
    styleUrls: ['./textfield.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TEXTFIELD_CONTROLLER_PROVIDER],
    host: {
        type: 'text',
        '[attr.id]': 'id',
        '[attr.inputMode]': 'inputMode',
        '[attr.aria-invalid]': 'host.invalid',
        '[attr.disabled]': 'host.disabled || null',
        '[tabIndex]': 'host.focusable ? 0 : -1',
        '[readOnly]': 'host.readOnly',
        '[value]': 'host.value',
        '(input)': 'host.onValueChange($event.target.value)',
    },
})
export class TuiTextfieldComponent {
    constructor(
        @Inject(TUI_TEXTFIELD_HOST) readonly host: TuiTextfieldHost,
        @Inject(TUI_TEXTFIELD_WATCHED_CONTROLLER)
        readonly controller: TuiTextfieldController,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLInputElement>,
        @Inject(TuiIdService)
        private readonly idService: TuiIdService,
    ) {
        this.host.process(this.el.nativeElement);
    }

    get id(): string {
        return this.el.nativeElement.id || this.idService.generate();
    }

    get inputMode(): string {
        return this.el.nativeElement.inputMode || this.host.inputMode;
    }
}
