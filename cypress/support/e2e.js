
import './commands'
//require('cypress-xpath');
import 'cypress-xpath';
import '@shelex/cypress-allure-plugin';
import './commands';
import 'cypress-wait-until';
import { cff } from '@firstlutfi/cypress-fixture-faker';

// O site da dafiti está com alguns erros no console, tive que adicionar isso para ignorar os erros do console, isso estava quebrando o teste.
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora erros específicos da aplicação
  if (err.message.includes('da')) {
    return false; // Impede o Cypress de falhar o teste
  }

  // Para outros erros, você pode logar no console
  console.log('Erro capturado:', err.message);

  // Impede o Cypress de falhar o teste para qualquer outro erro
  return false;
});

