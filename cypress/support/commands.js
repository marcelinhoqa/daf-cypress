
import 'cypress-xpath';

const env = require('./ambiente/homol.json');

Cypress.Commands.add('visitHomol', () => {
  
  cy.visit(env.padrao);
});


Cypress.Commands.add('acceptPolicy', () =>{
    cy.get('#adopt-accept-all-button', { timeout: 10000 }).should('be.visible');
    cy.get("#adopt-accept-all-button").click();
})