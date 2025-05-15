# esqueceu.feature
Feature: Esqueceu a senha

  @esqueci
  Scenario: Esqueeu a senha
    Given Acesso a url principal
    When clico no link esqueceu a senha e preencho o formulario de envio
    Then é exibido na tela a mensagem Um e-mail foi enviado para
