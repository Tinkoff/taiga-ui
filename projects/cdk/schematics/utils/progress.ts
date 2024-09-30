/// <reference types="node" />
import {clearLine, cursorTo} from 'node:readline';

import {SMALL_TAB_SYMBOL, SUCCESS_SYMBOL} from 'ng-morph';

import {tuiIsCI} from './is-ci';

export function setupProgressLogger({
    total,
    prefix = '',
    tabs = 2,
}: {
    prefix?: string;
    tabs?: number;
    total: number;
}): (message: string, incrementIndex?: boolean) => void {
    let i = 1;

    return (message: string, incrementIndex = true): void => {
        if (tuiIsCI()) {
            return;
        }

        const isLast = i === total;
        const progressLog = `(${i} / ${total}) ${prefix} ${
            isLast ? SUCCESS_SYMBOL : message
        }`;

        i = incrementIndex ? i + 1 : i;

        clearLine(process.stdout, 0);
        cursorTo(process.stdout, 0);
        process.stdout.write(SMALL_TAB_SYMBOL.repeat(tabs) + progressLog);

        if (isLast && incrementIndex) {
            process.stdout.write('\n');
        }
    };
}
