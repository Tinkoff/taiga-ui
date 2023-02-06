/**
 * @deprecated use {@link TuiStepStateT}
 */
export const enum TuiStepState {
    Normal = `normal`,
    Error = `error`,
    Pass = `pass`,
}

export type TuiStepStateT = 'error' | 'normal' | 'pass';
