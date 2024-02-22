import {TuiDay} from '@taiga-ui/cdk';

export class TuiNamedDay {
    constructor(
        public readonly day: TuiDay,
        private readonly name: string,
        public readonly displayDay: TuiDay = day,
    ) {}

    public toString(): string {
        return this.name;
    }
}
