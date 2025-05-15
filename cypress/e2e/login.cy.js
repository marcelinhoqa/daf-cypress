// const faker = require('faker-br');
// import 'cypress-network-idle';
// import { CadastroPage } from '../support/page/CadastroPage';


// describe('Cadastro na Dafiti', function () {

//     let cadastroPage; // Declaração da variável

//   beforeEach(() => {
//     cadastroPage = new CadastroPage();
//   });

//   it('deve preencher os campos de cadastro', function () {

//     cy.visitHomol();
//     cy.acceptPolicy();

//     cy.get('.header-login-link', { timeout: 10000 }).should('be.visible');
//     cy.get(".header-login-link").click();

//     const nome = faker.name.findName();
//     const cpf = faker.br.cpf();
//     const email = faker.internet.email().toLowerCase();

//     cy.get("#styles_createAccount__iL15r", { timeout: 10000 }).click();
//     cy.waitForNetworkIdle(2000);

//     cadastroPage.preencherNome(nome);
//     cadastroPage.preencherCpf(cpf);
//     cadastroPage.preencherEmail(email);
//     cadastroPage.preencherDataNascimento("06011988");
//     cadastroPage.preencherSenha("Pastel.,1");
//     cadastroPage.selecionarPreferencia();
//     cadastroPage.criarConta();
//     cadastroPage.verificarContaExistente();

//     cy.pause();

//   });

// });



// //npx cypress run --headed --browser chrome
