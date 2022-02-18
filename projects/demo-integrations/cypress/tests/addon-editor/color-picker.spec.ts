import {WAIT_BEFORE_SCREENSHOT} from './utils';

describe("Editor's color picker", () => {
    beforeEach(() => {
        cy.goToDemoPage('components/color-picker');
        cy.hideHeader();
    });

    it('opened color picker', () => {
        openColorPicker('wrapper');

        cy.get('@wrapper')
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot('1-color-picker-with-hex');
    });

    it('opened color picker and change rgb', () => {
        openColorPicker('wrapper');
        changeToHex();

        setInputBox(1, 255);
        setInputBox(2, 255);
        setInputBox(3, 255);

        cy.get('@wrapper')
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot('2-color-picker-with-rgb');
    });

    function openColorPicker(alias: string) {
        cy.get('#dropdown').findByAutomationId('tui-doc-example').as(alias);
        cy.get('@wrapper')
            .scrollIntoView()
            .should('be.visible')
            .findByAutomationId('color-picker__button')
            .click();
    }

    function changeToHex() {
        cy.get('tui-color-edit')
            .find('tui-select')
            .findByAutomationId('tui-primitive-textfield__native-input')
            .click()
            .get('tui-data-list button:nth-of-type(2)')
            .click();
    }

    function setInputBox(index: 1 | 2 | 3, value: number) {
        cy.get(`tui-color-edit tui-input-count:nth-of-type(${index})`)
            .findByAutomationId('tui-primitive-textfield__native-input')
            .type(value.toString(), {force: true});
    }
});
