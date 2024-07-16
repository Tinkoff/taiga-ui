import type {DevkitFileSystem} from 'ng-morph';
import {addMethods, getNgComponents} from 'ng-morph';

import {ALL_TS_FILES} from '../../../../constants';
import type {TuiSchema} from '../../../../ng-add/schema';
import {addUniqueImport} from '../../../../utils/add-unique-import';
import {setupProgressLogger} from '../../../../utils/progress';
import {getComponentTemplates} from '../../../../utils/templates/get-component-templates';
import {replaceInputProperty} from '../../../../utils/templates/ng-component-input-manipulations';
import type {TemplateResource} from '../../../interfaces/template-resource';
import {saveTemplates} from '../../../utils/save-templates';

const MIN_LABELS_MIGRATION_METHOD_NAME = 'tuiMigrationInputRangeMinLabel';
const MAX_LABELS_MIGRATION_METHOD_NAME = 'tuiMigrationInputRangeMaxLabel';

function replaceMinLabel(
    templateResource: TemplateResource,
    fileSystem: DevkitFileSystem,
    modifiedComponentStorage: Set<string>,
): void {
    const wasModified = replaceInputProperty({
        templateResource,
        fileSystem,
        componentSelector: 'tui-input-range',
        from: 'minLabel',
        to: '[leftValueContent]',
        newValue: MIN_LABELS_MIGRATION_METHOD_NAME,
    });

    if (wasModified) {
        modifiedComponentStorage.add(templateResource.componentPath);
    }
}

function replaceMaxLabel(
    templateResource: TemplateResource,
    fileSystem: DevkitFileSystem,
    modifiedComponentStorage: Set<string>,
): void {
    const wasModified = replaceInputProperty({
        templateResource,
        fileSystem,
        componentSelector: 'tui-input-range',
        from: 'maxLabel',
        to: '[rightValueContent]',
        newValue: MAX_LABELS_MIGRATION_METHOD_NAME,
    });

    if (wasModified) {
        modifiedComponentStorage.add(templateResource.componentPath);
    }
}

function addMinMaxLabelMethod(
    componentPath: string,
    methodName: string,
    methodCode: string[] | string,
): void {
    const [ngComponent] = getNgComponents(componentPath);

    if (ngComponent) {
        addUniqueImport(
            ngComponent.getSourceFile().getFilePath(),
            'TuiContextWithImplicit',
            '@taiga-ui/cdk',
        );

        addMethods(ngComponent, {
            name: methodName,
            returnType: 'string',
            parameters: [{name: 'context', type: 'TuiContextWithImplicit<number>'}],
            statements: methodCode,
        });
    }
}

export function migrateInputRange(
    fileSystem: DevkitFileSystem,
    options: TuiSchema,
): void {
    const templateResources = getComponentTemplates(ALL_TS_FILES);
    const COMPONENTS_WITH_MIN_LABELS = new Set<string>();
    const COMPONENTS_WITH_MAX_LABELS = new Set<string>();

    let progressLog = setupProgressLogger({
        total: templateResources.length,
        prefix: '[replaceMinMaxLabel]',
    });

    templateResources.forEach((templateResource) => {
        !options['skip-logs'] && progressLog(templateResource.componentPath);
        replaceMinLabel(templateResource, fileSystem, COMPONENTS_WITH_MIN_LABELS);
        replaceMaxLabel(templateResource, fileSystem, COMPONENTS_WITH_MAX_LABELS);
    });

    saveTemplates(fileSystem);

    progressLog = setupProgressLogger({
        total: COMPONENTS_WITH_MIN_LABELS.size,
        prefix: '[COMPONENTS_WITH_MIN_LABELS]',
    });

    Array.from(COMPONENTS_WITH_MIN_LABELS).forEach((componentPath) => {
        !options['skip-logs'] && progressLog(componentPath);
        addMinMaxLabelMethod(componentPath, MIN_LABELS_MIGRATION_METHOD_NAME, [
            'const currentValue = context.$implicit;',
            'const minValue = 0; // TODO: (Taiga UI migration) replace with the MIN value of the input-range',
            'const minLabelText = "Min"; // TODO: (Taiga UI migration) replace with the required label',
            'if (currentValue === minValue) return minLabelText;',
            'return String(currentValue);',
        ]);
    });

    progressLog = setupProgressLogger({
        total: COMPONENTS_WITH_MAX_LABELS.size,
        prefix: '[COMPONENTS_WITH_MAX_LABELS]',
    });

    Array.from(COMPONENTS_WITH_MAX_LABELS).forEach((componentPath) => {
        !options['skip-logs'] && progressLog(componentPath);
        addMinMaxLabelMethod(componentPath, MAX_LABELS_MIGRATION_METHOD_NAME, [
            'const currentValue = context.$implicit;',
            'const maxValue = 100; // TODO: (Taiga UI migration) replace with the MAX value of the input',
            'const maxLabelText = "Max"; // TODO: (Taiga UI migration) replace with the required label',
            'if (currentValue === maxValue) return maxLabelText;',
            'return String(currentValue);',
        ]);
    });
}
