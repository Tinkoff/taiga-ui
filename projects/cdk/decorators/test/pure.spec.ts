import {tuiPure} from '@taiga-ui/cdk';

/** TODO this tests does not cover typescript@^5 and experimentalDecorators: false */

describe('tuiPure', () => {
    it('calls getter only once and then sets result as a value property on the object', () => {
        let count = 0;

        class TestClass {
            @tuiPure
            public get someGetter(): string {
                count++;

                return 'test';
            }
        }

        const testObject = new TestClass();

        expect(count).toBe(0);
        expect(testObject.someGetter).toBe('test');
        expect(count).toBe(1);
        expect(testObject.someGetter).toBe('test');
        expect(testObject.someGetter).toBe('test');
        expect(count).toBe(1);
    });

    it('memoizes function result', () => {
        const name = 'Alex';
        const age = 30;

        class TestClass {
            @tuiPure
            public combine(name: string, age: number): [string, number] {
                return [name, age];
            }
        }

        const testObject = new TestClass();
        const result = testObject.combine(name, age);

        expect(testObject.combine(name, age)).toBe(result);
    });

    it('has access to this', () => {
        const name = 'Alex';
        const age = 30;

        class TestClass {
            constructor(public readonly prefix: string) {}

            @tuiPure
            public combine(name: string, age: number): [string, string, number] {
                return [this.prefix, name, age];
            }
        }

        const testObject = new TestClass('awesome');
        const result = testObject.combine(name, age);

        expect(testObject.combine(name, age)).toBe(result);
    });

    it('memoize function without arguments', () => {
        class TestClass {
            public sideEffect = 0;

            public get range(): number[] {
                return this.getRange();
            }

            @tuiPure
            public getRange(): number[] {
                this.sideEffect++;

                return Array.from({length: 5}, (_item, index: number) => index + 1);
            }
        }

        const testObject = new TestClass();

        expect(testObject.range).toEqual([1, 2, 3, 4, 5]);
        expect(testObject.range).toEqual([1, 2, 3, 4, 5]);
        expect(testObject.range).toEqual([1, 2, 3, 4, 5]);
        expect(testObject.sideEffect).toBe(1);
    });

    it('memoize function without arguments and return undefined by default', () => {
        class TestClass {
            public sideEffect = 0;

            @tuiPure
            public voidFn(): void {
                this.sideEffect++;

                // necessary for the test
                return undefined;
            }
        }

        const testObject = new TestClass();

        expect(testObject.voidFn()).toBeUndefined();
        expect(testObject.voidFn()).toBeUndefined();
        expect(testObject.voidFn()).toBeUndefined();
        expect(testObject.sideEffect).toBe(1);
    });
});
