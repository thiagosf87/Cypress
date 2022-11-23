/// <reference types="Cypress" />

describe('Inclusão de beneficiário', function () {
    this.beforeEach(function () {
        cy.loginAdmin()

    })
    it('Enviar para o SGU', function () {

        cy.title().should('be.equal', 'Unimed Grande Florianópolis')
    })
    Cypress._.times(10, function () {
        it('Enviar para o SGU', function () {
            cy.get('[href="/admin/erros-exportacao"] > .description').click()
            cy.wait(6000)
            cy.get('[index="0"] > :nth-child(6) > :nth-child(1) > .button_container > .MuiButtonBase-root-316').click()
            cy.wait(1000)
            cy.get('.container-buttom > .button_container > .MuiButtonBase-root-316').click()
            cy.wait(1000)
            cy.get('.MuiAlert-message').should('be.visible')
        })
    })
})