import {DemoRoute} from '@demo/routes';
import {
    TuiCalendarRangePO,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

test.describe('CalendarRange', () => {
    let example!: Locator;
    let calendarRange!: TuiCalendarRangePO;
    let documentationPage!: TuiDocumentationPagePO;

    test.use({
        viewport: {width: 650, height: 650},
    });

    test.beforeEach(async ({page}) => {
        await tuiGoto(page, DemoRoute.CalendarRange, {
            date: new Date(2020, 8, 25),
        });

        documentationPage = new TuiDocumentationPagePO(page);
        example = documentationPage.apiPageExample;

        calendarRange = new TuiCalendarRangePO(example.locator('tui-calendar-range'));
    });

    test.describe('Examples', () => {
        test('With another range switcher', async () => {
            example = documentationPage.getExample('#with-another-range-switcher');
            calendarRange = new TuiCalendarRangePO(example.locator('tui-calendar-range'));

            const getRangeSwitcher = (): Locator =>
                example.locator('p button[data-appearance="action"]');

            await expect(example).toHaveScreenshot(
                '05-calendar-range-correct-display-defaults-items-and-values-1.png',
            );

            await calendarRange.selectItem(1);
            await calendarRange.itemHasCheckmark(1);

            await expect(example).toHaveScreenshot(
                '05-calendar-range-correct-display-range-switcher-after-select-week.png',
            );

            await getRangeSwitcher().click();

            await expect(example).toHaveScreenshot(
                '05-calendar-range-correct-display-items-and-values-after-click-on-month-range-switcher.png',
            );

            await getRangeSwitcher().click();

            await expect(example).toHaveScreenshot(
                '05-calendar-range-correct-display-items-and-values-after-click-on-quarter-range-switcher.png',
            );

            await getRangeSwitcher().click();

            await expect(example).toHaveScreenshot(
                '05-calendar-range-correct-display-defaults-items-and-values-2.png',
            );
        });

        test.describe('With value', () => {
            test('Month switching via chevron', async ({page}) => {
                example = documentationPage.getExample('#with-value');
                calendarRange = new TuiCalendarRangePO(
                    example.locator('tui-calendar-range'),
                );

                const getPreviousMonthChevron = (): Locator =>
                    example.locator('tui-spin-button > button').first();

                await getPreviousMonthChevron().click();

                await page.mouse.click(100, 100); // clear focus

                await expect(example).toHaveScreenshot(
                    '07-calendar-range-with-value-click-chevron.png',
                );
            });
        });
    });

    test.describe('API', () => {
        test('Maximum month when items not empty', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.CalendarRange}/API?items$=1&max$=4`);

            await expect(example).toHaveScreenshot('06-maximum-month-with-items.png');
        });

        test('Dont allow to select disabled dates in calendar', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.CalendarRange}/API?disabledItemHandler$=1`);

            await expect(example).toHaveScreenshot('08-disabled-dates-1-default.png');

            const getCells = (): Locator =>
                page.locator('[automation-id="tui-calendar-sheet__cell"]');

            await getCells().nth(1).click();

            await expect(example).toHaveScreenshot('08-disabled-dates-2-select-from.png');

            await getCells().nth(9).hover();

            await expect(example).toHaveScreenshot('08-disabled-dates-3-hover-to.png');

            await getCells().nth(9).click();
            await page.mouse.click(100, 100); // clear focus

            await expect(example).toHaveScreenshot('08-disabled-dates-4-click-to.png');

            await getCells().nth(0).click();
            await page.mouse.click(100, 100); // clear focus

            await expect(example).toHaveScreenshot('08-disabled-dates-5-click-to.png');
        });
    });
});
