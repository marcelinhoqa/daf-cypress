export class HomePage {
  visit() {
     cy.visitHomol();
     cy.acceptPolicy();
  }

  clicarBtnEntrar(){
    cy.get('.header-login-link', { timeout: 10000 }).should('be.visible');
    cy.get(".header-login-link").click();
  }

  buscarProduto(){
    cy.get("#input-search",  { timeout: 20000 }).type("bermuda ciclista feminina");
    cy.get(".icon-magnifier-2", { timeout: 20000 }).click();
  }
  

}
