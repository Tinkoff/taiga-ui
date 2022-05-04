import {readFileSync, writeFileSync} from 'fs';
import {glob} from 'glob';

import {bumpTuiDeps} from './bump-tui-deps';

const INDENTATION = 4;

export function syncVersions(
    filesOrDirectories: string[],
    version: string,
    ignores: string[] = [],
): void {
    const patterns = filesOrDirectories.map(pattern =>
        pattern.endsWith('.json')
            ? pattern
            : `${pattern}/**/*(package.json|package-lock.json)`,
    );

    const files = patterns
        .map(pattern => glob.sync(pattern, {ignore: '**/node_modules/**'}))
        .flatMap(files => files);

    for (const file of files) {
        const packageJson = JSON.parse(readFileSync(file).toString());
        const {dependencies, peerDependencies, devDependencies} = packageJson;

        if (dependencies) {
            bumpTuiDeps({deps: dependencies, version, ignores});
        }

        if (peerDependencies) {
            bumpTuiDeps({
                deps: peerDependencies,
                version,
                isPeerDependency: true,
                ignores,
            });
        }

        if (devDependencies) {
            bumpTuiDeps({deps: devDependencies, version, ignores});
        }

        writeFileSync(
            file,
            `${JSON.stringify(
                {
                    ...packageJson,
                    ...('version' in packageJson && {
                        version: version,
                    }),
                },
                null,
                INDENTATION,
            )}\n`,
        );

        console.info('\x1b[32m%s\x1b[0m', `[synchronized]:`, file);
    }
}
