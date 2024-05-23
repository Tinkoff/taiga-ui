import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Observer} from 'rxjs';

export interface TuiTableBarOptions {
    readonly adaptive?: boolean;
    readonly hasCloseButton?: boolean;
    // TODO: rename before 4.0
    readonly mode?: 'onDark' | 'onLight';
}

export class TuiTableBar {
    public readonly adaptive: boolean;

    public readonly hasCloseButton: boolean;

    // TODO: rename before 4.0
    public readonly mode: 'onDark' | 'onLight';

    constructor(
        private readonly observer: Observer<never>,
        public readonly content: PolymorpheusContent<Record<string, any>>,
        options: TuiTableBarOptions = {},
    ) {
        const {mode = 'onLight', hasCloseButton = false, adaptive = false} = options;

        this.mode = mode;
        this.hasCloseButton = hasCloseButton;
        this.adaptive = adaptive;
    }

    public close(): void {
        this.observer.complete();
    }
}
