import {CommonExecOptions, execSync} from 'child_process';

import {infoLog} from '../../projects/cdk/schematics/utils/colored-log';

export function execute(shell: string, options?: Partial<CommonExecOptions>): string {
    infoLog(`ᐅ ${shell}`);

    return execSync(
        shell,
        options ?? {
            encoding: `utf8`,
            stdio: `inherit`,
        },
    )
        ?.toString()
        .trim();
}
