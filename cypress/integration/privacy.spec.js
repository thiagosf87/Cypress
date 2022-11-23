it('testa a página da política de privavidade de forma independente', function () {
  cy.visit('./src/index.html')
  cy.get('a')
    .invoke('removeAttr', 'target')
    .click()

  cy.contains('Talking About Testing')
    .should('be.visible')
})