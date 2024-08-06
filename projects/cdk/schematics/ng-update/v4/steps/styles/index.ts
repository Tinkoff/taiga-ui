/// <reference lib="es2021" />
import {getActiveProject, saveActiveProject} from 'ng-morph';

import {migrateShadowMixins} from './migrate-shadow-mixins';
import {migrateSpaceMixins} from './migrate-space-mixins';
import {migrateTextMixins} from './migrate-text-mixins';

export const TUI_RATING_WARNING =
    '// TODO: (Taiga UI migration): use css to customize rating gap and size. See https://taiga-ui.dev/components/rating#basic';

export function migrateStyles(): void {
    getActiveProject()
        ?.getSourceFiles('**/**.{less,sass,scss,css}')
        .forEach((sourceFile) => {
            let fullText = sourceFile.getFullText();

            fullText = fullText
                // eslint-disable-next-line
                .replace(/^(.*--tui-rating-size.*)$/gm, `${TUI_RATING_WARNING}\n$1`)
                // eslint-disable-next-line
                .replace(/^(.*--tui-rating-gap.*)$/gm, `${TUI_RATING_WARNING}\n$1`)
                .replaceAll('--tui-link-icon-size', '--tui-icon-size')
                .replaceAll(
                    '@taiga-ui/proprietary-core/styles/tinkoff-fonts',
                    '@taiga-ui/proprietary/styles/tbank-fonts',
                )
                .replaceAll(
                    '@taiga-ui/proprietary-core/styles/theme-tinkoff-2023',
                    '@taiga-ui/proprietary/styles/tbank-theme',
                )
                .replaceAll(
                    '@taiga-ui/proprietary-core/styles/theme-tinkoff-mobile-2023',
                    '@taiga-ui/proprietary/styles/tbank-theme-mobile.less',
                )
                .replaceAll(
                    '@taiga-ui/proprietary-core/styles/theme-tinkoff-mobile',
                    '@taiga-ui/proprietary/styles/tbank-theme-mobile.less',
                )
                .replaceAll(
                    '@taiga-ui/proprietary-core/styles/theme-tinkoff',
                    '@taiga-ui/proprietary/styles/tbank-theme',
                );

            const newFileContent = [
                migrateSpaceMixins,
                migrateTextMixins,
                migrateShadowMixins,
            ].reduce((text, migrate) => migrate(text), fullText);

            sourceFile.replaceWithText(newFileContent);
        });

    saveActiveProject();
}
