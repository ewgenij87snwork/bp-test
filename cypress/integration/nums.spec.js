context('Nums', () => {
    it('Display initialised Nums with colored border', () => {
        cy.visit('/')
        cy.get('.red').contains('-5')
        cy.get('.blue').contains('10')
    })

    it('Display buttons: start, stop, reset', () => {
        cy.visit('/');
        cy.get('button').contains('Start')
        cy.get('button').contains('Stop')
        cy.get('button').contains('Reset')
    })

})
