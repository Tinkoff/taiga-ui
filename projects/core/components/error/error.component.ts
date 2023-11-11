import {AnimationOptions} from '@angular/animations';
import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    Inject,
    Input,
} from '@angular/core';
import {tuiIsString, TuiValidationError} from '@taiga-ui/cdk';
import {tuiFadeIn, tuiHeightCollapse} from '@taiga-ui/core/animations';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {
    TUI_ANIMATION_OPTIONS,
    TUI_DEFAULT_ERROR_MESSAGE,
    TUI_MODE,
} from '@taiga-ui/core/tokens';
import {TuiBrightness} from '@taiga-ui/core/types';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-error',
    templateUrl: './error.template.html',
    styleUrls: ['./error.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER],
    animations: [tuiHeightCollapse, tuiFadeIn],
})
export class TuiErrorComponent {
    private currentError: TuiValidationError | null = null;

    /**
     * @deprecated use {@link error}
     */
    set errorSetter(error: TuiValidationError | string | null) {
        this.error = error;
    }

    @Input()
    set error(error: TuiValidationError | string | null) {
        this.currentError = tuiIsString(error) ? new TuiValidationError(error) : error;
    }

    get error(): TuiValidationError | null {
        return this.currentError;
    }

    visible = true;

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) readonly animation: AnimationOptions,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_DEFAULT_ERROR_MESSAGE)
        readonly defaultErrorMessage$: Observable<string>,
    ) {}

    @HostListener('animationcancel.self', ['false'])
    @HostListener('animationstart.self', ['true'])
    onAnimation(visible: boolean): void {
        this.visible = visible;
    }
}
