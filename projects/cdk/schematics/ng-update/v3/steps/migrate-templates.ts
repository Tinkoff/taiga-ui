import {UpdateRecorder} from '@angular-devkit/schematics';
import {addProviderToComponent, DevkitFileSystem} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import {TuiSchema} from '../../../ng-add/schema';
import {addImportToClosestModule} from '../../../utils/add-import-to-closest-module';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {getNgComponents} from '../../../utils/angular/ng-component';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../../utils/colored-log';
import {TODO_MARK} from '../../../utils/insert-todo';
import {setupProgressLogger} from '../../../utils/progress';
import {replaceTag} from '../../../utils/replace-tag';
import {
    findAttributeOnElementWithAttrs,
    findAttributeOnElementWithTag,
    findElementsByTagName,
    findElementsInTemplateByFn,
    findElementsWithAttribute,
    hasElementAttribute,
} from '../../../utils/templates/elements';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {
    getInputPropertyOffsets,
    replaceInputPropertyByDirective,
} from '../../../utils/templates/ng-component-input-manipulations';
import {
    getPathFromTemplateResource,
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../utils/templates/template-resource';
import {TemplateResource} from '../../interfaces/template-resource';
import {replaceAttrValues} from '../../utils/templates/replace-attr-values';
import {
    ATTR_TO_DIRECTIVE,
    ATTRS_TO_REPLACE,
    INPUTS_TO_REMOVE,
    REPLACE_ATTR_VALUE,
    TAGS_TO_REPLACE,
    TEMPLATE_COMMENTS,
    TRUTHY_BOOLEAN_INPUT_TO_HTML_BINARY_ATTRIBUTE,
} from '../constants/templates';
import {migratePolymorpheus} from './migrate-polymorpheus';
import {migrateTextfieldController} from './migrate-textfield-controller';

export function migrateTemplates(fileSystem: DevkitFileSystem, options: TuiSchema): void {
    !options[`skip-logs`] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating templates...`);

    const componentWithTemplatesPaths = getComponentTemplates(ALL_TS_FILES);
    const actions = [
        replaceTags,
        replaceAttrs,
        replaceAttrsByDirective,
        replaceBreadcrumbs,
        replaceFieldError,
        addHTMLCommentTags,
        addEditorProviders,
        migrateTuiHideSelectedPipe,
        removeInputs,
        migratePolymorpheus,
        migrateTextfieldController,
        replaceInputValues,
        migrateBinaryAttributes,
        addWarningForFormatNumberPipe,
    ];

    const progressLog = setupProgressLogger({
        total: componentWithTemplatesPaths.length,
    });

    componentWithTemplatesPaths.forEach(resource => {
        const path = fileSystem.resolve(getPathFromTemplateResource(resource));
        const recorder = fileSystem.edit(path);

        actions.forEach((action, actionIndex) => {
            const isLastAction = actionIndex === actions.length - 1;

            !options[`skip-logs`] && progressLog(action.name, isLastAction);
            action({fileSystem, recorder, resource});
        });
    });

    !options[`skip-logs`] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} templates migrated \n`);
}

function replaceAttrsByDirective({
    fileSystem,
    resource,
}: {
    fileSystem: DevkitFileSystem;
    resource: TemplateResource;
}): void {
    ATTR_TO_DIRECTIVE.forEach(
        ({componentSelector, directive, directiveModule, filterFn, inputProperty}) => {
            replaceInputPropertyByDirective({
                componentSelector,
                directive,
                directiveModule,
                fileSystem,
                filterFn,
                inputProperty,
                templateResource: resource,
            });
        },
    );
}

