import {Rule, Tree} from '@angular-devkit/schematics';
import {Schema} from '../schema';
import {addStylesToAngularJson} from '../../utils/add-styles';
import {
    TAIGA_GLOBAL_STYLE,
    TAIGA_THEME_FONTS,
    TAIGA_THEME_STYLE,
} from '../../constants/taiga-styles';

export function addTaigaStyles(options: Schema): Rule {
    return async (_: Tree, context) => {
        const taigaLocalStyles = [TAIGA_THEME_STYLE, TAIGA_THEME_FONTS];
        const taigaStyles = options.addGlobalStyles
            ? [...taigaLocalStyles, ...TAIGA_GLOBAL_STYLE]
            : taigaLocalStyles;

        return addStylesToAngularJson(options, context, taigaStyles);
    };
}
