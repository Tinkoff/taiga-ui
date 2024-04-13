import {expect, test} from '@playwright/test';

import {TuiDocumentationPagePO, tuiGoto} from '#/demo-playwright/utils';

test.describe('Code blocks', () => {
    test('API page', async ({page}) => {
        await tuiGoto(page, '/components/line-clamp/Setup');

        const locators = await page.locator('tui-doc-code').all();

        for (const [index, locator] of locators.entries()) {
            await expect(locator).toHaveScreenshot(
                `01-line-clamp-setup-block-0${index + 1}.png`,
            );
        }
    });

    test('tabs', async ({page}) => {
        await tuiGoto(page, '/components/line-clamp');

        const documentation = new TuiDocumentationPagePO(page);

        for (const [index, title] of ['HTML', 'TypeScript', 'LESS'].entries()) {
            const locator = page.locator(`#basic [tuiTab]:has-text("${title}")`);

            await locator.click();
            await documentation.waitStableState();

            await expect(page.locator('tui-doc-example#basic')).toHaveScreenshot(
                `02-0${index + 1}-code-block-${title}.png`,
            );
        }
    });
});
