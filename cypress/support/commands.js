Cypress.Commands.add('loginEmpresa', function () {
    cy.visit('http://10.10.20.23/')
    cy.get('[data-testid="email"] > .MuiInputBase-input-145').type('thiago.tsf.87@gmail.com')
    cy.get('[data-testid="cnpj"] > .MuiInputBase-input-145').type('77858611000108')
    cy.get('[data-testid="password"] > .MuiInputBase-input-145').type('JVmljosi@1')
    cy.get('[data-testid="signin"]').click()
   // cy.get('.sc-dkIXFM > :nth-child(1) > .MuiButtonBase-root-321').should('be.visible').click()
    cy.title().should('be.equal', 'Unimed Grande Florianópolis')

})

Cypress.Commands.add('loginAdmin', function () {
    cy.visit('http://10.10.20.23/')
    cy.get('[data-testid="email"] > .MuiInputBase-input-145').type('admin@bossabox.com')
    cy.get('[data-testid="cnpj"] > .MuiInputBase-input-145').type('admin')
    cy.get('[data-testid="password"] > .MuiInputBase-input-145').type('bossabox123')
    cy.get('[data-testid="signin"]').click()
})

Cypress.Commands.add('logout', function () {
    cy.wait(5000)
    cy.get('.MuiButton-label-327').click()
    cy.get('.MuiPaper-root-365 > .MuiList-root-393 > :nth-child(4)').click()
})

Cypress.Commands.add('excludeAccess', function () {
    //Acessar lista de beneficiários
    cy.get('[href="/beneficiario-ativos"] > .description').click()
    cy.wait(35000)
    //Click no beneficiário
    cy.get('[index="0"] > [value="[object Object]"] > div > .sc-iGctRS').click()
    cy.get('.bjyqlH').click()
})
Cypress.Commands.add('excludeBeneficiaryData', function () {
    cy.get(':nth-child(6) > .MuiFormControl-root-679 > .MuiInputBase-root-687 > .MuiInputBase-input-695')
        .type('51999999999')
    cy.get(':nth-child(7) > .MuiFormControl-root-679 > .MuiInputBase-root-687 > .MuiInputBase-input-695')
        .type('tfortes29@yahoo.com')
})

Cypress.Commands.add('excludeByBeneficiary', function () {

})

Cypress.Commands.add('excludeByCompany', function () {
    cy.get('#5').click()
    cy.get('#mui-component-select-reason').click()
    cy.get('.MuiList-root-393 > [tabindex="0"] > :nth-child(1)').click()
    cy.get('#sim').click()
    cy.get('#1').click()
    cy.get(':nth-child(4) > :nth-child(2) > #sim').click()
    cy.get(':nth-child(2) > .MuiFormControl-root-679 > .MuiInputBase-root-687 > .MuiInputBase-input-695')
        .type('5')
    cy.get('label[for="fileUpload"]')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/Logo Bossabox.png')
    cy.get(':nth-child(7) > :nth-child(2) > #sim').click()
    cy.get(':nth-child(8) > :nth-child(6) > .MuiFormControl-root-679 > .MuiInputBase-root-687 > .MuiInputBase-input-695')
        .type('18-11-2022')

})
Cypress.Commands.add('excludeClickComand', function () {
    cy.get('.button__danger').click()
    cy.get('.sc-eltcbb > :nth-child(2) > .MuiButtonBase-root-321').click()

})
Cypress.Commands.add('excludeBeneficiary', function () {
    //Acessar lista de beneficiários
    cy.get('[href="/beneficiario-ativos"] > .description')
        .click()
    cy.wait(35000)
    //Click no beneficiário
    cy.get('[index="2"] > [value="[object Object]"] > div > .sc-iGctRS')
        .click()
    cy.get('.bjyqlH')
        .click()
    //Tela de exclusão
    cy.get(':nth-child(6) > .MuiFormControl-root-679 > .MuiInputBase-root-687 > .MuiInputBase-input-695')
        .type('51999999999')
    cy.get(':nth-child(7) > .MuiFormControl-root-679 > .MuiInputBase-root-687 > .MuiInputBase-input-695')
        .type('tfortes29@yahoo.com')
    //cy.get('#\36  > svg > path').click()
    cy.get('#mui-component-select-reason')
        .click()
    cy.get('[data-value="81"] > :nth-child(1)')
        .click()
    cy.get('.MuiGrid-grid-xs-4-600 > .MuiFormControl-root-679 > .MuiInputBase-root-687 > .MuiInputBase-input-695')
        .type('2022-11-15')
    cy.get('label[for="fileUpload"]')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/Logo Bossabox.png')
    cy.get('.button__danger')
        .click()
    cy.get('.sc-eltcbb > :nth-child(2) > .MuiButtonBase-root-321')
        .click()
})

Cypress.Commands.add('approveExclude', function () {
    cy.get('[href="/admin/avaliacao-de-exclusao"] > .description')
        .click()
    cy.get('.button_container > .MuiButtonBase-root-316')
        .invoke('removeAttr', 'target')
        .click({ multiple: true })
    cy.wait(1000)
    cy.get('.field_with_assessment_dropzone > .sc-bTvRPi > .sc-dacFzL > .sc-jUEnpm > :nth-child(1)').click()
    cy.get(':nth-child(2) > .sc-bTvRPi > .sc-dacFzL > .sc-jUEnpm > :nth-child(1)')
        .click()
    cy.get(':nth-child(1) > .sc-bTvRPi > .sc-dacFzL > .sc-jUEnpm > :nth-child(1)')
        .click({ multiple: true })
    cy.get('.sc-TmcTc > :nth-child(2) > .MuiButtonBase-root-64')
        .click()
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Thiago')
    cy.get('#lastName').type('Fortes')
    cy.get('#email').type('thiago.tsf.87@gmail.com')
    cy.get('#open-text-area').type('teste grande texto', { delay: 0 })
    cy.contains('button', 'Enviar').click()
})