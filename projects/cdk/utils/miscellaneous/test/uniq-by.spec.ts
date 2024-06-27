import {describe, expect, it} from '@jest/globals';
import {tuiUniqBy} from '@taiga-ui/cdk';

describe('uniqBy', () => {
    it('removes entries with repeated key', () => {
        expect(
            tuiUniqBy(
                [
                    {
                        id: 1,
                        name: 'Test',
                        value: 237,
                    },
                    {
                        id: 2,
                        name: 'Test2',
                        value: 42,
                    },
                    {
                        id: 1,
                        name: 'Test3',
                        value: 777,
                    },
                ],
                'id',
            ),
        ).toEqual([
            {
                id: 1,
                name: 'Test',
                value: 237,
            },
            {
                id: 2,
                name: 'Test2',
                value: 42,
            },
        ]);
    });
});
