context('Nums', () => {
    let firstNumInitValue = -5;
    let secondNumInitValue = 10;

    beforeEach(() => {
        cy.visit('/')
    })

    it('Display initialised numbers with colored border', () => {
        cy.get('.red').contains('-5')
        cy.get('.blue').contains('10')
    })

    it('Display buttons: start, stop, reset', () => {
        cy.get('button').contains('Start')
        cy.get('button').contains('Stop')
        cy.get('button').contains('Reset')
    })

    it('On click "Start" the first number increase by 1 every 1 second', () => {
        cy.get('button').contains('Start').click()
        cy.clock()
        cy.tick(1000);
        cy.get('.number:first').contains('-4');
        cy.tick(1000);
        cy.get('.number:first').contains('-3');
    })

    it('On click "Start" the second number decrease by 2 every 1 second', () => {
        cy.get('button').contains('Start').click()
        cy.clock()
        cy.tick(1000);
        cy.get('.number:last').contains('8');
        cy.tick(1000);
        cy.get('.number:last').contains('6');
    })

    it('On click "Stop" the numbers stop changing', () => {
        cy.get('button').contains('Start').click()
        cy.get('button').contains('Stop').click()
        cy.clock();
        cy.tick(1000);
        cy.get('.number:first').should('have.text', firstNumInitValue);
        cy.get('.number:last').should('have.text', secondNumInitValue);
        cy.tick(1000);
        cy.get('.number:first').should('have.text', firstNumInitValue);
        cy.get('.number:last').should('have.text', secondNumInitValue);
    })

    it('On click "Reset" the numbers reset to initial values', () => {
        cy.clock();
        cy.get('button').contains('Start').click();
        cy.tick(1000);
        cy.get('button').contains('Reset').click();
        cy.get('.number:first').should('have.text', firstNumInitValue);
        cy.get('.number:last').should('have.text', secondNumInitValue);
    })
})
