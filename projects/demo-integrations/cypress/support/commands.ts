import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';

import {goToDemoPage} from './go-to-demo-page.util';
import {hideHeader} from './hide-header.util';
import {hideNavigation} from './hide-navigation.util';
import {setNightMode} from './set-night-mode';
import {waitKitDialog} from './wait-kit-dialog';

declare global {
    namespace Cypress {
        interface Chainable {
            getByAutomationId(automationId: string): Chainable<JQuery<HTMLElement>>;

            findByAutomationId(automationId: string): Chainable<JQuery<HTMLElement>>;

            goToDemoPage: typeof goToDemoPage;
            hideHeader: typeof hideHeader;
            waitKitDialog: typeof waitKitDialog;
            setNightMode: typeof setNightMode;
            hideNavigation: typeof hideNavigation;
        }
    }
}

Cypress.Commands.add('getByAutomationId', id => cy.get(`[automation-id=${id}]`));
Cypress.Commands.add('findByAutomationId', {prevSubject: true}, (subject: any, id) =>
    subject.find(`[automation-id=${id}]`),
);
Cypress.Commands.add('goToDemoPage', goToDemoPage);
Cypress.Commands.add('hideHeader', hideHeader);
Cypress.Commands.add('waitKitDialog', waitKitDialog);
Cypress.Commands.add('setNightMode', setNightMode);
Cypress.Commands.add('hideNavigation', hideNavigation);

addMatchImageSnapshotCommand({
    // Pixel to pixel comparison can fail frequently,
    // but more often than not, it's because of minor
    // variations in rendering and the compression algorithm.
    // https://github.com/americanexpress/jest-image-snapshot/issues/201
    comparisonMethod: 'ssim',
    customDiffConfig: {ssim: 'fast', windowSize: 24} as any,
    failureThreshold: 0.001,
    failureThresholdType: 'percent',
    allowSizeMismatch: true, // Windows fix
});
