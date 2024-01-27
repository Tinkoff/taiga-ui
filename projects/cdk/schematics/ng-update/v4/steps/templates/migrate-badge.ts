import {UpdateRecorder} from '@angular-devkit/schematics';
import {DevkitFileSystem} from 'ng-morph';
import {Attribute, Element, ElementLocation} from 'parse5';

import {findElementsByTagName} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {TemplateResource} from '../../../interfaces';

export function migrateBadge({
    resource,
    recorder,
    fileSystem,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    const elements = findElementsByTagName(template, 'tui-badge');

    elements.forEach(({attrs, sourceCodeLocation, childNodes}) => {
        if (!sourceCodeLocation) {
            return;
        }

        const valueAttr = attrs.find(
            attr => attr.name === '[value]' || attr.name === 'value',
        );

        // migration for icon-only badges
        if (!valueAttr) {
            addTodo(recorder, sourceCodeLocation, templateOffset);

            return;
        }

        const svg = (childNodes as Element[])?.find(node => node.nodeName === 'tui-svg');

        if (svg) {
            migrateIcon({svg, sourceCodeLocation, recorder, templateOffset});
        }

        migrateBadgeValue({
            valueAttr,
            sourceCodeLocation,
            recorder,
            templateOffset,
        });
    });
}

function migrateIcon({
    svg,
    sourceCodeLocation,
    recorder,
    templateOffset,
}: {
    svg: Element;
    sourceCodeLocation: ElementLocation;
    recorder: UpdateRecorder;
    templateOffset: number;
}): void {
    const src = svg.attrs?.find(attr => attr.name === 'src');
    const srcValue = src?.value;

    if (!srcValue) {
        return;
    }

    const insertTo = templateOffset + (sourceCodeLocation?.startTag?.endOffset || 0) - 1;

    recorder.insertRight(
        insertTo,
        `${src?.name === 'src' ? 'iconLeft' : '[iconLeft]'}="${srcValue}"`,
    );
    recorder.remove(
        svg.sourceCodeLocation?.startOffset || 0,
        (svg.sourceCodeLocation?.endOffset || 0) -
            (svg.sourceCodeLocation?.startOffset || 0),
    );
}

function migrateBadgeValue({
    valueAttr,
    sourceCodeLocation,
    recorder,
    templateOffset,
}: {
    valueAttr: Attribute;
    sourceCodeLocation: ElementLocation;
    recorder: UpdateRecorder;
    templateOffset: number;
}): void {
    const attrValue = valueAttr?.value;
    const insertTo = sourceCodeLocation?.endTag.startOffset;

    if (!attrValue || !insertTo) {
        return;
    }

    recorder.insertRight(
        insertTo + templateOffset,
        valueAttr.name === 'value' ? attrValue : `{{ ${attrValue} }}`,
    );

    const attrOffset = sourceCodeLocation?.attrs?.[valueAttr.name];

    if (attrOffset) {
        const {startOffset, endOffset} = attrOffset;

        recorder.remove(templateOffset + startOffset - 1, endOffset - startOffset + 1);
    }
}

function addTodo(
    recorder: UpdateRecorder,
    sourceCodeLocation: ElementLocation,
    templateOffset: number,
): void {
    recorder.insertRight(
        templateOffset + (sourceCodeLocation?.startTag.startOffset || 0),
        '<!-- Taiga migration Note: use "<tui-icon>" with "tuiBadge" directive for icon-only badges instead -->\n',
    );
}
