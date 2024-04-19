import type {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {getPackageJsonDependency, saveActiveProject} from 'ng-morph';

import type {TuiSchema} from '../../ng-add/schema';
import {
    FINISH_SYMBOL,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    titleLog,
} from '../../utils/colored-log';
import {replaceImports} from '../steps/icons/replace-imports';
import {getFileSystem} from '../utils/get-file-system';
import {replaceText} from '../utils/replace-text';
import {ICONS_TS} from './constants/constants';
import {ICONS} from './constants/icons';

function hasProprietaryIcons(tree: Tree): boolean {
    return !!getPackageJsonDependency(tree, '@taiga-ui/proprietary-icons');
}

// TODO: drop in v4.x
export function updateToV3_35(options: TuiSchema): Rule {
    return (tree: Tree, _: SchematicContext) => {
        if (!hasProprietaryIcons(tree)) {
            !options['skip-logs'] &&
                titleLog(`${FINISH_SYMBOL} No migrations required\n`);

            return;
        }

        const fileSystem = getFileSystem(tree);

        replaceImports(ICONS_TS, options);

        !options['skip-logs'] &&
            infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing strings...`);
        replaceText(
            ICONS.map(({from, to}) => ({from: new RegExp(`\\b${from}\\b`, 'g'), to})),
        );

        fileSystem.commitEdits();
        saveActiveProject();

        !options['skip-logs'] &&
            titleLog(`${FINISH_SYMBOL} Icons successfully migrated \n`);
    };
}
