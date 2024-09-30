import {resolve} from 'node:path';

import {infoLog} from 'ng-morph';

import {version} from '../package.json';
import {execute} from './shared/execute';
import {IGNORABLE_TAIGA_PACKAGES} from './shared/ignorable-packages';
import {overwriteVersion} from './shared/overwrite-version';
import {parseVersion} from './shared/parse-version';
import {syncVersions} from './shared/sync-versions';

(function main(): void {
    const type = 'canary';
    const commit = execute('git rev-parse HEAD', {}).slice(0, 7);
    const {major, minor, patch} = parseVersion(version);

    // construct new version from base version x.y.z to become x.y.z-{type}.{shortSha}
    const newVersion = `${major}.${minor}.${patch}-${type}.${commit}`;

    infoLog(`New dev version - ${newVersion}`);

    syncVersions(['./dist'], newVersion, IGNORABLE_TAIGA_PACKAGES);

    overwriteVersion(resolve('./projects/cdk/constants/version.ts'), newVersion);

    execute(
        `npx nx run-many -t publish --customTag=${type} --customVersion=${newVersion}`,
    );
})();
