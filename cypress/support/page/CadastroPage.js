export class CadastroPage {
  visit() {
    cy.visit(env.padrao);
  }

  preencherNome(nome) {
    cy.get('#inputId__Yl0TD_fullname', { timeout: 10000 }).type(nome);
  }

  preencherCpf(cpf) {
    cy.get('#inputid_cpf__Yl0TD', { timeout: 10000 }).type(cpf);
  }

  preencherEmail(email) {
    cy.get('#inputId__Yl0TD_email', { timeout: 10000 }).type(email);
  }

  preencherDataNascimento(data) {
    cy.get('#inputid_birthday__Yl0TD', { timeout: 10000 }).type(data, { force: true });
  }

  preencherSenha(senha) {
    cy.get('#inputId__Yl0TD_password', { timeout: 10000 }).type(senha);
  }

  selecionarPreferencia() {
    cy.get('#inputId__Yl0TD_preferences', { timeout: 10000 }).click({ force: true });
    cy.contains('Moda masculina', { timeout: 10000 }).click();
  }

  criarConta(texto) {
    cy.intercept('POST', '/api/v1/customer/create').as('createCustomer');
    cy.xpath(`//*[contains(text(), "${texto}")]`, { timeout: 10000 }).click();
    cy.wait('@createCustomer');
  }

  verificarContaExistente(texto) {
    cy.get('.popup-content h1', { timeout: 30000 }).should('have.text', texto);
  }


  preencherNomeModeloAntigo(nome){
    cy.get('#RegistrationForm_first_name', { timeout: 30000 }).type(nome);
  }

  preencherUltimoNomeModeloAntigo(nome){
    cy.get('#RegistrationForm_last_name', { timeout: 30000 }).type(nome);
  }

    preencherEmailModeloAntigo(email){
        cy.get('#RegistrationForm_email', { timeout: 30000 }).type(email);
    }

    selecionarPreferenciaAntiga() {
        cy.get('#RegistrationForm_gender', { timeout: 10000 }).select('Masculino');
    }

    preencherCpfAntigo(cpf){
            cy.get('#RegistrationForm_tax_identification', { timeout: 10000 }).type(cpf);
    }

    preencherDataAntiga(){
        cy.get('#RegistrationForm_day').select('06');
        cy.get('#RegistrationForm_month').select('01');
        cy.get('#RegistrationForm_year').select('1988');
    }

    preencherSenhaAntiga(senha){
    cy.get("#form-customer-account-password").type(senha)
    }

    preencherRepetirSenhaAntiga(senha){
        cy.get("#RegistrationForm_password2").type(senha)
    }

    criarContaAntiga(){
       cy.get("#customer-account-create").click();
    }

    validarMensagemDeErro(){
        cy.get(".message-description").contains("E-mail ou CPF já cadastrado(s).");
    }  

}