function replaceAttrs({
    fileSystem,
    recorder,
    resource,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    ATTRS_TO_REPLACE.forEach(({from, to}) => {
        const offsets = [
            ...findAttributeOnElementWithTag(
                template,
                from.attrName,
                from.withTagNames || [],
                from.filterFn,
            ),
            ...findAttributeOnElementWithAttrs(
                template,
                from.attrName,
                from.withAttrsNames || [],
                from.filterFn,
            ),
        ];

        offsets.forEach(offset => {
            recorder.remove(offset + templateOffset, from.attrName.length);
            recorder.insertRight(offset + templateOffset, to.attrName);
        });
    });
}

function replaceTags({
    fileSystem,
    recorder,
    resource,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    TAGS_TO_REPLACE.forEach(({addAttributes, from, to}) => {
        const elements = findElementsByTagName(template, from);

        elements.forEach(({sourceCodeLocation}) => {
            if (sourceCodeLocation) {
                replaceTag(
                    recorder,
                    sourceCodeLocation,
                    from,
                    to,
                    templateOffset,
                    addAttributes,
                );
            }
        });
    });
}

function addHTMLCommentTags({
    fileSystem,
    recorder,
    resource,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    TEMPLATE_COMMENTS.forEach(({comment, tag, withAttr}) => {
        const elementStartOffsets = [
            ...findElementsWithAttribute(template, withAttr),
            ...findElementsWithAttribute(template, `[${withAttr}]`),
        ]
            .filter(el => el.tagName === tag)
            .map(el => (el.sourceCodeLocation?.startOffset || 0) + templateOffset);

        elementStartOffsets.forEach(offset => {
            recorder.insertRight(offset, `<!-- ${TODO_MARK} ${comment} -->\n`);
        });
    });
}

function replaceBreadcrumbs({
    fileSystem,
    recorder,
    resource,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    const elements = findElementsByTagName(template, `tui-breadcrumbs`);

    elements.forEach(element => {
        const itemsAttr = element.attrs.find(attr => attr.name === `[items]`);
        const itemsValue = itemsAttr?.value;
        const insertTo = element?.sourceCodeLocation?.startTag.endOffset;

        if (!itemsValue || !insertTo) {
            return;
        }

        recorder.insertRight(
            insertTo + templateOffset,
            `
    <ng-container *ngFor="let item of ${itemsValue}">
        <a
            *tuiItem
            tuiLink
            [routerLink]="item.routerLink"
        >
            {{ item.caption }}
        </a>
    </ng-container>`,
        );

        const {endOffset = 0, startOffset = 0} =
            element.sourceCodeLocation?.attrs?.[`[items]`] || {};

        recorder.remove(templateOffset + startOffset - 1, endOffset - startOffset + 1);
    });
}

function replaceFieldError({
    fileSystem,
    recorder,
    resource,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    const elements = findElementsByTagName(template, `tui-field-error`);

    elements.forEach(element => {
        const orderAttr = element.attrs.find(attr => attr.name === `[order]`);
        const orderVal = orderAttr?.value;

        if (orderAttr) {
            const {endOffset = 0, startOffset = 0} =
                element.sourceCodeLocation?.attrs?.[`[order]`] || {};

            recorder.remove(
                templateOffset + startOffset - 1,
                endOffset - startOffset + 1,
            );
        }

        const input = `[error]="${orderVal ?? `[]`} | tuiFieldError | async"`;

        replaceTag(
            recorder,
            element.sourceCodeLocation,
            `tui-field-error`,
            `tui-error`,
            templateOffset,
            [input],
        );
    });

    if (elements.length) {
        addImportToClosestModule(
            resource.componentPath,
            `TuiErrorModule`,
            `@taiga-ui/core`,
        );
    }
}

function addEditorProviders({
    fileSystem,
    resource,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const elements = findElementsByTagName(template, `tui-editor`).filter(
        element => !hasElementAttribute(element, `new`),
    );

    if (elements.length) {
        const componentPath = resource.componentPath;
        const componentClass = getNgComponents(componentPath);

        addProviderToComponent(
            componentClass[0],
            `{
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions
        }`,
            {unique: true},
        );

        addUniqueImport(componentPath, `TUI_EDITOR_EXTENSIONS`, `@taiga-ui/addon-editor`);
        addUniqueImport(
            componentPath,
            `defaultEditorExtensions`,
            `@taiga-ui/addon-editor`,
        );
    }
}

// eslint-disable-next-line unicorn/no-unsafe-regex
const HIDE_SELECTED_PIPE_WITH_ARGS_REG = /\|\s*tuiHideSelected(\s*:\s*[^|'"]*)?/gi;

function migrateTuiHideSelectedPipe({
    fileSystem,
    recorder,
    resource,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    const elementsWithPipe = findElementsInTemplateByFn(
        template,
        el => el.attrs?.some(attr => attr.value.match(HIDE_SELECTED_PIPE_WITH_ARGS_REG)),
    );

    elementsWithPipe.forEach(el => {
        const {name, value: oldValue} =
            el.attrs.find(attr => attr.value.match(HIDE_SELECTED_PIPE_WITH_ARGS_REG)) ||
            {};
        const attrLocations = el.sourceCodeLocation?.attrs;

        if (!name || !oldValue || !attrLocations) {
            return;
        }

        const newValue = oldValue.replace(
            HIDE_SELECTED_PIPE_WITH_ARGS_REG,
            `| tuiHideSelected`,
        );

        const {startOffset} = attrLocations[name];
        const valueOffset = templateOffset + startOffset + name.length + `="`.length;

        recorder.remove(valueOffset, oldValue.length);
        recorder.insertRight(valueOffset, newValue);
    });
}

function migrateBinaryAttributes({
    fileSystem,
    recorder,
    resource,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    TRUTHY_BOOLEAN_INPUT_TO_HTML_BINARY_ATTRIBUTE.forEach(attrName => {
        const elements = findElementsInTemplateByFn(
            template,
            el =>
                el.attrs?.some(
                    attr =>
                        attr.value === `true` &&
                        attr.name.includes(attrName.toLowerCase()),
                ),
        );

        elements.forEach(el => {
            const attrLocations = el.sourceCodeLocation?.attrs;

            if (!attrLocations) {
                return;
            }

            const {endOffset, startOffset} =
                attrLocations[`[${attrName.toLowerCase()}]`] ||
                attrLocations[attrName.toLowerCase()];

            recorder.remove(templateOffset + startOffset, endOffset - startOffset);
            recorder.insertRight(templateOffset + startOffset, attrName);
        });
    });
}

function addWarningForFormatNumberPipe({
    fileSystem,
    recorder,
    resource,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    if (template.match(/\|\s*tuiFormatNumber\s*:\s/gi)) {
        recorder.insertLeft(
            templateOffset && templateOffset + 1,
            `<!-- ${TODO_MARK} tuiFormatNumber pipe has new API. See https://taiga-ui.dev/pipes/format-number -->`,
        );
    }
}

function replaceInputValues({
    fileSystem,
    recorder,
    resource,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    replaceAttrValues({
        fileSystem,
        recorder,
        replaceableItems: REPLACE_ATTR_VALUE,
        resource,
    });
}

function removeInputs({
    fileSystem,
    recorder,
    resource,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    INPUTS_TO_REMOVE.forEach(({inputName, tags}) => {
        const offsets = [
            ...getInputPropertyOffsets(template, inputName, tags),
            ...getInputPropertyOffsets(template, `[${inputName}]`, tags),
        ];

        offsets.forEach(([start, end]) => {
            recorder.remove(start + templateOffset, end - start);
        });
    });
}
