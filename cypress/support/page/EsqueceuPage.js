export class EsqueceuPage {
  visit() {
     cy.visitHomol();
     cy.acceptPolicy();
  }

  esqueceuSenha(){
    cy.contains('Esqueceu seus dados de acesso?', { timeout: 10000 }).should('be.visible').click();
  }

  preencherEmail(){
    cy.get("input[name='forgot']" , { timeout: 10000 }).type("fake@gmail.com", { force: true });
  }
  
  enviarForm(){
    cy.get('button[type="submit"]' , { timeout: 10000 }).click({ force: true });
  }

  validarMensagem() {
  cy.contains('Um e-mail foi enviado para "fa**@g****.c**" com o link para você redefinir sua senha.' , { timeout: 10000 });
  }

}
