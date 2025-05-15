import { CadastroPage } from '../../support/page/CadastroPage';
import { HomePage } from '../../support/page/HomePage';
import {EsqueceuPage} from '../../support/page/EsqueceuPage';
import 'cypress-network-idle';

import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

const homePage = new HomePage();
const esqueceuPage = new EsqueceuPage();


Given('Acesso a url principal', () => {

  homePage.visit();
  homePage.clicarBtnEntrar();
});

When('clico no link esqueceu a senha e preencho o formulario de envio', () => {
  esqueceuPage.esqueceuSenha();
  esqueceuPage.preencherEmail();
  esqueceuPage.enviarForm();
});

Then('é exibido na tela a mensagem Um e-mail foi enviado para', () => {
  esqueceuPage.validarMensagem();
});
