import {TuiDocumentationPagePO, tuiGoto, TuiInputMonthPO} from '@demo-playwright/utils';
import {expect, Locator, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe(`InputMonth`, () => {
    describe(`API`, () => {
        let documentationPage: TuiDocumentationPagePO;
        let example: Locator;
        let inputMonth: TuiInputMonthPO;

        test.use({
            viewport: {width: 360, height: 410},
        });

        beforeEach(({page}) => {
            documentationPage = new TuiDocumentationPagePO(page);
            example = documentationPage.apiPageExample;
            inputMonth = new TuiInputMonthPO(example.locator(`tui-input-month`));
        });

        test(`Maximum month less than current month`, async ({page}) => {
            await tuiGoto(page, `components/input-month/API?max$=1`);
            await inputMonth.textfield.click();

            await documentationPage.prepareApiPageBeforeScreenshot();
            await expect(page).toHaveScreenshot(`input-month-maximum-month.png`);
        });

        test(`Minimum month more than current month`, async ({page}) => {
            await tuiGoto(page, `components/input-month/API?min$=3`);
            await inputMonth.textfield.click();

            await documentationPage.prepareApiPageBeforeScreenshot();
            await expect(page).toHaveScreenshot(`input-month-minimum-month.png`);
        });
    });
});
