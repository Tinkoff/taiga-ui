import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {
    TUI_CARD_CVC_TEXTS,
    TUI_CARD_EXPIRY_TEXTS,
    TUI_CARD_NUMBER_TEXTS,
} from '@taiga-ui/addon-commerce/tokens';
import {tuiTypedFromEvent} from '@taiga-ui/cdk';
import {TUI_MEDIA} from '@taiga-ui/core';
import {combineLatest, Observable, of} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';

export interface TuiCardGroupedTexts {
    readonly cardNumberText: string;
    readonly cvcText: string;
    readonly expiryText: string;
}

/**
 * InputCardGrouped texts
 */
export const TUI_INPUT_CARD_GROUPED_TEXTS = new InjectionToken<
    Observable<TuiCardGroupedTexts>
>(`[TUI_INPUT_CARD_GROUPED_TEXTS]`, {
    factory: () => {
        const win = inject(WINDOW);
        const cardNumberTexts = inject(TUI_CARD_NUMBER_TEXTS);
        const expiryTexts = inject(TUI_CARD_EXPIRY_TEXTS);
        const cvcTexts = inject(TUI_CARD_CVC_TEXTS);
        const {desktopSmall} = inject(TUI_MEDIA);

        const media = win.matchMedia(
            `screen and (min-width: ${(desktopSmall - 1) / 16}em)`,
        );

        return tuiTypedFromEvent(media, `change`).pipe(
            startWith(null),
            switchMap(() =>
                combineLatest([
                    of(Number(media.matches)),
                    cardNumberTexts,
                    expiryTexts,
                    cvcTexts,
                ]),
            ),
            map(([index, cardNumber, expiry, cvcTexts]) => ({
                cardNumberText: cardNumber[index],
                cvcText: cvcTexts[index],
                expiryText: expiry[index],
            })),
        );
    },
});
