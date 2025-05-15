Feature: Pesquisar Produto

  Scenario: Pesquisar Produto
    Given Acesso a url da dafiti
    When pesquiso a bermuda ciclista feminina
    Then deve exibir o texto bermuda ciclista feminina
