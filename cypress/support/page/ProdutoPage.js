export class ProdutoPage {

  validarTextoDoProduto(){
    cy.get(".breadcrumb2-item-link", { timeout: 20000 }).contains("bermuda ciclista feminina");
    cy.title().should('eq', 'Resultados de busca para "bermuda ciclista feminina"')
  }
  

}

                       