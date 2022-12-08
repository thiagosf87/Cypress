/// <reference types="Cypress" />
const faker = require('faker-br')
const dateFns = require('date-fns')

describe('Inclusão de beneficiário', function () {
    this.beforeEach(function () {
        cy.loginEmpresa()
        // cy.get('.sc-dkIXFM > :nth-child(1) > .MuiButtonBase-root-321').should('be.visible').click()
    })
    it('verifica o título da aplicação', function () {

        cy.title().should('be.equal', 'Unimed Grande Florianópolis')
    })


    it.only('Inclusão de titular', function () {
        //Botão Listar beneficiários
        cy.get('[href="/beneficiario-ativos"] > .description').click()
        cy.wait(8000)
        //cy.wait(5000)
        //Botão incluir beneficiário
        cy.get('.button_container > .MuiButtonBase-root-321').click()
        cy.wait(8000)
        //Seleção de plano
        cy.get('#mui-component-select-plan').click()
        cy.get('.MuiList-root-393 > [tabindex="0"] > :nth-child(1)').click()
        //Anexar documento
        cy.get('label[for="fileUpload"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/Logo Bossabox.png')
        //Nome
        cy.get(':nth-child(5) > :nth-child(1) > .MuiInputBase-root-540 > .MuiInputBase-input-548').type(`${String(faker.name.firstName())} ${String(faker.name.lastName())}`)
        //CPF
        cy.get('.jss570 > .MuiInputBase-root-540 > .MuiInputBase-input-548').type(String(faker.br.cpf()))
        //Seleção do centro de custo
        cy.get('#mui-component-select-cost_center').click()
        cy.get('#menu-cost_center > .MuiPaper-root-365 > .MuiList-root-393 > .MuiButtonBase-root-321 > :nth-child(1)').click()
        //E-mail
        cy.get(':nth-child(5) > :nth-child(3) > .MuiInputBase-root-540 > .MuiInputBase-input-548').type('thiago.tsf.87@gmail.com')
        //Seleção Tipo do colaborador
        cy.get('#mui-component-select-worker_type').click()
        cy.get('.MuiList-root-393 > [tabindex="0"] > :nth-child(1)').click()
        //data de admissão
        cy.get(':nth-child(6) > .jss584 > .MuiInputBase-root-540').type('2022-11-01')
        //Matrícula
        cy.get(':nth-child(6) > .jss556 > .MuiInputBase-root-540 > .MuiInputBase-input-548').type('1234')
        //data de vigência
        const validity = dateFns.addDays(new Date(), 10)
        const validityFormated = dateFns.format(validity, 'yyyy-MM-dd')
        cy.get(':nth-child(7) > .MuiFormControl-root-510 > .MuiInputBase-root-540').type(validityFormated)
        //Botão enviar
        cy.get('.button__submit').click()
        cy.intercept('/api/recipients').as("createdRecipent")
        //Validação do teste
        cy.wait(1000)
        cy.wait('@createdRecipent').then((intercept) => {
            cy.task('setRecipientToken', intercept.response.body.content.token)
        })
        cy.get('.MuiAlert-message > div').should('be.visible')
        let token = null
        cy.task('getRecipientToken').then((storedToken) => {
            cy.visit(`http://10.10.20.23/novo-beneficiario/${storedToken}`)
        })

        cy.wait(1000)
        cy.get('#mui-component-select-genre').click({ force: true })
        cy.get('.MuiList-root-163 > [tabindex="-1"]').click()
        //cy.get('[data-test="field-phone"] > input').type(faker.phone.phoneNumber('119########'), { force: true })
        //Data de nascimento
        cy.get('.jss96 > .MuiInputBase-root-25 > .MuiInputBase-input-33').type('1985-11-01', { force: true })
        //Estado Civil
        cy.get('#mui-component-select-marital_status').click({ force: true })
        cy.get('.MuiList-root-206 > [tabindex="0"] > :nth-child(1)').click({ force: true })
        //CEP
        cy.get('[data-test="field-zipcode"] > input').type(faker.address.zipCodeValid(),{ force: true })
        //Adress
        //cy.get(':nth-child(8) > .MuiInputBase-root-25 > .MuiInputBase-input-33').type(faker.address.streetAdress())
        // cy.get(':nth-child(9) > :nth-child(1) > .MuiInputBase-root-25 > .MuiInputBase-input-33')
        // cy.get(':nth-child(9) > :nth-child(2) > .MuiInputBase-root-25 > .MuiInputBase-input-33')
        // cy.get(':nth-child(10) > :nth-child(1) > .MuiInputBase-root-25 > .MuiInputBase-input-33')
        // cy.get(':nth-child(10) > :nth-child(2) > .MuiInputBase-root-25 > .MuiInputBase-input-33')
        // cy.get('#mui-component-select-address_state')
        // cy.get('[data-value="PB"] > :nth-child(1)')
        cy.get('#mui-component-select-country').click({ force: true })
        //Nome da mãe
        cy.get(':nth-child(12) > .MuiInputBase-root-25 > .MuiInputBase-input-33').type(`${String(faker.name.firstName())} ${String(faker.name.lastName())}`,{ force: true })
        //Anexos
        cy.get('input[data-test="file-file.identity"]')
            .selectFile('./cypress/fixtures/Logo Bossabox.png', { force: true })

        cy.get('input[data-test="file-file.identityBack"]')
            .selectFile('./cypress/fixtures/Logo Bossabox.png', { force: true })
        //Portabilidade e aproveitamento de carencia
        cy.get('#has_not_plan').click({ force: true })
        //Checkbox
        cy.get('#acceptLetter').click({ force: true })
        cy.get('#trueData').click({ force: true })

    })
})