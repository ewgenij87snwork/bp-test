context('Nums', () => {
  let firstNumInitValue = -5;
  let secondNumInitValue = 10;

  beforeEach(() => {
    cy.visit('/')
  })

  it('Display initialised numbers with colored border', () => {
    cy.get('.red').contains(firstNumInitValue)
    cy.get('.blue').contains(secondNumInitValue)
  })

  it('Display buttons: start, stop, reset', () => {
    cy.get('button').contains('Start')
    cy.get('button').contains('Stop')
    cy.get('button').contains('Reset')
  })

})
