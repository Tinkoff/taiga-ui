import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {
    TUI_CARD_CVC_TEXTS,
    TUI_CARD_EXPIRY_TEXTS,
    TUI_CARD_NUMBER_TEXTS,
} from '@taiga-ui/addon-commerce/tokens';
import {tuiTypedFromEvent} from '@taiga-ui/cdk';
import {TUI_MEDIA} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {combineLatest, of} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';

export interface TuiCardGroupedTexts {
    readonly cardNumberText: string;
    readonly expiryText: string;
    readonly cvcText: string;
}

/**
 * InputCardGrouped texts
 */
export const TUI_INPUT_CARD_GROUPED_TEXTS = new InjectionToken<
    Observable<TuiCardGroupedTexts>
>(`[TUI_INPUT_CARD_GROUPED_TEXTS]`, {
    factory: () => {
        const windowRef = inject(WINDOW);
        const cardNumberTexts = inject(TUI_CARD_NUMBER_TEXTS);
        const expiryTexts = inject(TUI_CARD_EXPIRY_TEXTS);
        const cvcTexts = inject(TUI_CARD_CVC_TEXTS);
        const {desktopSmall} = inject(TUI_MEDIA);

        const media = windowRef.matchMedia(
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
                expiryText: expiry[index],
                cvcText: cvcTexts[index],
            })),
        );
    },
});
