# cadastro.feature
Feature: Cadastro de usuário na Dafiti

  Scenario: Usuário já cadastrado
    Given Acesso a url principal e preencha o formulario de cadastro
    When clico no botao "Criar conta"
    Then deve ver a mensagem "Conta já existente"
