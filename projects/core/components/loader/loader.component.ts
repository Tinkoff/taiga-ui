import {
    ApplicationRef,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {TUI_IS_IOS, tuiIsSafari} from '@taiga-ui/cdk';
import {tuiSizeBigger} from '@taiga-ui/core/utils/miscellaneous';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_LOADER_OPTIONS, TuiLoaderOptions} from './loader.options';

@Component({
    selector: 'tui-loader',
    templateUrl: './loader.template.html',
    styleUrls: ['./loader.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLoaderComponent {
    @Input()
    size = this.options.size;

    @Input()
    inheritColor = this.options.inheritColor;

    @Input()
    overlay = this.options.overlay;

    @Input()
    textContent: PolymorpheusContent;

    @Input()
    set showLoader(value: boolean) {
        // @bad TODO: https://github.com/angular/angular/issues/32083 think of a better way
        if (value) {
            this.cd.markForCheck();
            /**
             * recalculated HostBinding getters
             */
            void Promise.resolve().then(() => this.app.tick());
        }

        this.loading = value;
    }

    @HostBinding('class._loading')
    loading = true;

    readonly isApple = tuiIsSafari(this.el.nativeElement) || this.isIos;

    constructor(
        @Inject(ApplicationRef) private readonly app: ApplicationRef,
        @Inject(ChangeDetectorRef) private readonly cd: ChangeDetectorRef,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TUI_IS_IOS) private readonly isIos: boolean,
        @Inject(TUI_LOADER_OPTIONS) private readonly options: TuiLoaderOptions,
    ) {}

    get hasOverlay(): boolean {
        return this.overlay && this.loading;
    }

    get hasText(): boolean {
        return !!this.textContent;
    }

    get isHorizontal(): boolean {
        return !tuiSizeBigger(this.size);
    }
}
