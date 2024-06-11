import type {DevkitFileSystem} from '@taiga-ui/morph';
import {createProject, saveActiveProject, setActiveProject} from '@taiga-ui/morph';
import type {Element} from 'parse5/dist/tree-adapters/default';

import {ALL_FILES, ALL_TS_FILES} from '../../../constants';
import type {TuiSchema} from '../../../ng-add/schema';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../../utils/colored-log';
import {projectRoot} from '../../../utils/project-root';
import {findElementsWithAttribute} from '../../../utils/templates/elements';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {
    getPathFromTemplateResource,
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../utils/templates/template-resource';
import type {TemplateResource} from '../../interfaces/template-resource';

const PROPERTY_FOR_DEPRECATED_PIPES = '[color]';

export const DEPRECATED_PROGRESS_PIPES_REG =
    /\s*\|\s*tuiProgressColorSegments(Async\s*\|\s*async)?/gi;

export function replaceProgressColorSegmentsPipe(
    templateResource: TemplateResource,
    fileSystem: DevkitFileSystem,
): void {
    const template = getTemplateFromTemplateResource(templateResource, fileSystem);
    const templateOffset = getTemplateOffset(templateResource);
    const path = fileSystem.resolve(getPathFromTemplateResource(templateResource));
    const recorder = fileSystem.edit(path);

    findElementsWithAttribute(template, PROPERTY_FOR_DEPRECATED_PIPES)
        .filter(isProgressWithDeprecatedPipe)
        .forEach(progressEl => {
            const oldValue =
                progressEl.attrs.find(attr => attr.name === PROPERTY_FOR_DEPRECATED_PIPES)
                    ?.value || '';
            const newValue = oldValue.replaceAll(DEPRECATED_PROGRESS_PIPES_REG, '');

            const attrLocations = progressEl.sourceCodeLocation?.attrs;

            if (attrLocations) {
                const {startOffset, endOffset} =
                    attrLocations[PROPERTY_FOR_DEPRECATED_PIPES];

                recorder.remove(templateOffset + startOffset, endOffset - startOffset);
                recorder.insertRight(
                    templateOffset + startOffset,
                    `[tuiProgressColorSegments]="${newValue}"`,
                );
            }
        });
}

export function isProgressWithDeprecatedPipe(element: Element): boolean {
    return (
        element.tagName === 'progress' &&
        element.attrs.some(
            attr =>
                attr.name === PROPERTY_FOR_DEPRECATED_PIPES &&
                attr.value.match(DEPRECATED_PROGRESS_PIPES_REG),
        )
    );
}

export function migrateProgress(fileSystem: DevkitFileSystem, options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating progress bars...`);

    getComponentTemplates(ALL_TS_FILES).forEach(templateResource =>
        replaceProgressColorSegmentsPipe(templateResource, fileSystem),
    );

    fileSystem.commitEdits();
    saveActiveProject();
    setActiveProject(createProject(fileSystem.tree, projectRoot(), ALL_FILES));

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} progress bars migrated \n`);
}
