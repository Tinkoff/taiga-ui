import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('InputTable', () => {
    test('editing fields inside a table', async ({page}) => {
        await tuiGoto(page, '/components/input#table');

        const example = new TuiDocumentationPagePO(page).getExample('#table');

        await example.scrollIntoViewIfNeeded();

        for (const index of [0, 1, 2, 3, 4]) {
            await example
                .locator('tbody tr td')
                .nth(index)
                .getByTestId('tui-primitive-textfield__wrapper')
                .locator('input')
                .nth(0)
                .focus();

            await expect(example).toHaveScreenshot(`01-input_table__${index}_1.png`);

            await example.locator('th').nth(index).click();

            await expect(example).toHaveScreenshot(`01-input_table__${index}_2.png`);

            if (index > 0) {
                await example
                    .locator('tbody tr td')
                    .nth(index)
                    .getByTestId('tui-primitive-textfield__wrapper')
                    .locator('input')
                    .nth(0)
                    .focus();

                await expect(example).toHaveScreenshot(`01-input_table__${index}_3.png`);
            }
        }
    });
});
