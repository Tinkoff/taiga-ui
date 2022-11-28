import {tuiArrayEquals} from '@taiga-ui/cdk';

describe(`tuiArrayEquals`, () => {
    it(`Items are equal`, () => {
        expect(tuiArrayEquals([1, 2, 3], [1, 2, 3])).toBeTruthy();
    });

    it(`Items are not equal`, () => {
        expect(tuiArrayEquals([1, 2, 3], [1, 3, 2])).toBeFalsy();
    });

    it(`Different sizes are not equal`, () => {
        expect(tuiArrayEquals([1, 2, 3], [1, 2])).toBeFalsy();
        expect(tuiArrayEquals([1, 2], [1, 2, 3])).toBeFalsy();
    });

    it(`Copies are not equal`, () => {
        expect(tuiArrayEquals([{a: `b`}], [{a: `b`}])).toBeFalsy();
    });
});
