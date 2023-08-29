import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';

export const tuiAssert = {
    get assert(): (assertion: boolean, ...args: unknown[]) => void {
        return ngDevMode
            ? Function.prototype.bind.call(console.assert, console)
            : EMPTY_FUNCTION;
    },
    /**
     * @deprecated:
     * The current field no longer matters as
     * it will not be provided in production
     */
    enabled: false,
};
