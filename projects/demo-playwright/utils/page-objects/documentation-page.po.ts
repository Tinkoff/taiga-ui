import {expect, Locator, Page} from '@playwright/test';

import {tuiHideElement} from '../hide-element';

export class TuiDocumentationPagePO {
    readonly apiPageExample: Locator = this.page.locator('#demo-content');

    readonly submitFormControlButton = this.apiPageExample.locator(
        '[automation-id="tui-demo-button__submit-state"]',
    );

    readonly resetFormControlButton = this.apiPageExample.locator(
        '[automation-id="tui-demo-button__reset-state"]',
    );

    constructor(private readonly page: Page) {}

    getExample(selector: string): Locator {
        return this.page.locator(`${selector} [automation-id="tui-doc-example"]`);
    }

    async selectFormControlUpdateOnMethod(
        method: 'blur' | 'change' | 'submit',
    ): Promise<void> {
        const selector = this.apiPageExample.locator(
            '[automation-id="tui-demo-select__expand-update-on"]',
        );

        await selector.click();
        await this.page
            .locator('tui-data-list[role=listbox] [tuiOption]')
            .filter({hasText: method})
            .click();
    }

    async hideContent(): Promise<void> {
        return tuiHideElement(this.page.locator('tui-doc-page'));
    }

    async hideNavigation(): Promise<void> {
        return tuiHideElement(this.page.locator('tui-doc-navigation'));
    }

    async hideScrollControls(): Promise<void> {
        for (const element of await this.page.locator('tui-scroll-controls').all()) {
            await tuiHideElement(element);
        }
    }

    async prepareApiPageBeforeScreenshot(): Promise<void> {
        await this.hideScrollControls();
        await this.hideNavigation();
        await this.hideContent();

        const wrapper = this.page.locator('tui-doc-page');
        const hideElements = [
            wrapper.locator('header'),
            ...(await wrapper.locator('> .t-content > *:not(tui-doc-demo)').all()),
            ...(await wrapper.locator('.t-bg-toggle').all()),
        ];

        for (const element of hideElements) {
            await tuiHideElement(element);
        }

        if ((await this.apiPageExample.all()).length) {
            await this.apiPageExample.evaluate(el => el.scrollIntoView());
            await expect(async () => {
                expect(
                    await this.apiPageExample.boundingBox().then(box => box?.y),
                ).toBeGreaterThanOrEqual(64);
            }).toPass();
        }
    }
}
