import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import type {TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

import {createAngularJson} from '../../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../../migration.json');

const COMPONENT_BEFORE = `
import { tuiIconAlertCircleOutline, tuiIconAlertLarge, tuiIconViewListLarge, tuiIconLinkedLarge } from '@taiga-ui/proprietary-icons';

@Component({templateUrl: './test.template.html'})
export class TestComponent {
    account = {
            icon: 'tuiIconAlertLarge',
            icon2: 'tuiIconViewListLarge',
            icon3: tuiIconLinkedLarge,
            color: 'white',
            background: 'var(--tui-support-12)',
        };

    icon = tuiIconAlertCircleOutline;
    icon2 = tuiIconAlertLarge;
    icon3 = tuiIconViewListLarge;
}
`;

const COMPONENT_AFTER = `import { tuiIconTdsAlertSmallPragmatic, tuiIconTdsExclamationMediumPragmatic } from "@taiga-ui/proprietary-tds-icons";

import { tuiIconViewListLarge, tuiIconLinkedLarge } from '@taiga-ui/proprietary-icons';

@Component({templateUrl: './test.template.html'})
export class TestComponent {
    account = {
            icon: 'tuiIconTdsExclamationMediumPragmatic',
            icon2: 'tuiIconViewListLarge',
            icon3: tuiIconLinkedLarge,
            color: 'white',
            background: 'var(--tui-support-12)',
        };

    icon = tuiIconTdsAlertSmallPragmatic;
    icon2 = tuiIconTdsExclamationMediumPragmatic;
    icon3 = tuiIconViewListLarge;
}
`;

const TEMPLATE_BEFORE = `
<tui-marker-icon
    new
    mode="error"
    src="tuiIconAlertLarge"
    [size]="iconSize"
></tui-marker-icon>
<custom-component [customAttr]="tuiIconArrowDown"></custom-component>
<tui-svg src='tuiIconViewListLarge' />
<tui-svg src="tuiIconLinkedLarge" />
`;

const TEMPLATE_AFTER = `
<tui-marker-icon
    new
    mode="error"
    src="tuiIconTdsExclamationMediumPragmatic"
    [size]="iconSize"
></tui-marker-icon>
<custom-component [customAttr]="tuiIconTdsArrowDownSmallPragmatic"></custom-component>
<tui-svg src='tuiIconViewListLarge' />
<tui-svg src="tuiIconLinkedLarge" />
`;

describe('ng-update', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it('should migrate icons in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV3_35',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate icons in ts files', async () => {
        const tree = await runner.runSchematic(
            'updateToV3_35',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts')).toEqual(COMPONENT_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT_BEFORE);

    createSourceFile('test/app/test.template.html', TEMPLATE_BEFORE);

    createAngularJson();
    createSourceFile(
        'package.json',
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/proprietary-icons": "~3.29.0"}}',
    );
}
