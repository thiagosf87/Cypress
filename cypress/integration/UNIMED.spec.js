/// <reference types="Cypress" />

describe('Inclusão de beneficiário', function() {
    this.beforeEach(function(){
                cy.loginEmpresa()
                //cy.get('.sc-dkIXFM > :nth-child(1) > .MuiButtonBase-root-321').should('be.visible').click()
    })
    it('verifica o título da aplicação', function() {       

        cy.title().should('be.equal', 'Unimed Grande Florianópolis')  
    })

    
    it.only('Inclusão de titular',function(){
        //Botão Listar beneficiários
        cy.get('[href="/beneficiario-ativos"] > .description').click() 
        cy.wait(5000)
        //cy.wait(5000)
        //Botão incluir beneficiário
        cy.get('.button_container > .MuiButtonBase-root-321').click()
        cy.wait(5000)
        //Seleção de plano
        cy.get('#mui-component-select-plan').click()
        cy.get('.MuiList-root-393 > [tabindex="0"] > :nth-child(1)').click()
        //Anexar documento
        cy.get('label[for="fileUpload"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/Logo Bossabox.png')
        //Nome
        cy.get(':nth-child(5) > :nth-child(1) > .MuiInputBase-root-540 > .MuiInputBase-input-548').type('Teste automatizado 1')
        //CPF
        cy.get('.jss570 > .MuiInputBase-root-540 > .MuiInputBase-input-548').type('01222320037')
        //Seleção do centro de custo
        cy.get('#mui-component-select-cost_center').click()
        cy.get('#menu-cost_center > .MuiPaper-root-365 > .MuiList-root-393 > .MuiButtonBase-root-321 > :nth-child(1)').click()
        //E-mail
        cy.get(':nth-child(5) > :nth-child(3) > .MuiInputBase-root-540 > .MuiInputBase-input-548').type('thiago.tsf.87@gmail.com')
        //Seleção Tipo do colaborador
        cy.get('#mui-component-select-worker_type').click()
        cy.get('[data-value="F"] > :nth-child(1)').click()
        //data de admissão
        cy.get(':nth-child(6) > .jss584 > .MuiInputBase-root-540').type('2022-11-01')
        //Matrícula
        cy.get(':nth-child(6) > .jss556 > .MuiInputBase-root-540 > .MuiInputBase-input-548').type('1234')
        //data de vigência
        cy.get(':nth-child(7) > .MuiFormControl-root-510 > .MuiInputBase-root-540').type('2022-11-30')
        //Botão enviar
        cy.get('.button__submit').click()
        //Validação do teste
        cy.wait(1000)
        cy.get('.MuiAlert-message > div').should('be.visible')
    })
  })