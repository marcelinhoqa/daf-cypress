import { ProdutoPage } from '../../support/page/ProdutoPage';
import { HomePage } from '../../support/page/HomePage';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const pesquisarPage = new ProdutoPage();
const homePage = new HomePage();

Given('Acesso a url da dafiti', () => {
  homePage.visit();
});

When('pesquiso a bermuda ciclista feminina', () => {
  homePage.buscarProduto();
});

Then('deve exibir o texto bermuda ciclista feminina', () => {
pesquisarPage.validarTextoDoProduto();
});
