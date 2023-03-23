import {
    Directive,
    ElementRef,
    Inject,
    Input,
    Output,
    Renderer2,
    Self,
} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/addon-editor/abstract';
import {
    INITIALIZATION_TIPTAP_CONTAINER,
    TIPTAP_EDITOR,
} from '@taiga-ui/addon-editor/tokens';
import {TuiDestroyService} from '@taiga-ui/cdk';
import type {Editor} from '@tiptap/core';
import type {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {TuiTiptapEditorService} from './tiptap-editor.service';

@Directive({
    selector: '[tuiTiptapEditor]',
    providers: [TuiDestroyService],
})
export class TuiTiptapEditorDirective {
    @Input()
    set value(value: string) {
        if (value !== this.editor.html) {
            this.editor.setValue(value);
        }
    }

    @Input()
    set editable(editable: boolean) {
        this.editor.editable = editable;
    }

    @Output()
    readonly valueChange = this.editor.valueChange$;

    @Output()
    readonly stateChange = this.editor.stateChange$;

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(INITIALIZATION_TIPTAP_CONTAINER) readonly editorContainer: HTMLElement,
        @Inject(TIPTAP_EDITOR) private readonly editorLoaded$: Observable<Editor>,
        @Self() @Inject(TuiDestroyService) destroy$: TuiDestroyService,
    ) {
        this.editorLoaded$.pipe(takeUntil(destroy$)).subscribe(() => {
            this.renderer.appendChild(
                this.elementRef.nativeElement,
                this.editorContainer,
            );
        });
    }
}
