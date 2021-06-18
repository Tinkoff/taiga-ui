import {JsonArray, workspaces} from '@angular-devkit/core';
import {Rule, Tree} from '@angular-devkit/schematics';
import {updateWorkspace} from '@schematics/angular/utility/workspace';
import {getWorkspaceAndProject} from '../../utils/get-project';
import {getProjectTargetOptions} from '../../utils/get-project-target-options';
import {Schema} from '../schema';

const ICON_ASSETS = {
    glob: '**/*',
    input: 'projects/icons/src',
    output: 'assets/taiga-ui/icons',
};

export function addTaigaIcons(options: Schema): Rule {
    return async (tree: Tree) => {
        const {project, workspace} = await getWorkspaceAndProject(options, tree);

        return addTaigaStylesToAngularJson(workspace, project);
    };
}

export function addTaigaStylesToAngularJson(
    workspace: workspaces.WorkspaceDefinition,
    project: workspaces.ProjectDefinition,
): Rule {
    const targetOptions = getProjectTargetOptions(project, 'build');
    const assets = targetOptions.assets as JsonArray | undefined;

    if (!assets) {
        targetOptions.assets = [ICON_ASSETS];
    } else {
        targetOptions.assets = [...assets, ICON_ASSETS];
    }

    return updateWorkspace(workspace);
}
