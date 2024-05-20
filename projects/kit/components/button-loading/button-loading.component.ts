import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    inject,
    Input,
} from '@angular/core';
import {tuiIsString} from '@taiga-ui/cdk';
import type {TuiSizeS} from '@taiga-ui/core';
import {TUI_BUTTON_OPTIONS, TuiLoaderComponent, tuiSizeBigger} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: '[tuiButton][loading],[tuiIconButton][loading]',
    imports: [TuiLoaderComponent],
    template: `
        <ng-content />
        <tui-loader
            aria-live="polite"
            role="status"
            class="t-loader"
            [inheritColor]="true"
            [showLoader]="!!loading"
            [size]="loaderSize"
            [textContent]="label"
        />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.aria-disabled]': 'loading',
        '[class._loading]': 'loading',
    },
})
export class TuiButtonLoadingComponent {
    private readonly options = inject(TUI_BUTTON_OPTIONS);

    @Input()
    public size = this.options.size;

    @Input()
    public loading: boolean | string | null = false;

    protected get loaderSize(): TuiSizeS {
        return tuiSizeBigger(this.size) ? 'm' : 's';
    }

    protected get label(): string {
        return tuiIsString(this.loading) ? this.loading : '';
    }

    @HostListener('click.capture', ['$event'])
    protected onClick(event: MouseEvent): void {
        if (this.loading) {
            event.stopPropagation();
        }
    }
}
