export class HomePage {
  visit() {
     cy.visitHomol();
     cy.acceptPolicy();
  }

  clicarBtnEntrar(){
    cy.get('.header-login-link', { timeout: 10000 }).should('be.visible');
    cy.get(".header-login-link").click();
  }
  

}
