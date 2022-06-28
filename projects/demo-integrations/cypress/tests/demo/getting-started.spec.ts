describe('getting-started', () => {
    it('is desktop when device width >= 768px', () => {
        cy.viewport(768, 900);
        cy.tuiVisit('/getting-started', {hideHeader: false, hideNavigation: false});
        cy.matchImageSnapshot('01-getting-started-desktop-viewport', {
            capture: 'viewport',
        });
    });

    it('is mobile when device width < 768px', () => {
        cy.viewport(767, 900);
        cy.tuiVisit('/getting-started', {hideHeader: false, hideNavigation: false});
        cy.matchImageSnapshot('02-getting-started-mobile-viewport', {
            capture: 'viewport',
        });
    });
});
