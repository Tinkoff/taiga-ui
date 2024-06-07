import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiIdService, tuiInjectElement} from '@taiga-ui/cdk';
import type {TuiTextfieldHost} from '@taiga-ui/core';
import {TUI_TEXTFIELD_HOST} from '@taiga-ui/core';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
} from '@taiga-ui/legacy/directives';

@Component({
    selector: 'input[tuiTextfieldLegacy], textarea[tuiTextfieldLegacy]',
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
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly idService = inject(TuiIdService);
    protected readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    protected readonly host = inject<TuiTextfieldHost>(TUI_TEXTFIELD_HOST);

    constructor() {
        this.host.process(this.el);
    }

    protected get id(): string {
        return this.el.id || this.idService.generate();
    }

    protected get inputMode(): string {
        return this.el.inputMode || this.host.inputMode;
    }
}
