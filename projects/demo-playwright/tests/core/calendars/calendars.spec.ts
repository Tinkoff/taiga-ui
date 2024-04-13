import {expect, test} from '@playwright/test';

import {TuiDocumentationPagePO, tuiGoto} from '#/demo-playwright/utils';

test.describe('Calendars', () => {
    test.use({viewport: {width: 720, height: 700}});

    test('Calendar', async ({page}) => {
        await tuiGoto(page, 'components/calendar/API?value$=2&maxViewedMonth$=1&max$=0');
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        const calendar = apiPageExample.locator('tui-calendar').first();

        await expect(calendar).toBeVisible();
        await calendar.scrollIntoViewIfNeeded();

        await expect(calendar).toHaveScreenshot('01-calendar.png');
    });

    test('Open calendar from start value', async ({page}) => {
        await tuiGoto(page, 'components/calendar/API?value$=2');
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        const calendar = apiPageExample.locator('tui-calendar').first();

        await expect(calendar).toBeVisible();
        await calendar.scrollIntoViewIfNeeded();

        await expect(calendar).toHaveScreenshot('01-calendar-is-april-2020.png');
    });

    test('Set range between two days', async ({page}) => {
        await tuiGoto(page, 'components/calendar/API?value$=1');
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        const calendar = apiPageExample.locator('tui-calendar').first();

        await expect(calendar).toBeVisible();
        await calendar.scrollIntoViewIfNeeded();

        await expect(calendar).toHaveScreenshot('01-range-calendar.png');
    });

    test('Month', async ({page}) => {
        await tuiGoto(page, 'components/calendar-month/API?year$=1&value$=2');
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        const calendar = apiPageExample.locator('tui-calendar-month').first();

        await expect(calendar).toBeVisible();
        await calendar.scrollIntoViewIfNeeded();

        await expect(calendar).toHaveScreenshot('01-calendar-month.png');
    });
});
