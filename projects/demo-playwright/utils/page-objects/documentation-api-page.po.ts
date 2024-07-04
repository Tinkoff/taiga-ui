import type {Locator, Page} from '@playwright/test';
import {expect} from '@playwright/test';

import {tuiHideElement} from '../hide-element';
import {waitStableState} from '../wait-stable-state';

export class TuiDocumentationApiPagePO {
    public readonly pageExamples: Locator = this.page.locator('tui-doc-example');
    public readonly apiPageExample: Locator = this.page.locator('#demo-content');

    constructor(protected readonly page: Page) {}

    public async waitStableState(): Promise<void> {
        if ((await this.apiPageExample.all()).length) {
            await waitStableState(this.apiPageExample);
        } else if ((await this.pageExamples.all()).length) {
            for (const example of await this.pageExamples.all()) {
                await waitStableState(example);
            }
        }
    }

    public async hideNotifications(): Promise<void> {
        const notifications = await this.page.locator('tui-alerts tui-alert').all();

        for (const notification of notifications) {
            await tuiHideElement(notification);
        }
    }

    public async hideContent(): Promise<void> {
        return tuiHideElement(this.page.locator('tui-doc-page'));
    }

    public async hideDocumentation(): Promise<void> {
        const documentations = await this.page.locator('tui-doc-documentation').all();

        for (const documentation of documentations) {
            await tuiHideElement(documentation);
        }
    }

    public async hideNavigation(): Promise<void> {
        return tuiHideElement(this.page.locator('tui-doc-navigation'));
    }

    public async hideScrollControls(): Promise<void> {
        for (const element of await this.page.locator('tui-scroll-controls').all()) {
            await tuiHideElement(element);
        }
    }

    public async prepareBeforeScreenshot(hasNot = ''): Promise<void> {
        await this.hideDocumentation();
        await this.hideScrollControls();
        await this.hideNavigation();
        await this.hideNotifications();

        const wrapper = this.page.locator('tui-doc-page');
        const hideElements = [
            ...(await wrapper
                .locator(`header:not(.t-content > *:not(tui-doc-demo)${hasNot} header)`)
                .all()),
            ...(await wrapper
                .locator(`> .t-content > *:not(tui-doc-demo)${hasNot}`)
                .all()),
            ...(await wrapper.locator('.t-bg-toggle').all()),
        ];

        for (const element of hideElements) {
            await tuiHideElement(element);
        }

        if ((await this.apiPageExample.all()).length) {
            await this.apiPageExample.evaluate((el) => el.scrollIntoView());
            await expect(async () => {
                expect(
                    await this.apiPageExample.boundingBox().then((box) => box?.y),
                ).toBeGreaterThanOrEqual(64);
            }).toPass();
        }
    }

    public getRow(rowName: string): Locator {
        return this.page.locator(`.t-table .t-row:has-text("${rowName}")`);
    }

    public async getRows(): Promise<Locator[]> {
        return this.page.locator('.t-table .t-row:not(.t-row_header)').all();
    }

    public async getSelect(row: Locator): Promise<Locator | null> {
        return ((await row.locator('.t-cell_value tui-select').all()) ?? [])?.[0] ?? null;
    }

    public async getNameProperty(row: Locator): Promise<string> {
        return (await row.locator('.t-property code').textContent())?.trim() ?? '';
    }

    public async getOptions(): Promise<Locator[]> {
        return this.page.locator('[automation-id="tui-data-list-wrapper__option"]').all();
    }

    public async focusOnBody(): Promise<void> {
        await this.page.locator('body').click({position: {x: 0, y: 0}});
    }

    public async getCleaner(select: Locator): Promise<Locator | null> {
        return (
            ((await select
                .locator('[automation-id="tui-primitive-textfield__cleaner"]')
                .all()) ?? [])?.[0] ?? null
        );
    }

    public async getToggle(row: Locator): Promise<Locator | null> {
        return (
            ((await row.locator('.t-cell_value input[tuiSwitch]').all()) ?? [])?.[0] ??
            null
        );
    }
}
