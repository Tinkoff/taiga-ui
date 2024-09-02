import {Directive, Input} from '@angular/core';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export const TUI_TEXTFIELD_CUSTOM_CONTENT = tuiCreateTokenFromFactory(
    () => new TuiTextfieldCustomContentDirective(),
);

@Directive({
    selector: '[tuiTextfieldCustomContent]',
    providers: [
        tuiProvide(TUI_TEXTFIELD_CUSTOM_CONTENT, TuiTextfieldCustomContentDirective),
    ],
})
export class TuiTextfieldCustomContentDirective extends AbstractTuiController {
    @Input('tuiTextfieldCustomContent')
    public customContent: PolymorpheusContent;
}
