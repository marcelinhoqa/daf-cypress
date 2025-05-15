import { CadastroPage } from '../../support/page/CadastroPage';
import { HomePage } from '../../support/page/HomePage';

import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
const cadastroPage = new CadastroPage();
const homePage = new HomePage();

const faker = require('faker-br');
import 'cypress-network-idle';

let isFormularioNovo = false;


Given('Acesso a url principal e preencha o formulario de cadastro', () => {

  homePage.visit();
  homePage.clicarBtnEntrar();

  const nome = faker.name.findName();
  const cpf = faker.br.cpf();
  const email = faker.internet.email().toLowerCase();


  cy.waitUntil(() => 
    Cypress.$('#styles_createAccount__iL15r').length > 0 ||
    Cypress.$('h2:contains("Quero me cadastrar")').length > 0,
    {
      errorMsg: 'Nenhum botão de cadastro apareceu',
      timeout: 10000,
      interval: 500
    }
  ).then(() => {
    if (Cypress.$('#styles_createAccount__iL15r').length > 0) {
      isFormularioNovo = true;

      cy.get('#styles_createAccount__iL15r').click();
      cy.waitForNetworkIdle(2000);
      cadastroPage.preencherNome(nome);
      cadastroPage.preencherCpf(cpf);
      cadastroPage.preencherEmail(email);
      cadastroPage.preencherDataNascimento('06011988');
      cadastroPage.preencherSenha('Pastel.,1');
      cadastroPage.selecionarPreferencia();
    } else {
      isFormularioNovo = false;
      cy.contains('h2', 'Quero me cadastrar').click();
      cy.waitForNetworkIdle(2000);
      cadastroPage.preencherNomeModeloAntigo(nome);
      cadastroPage.preencherUltimoNomeModeloAntigo("Antigo");
      cadastroPage.preencherEmailModeloAntigo(email);
      cadastroPage.selecionarPreferenciaAntiga();

      cadastroPage.preencherCpfAntigo(cpf);
      cadastroPage.preencherDataAntiga();

      cadastroPage.preencherSenhaAntiga('Pastel.,1');
      cadastroPage.preencherRepetirSenhaAntiga('Pastel.,1');
    }
  });


});

When('clico no botao {string}', (texto) => {
   if (isFormularioNovo) {
    cadastroPage.criarConta(texto);
   }

   else{
  cadastroPage.criarContaAntiga();
   }

});

Then('deve ver a mensagem {string}', (texto) => {
  if (isFormularioNovo) {
  cadastroPage.verificarContaExistente(texto);
  }
  else{
    cadastroPage.validarMensagemDeErro();
  }

});
