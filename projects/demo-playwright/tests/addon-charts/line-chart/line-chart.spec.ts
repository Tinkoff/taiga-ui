import {expect, test} from '@playwright/test';

import {TuiDocumentationPagePO, tuiGoto} from '#/demo-playwright/utils';

test.describe('LineChart', () => {
    test('should not show hint', async ({page}) => {
        await tuiGoto(page, 'charts/line-chart');
        const example = new TuiDocumentationPagePO(page).getExample('#line');
        const chartColumn = example
            .locator('tui-line-chart-example-1 tui-line-chart .t-column')
            .first();

        await chartColumn.hover();
        await expect(example).toHaveScreenshot('01-line-chart.png');
    });
});
