# 🧪 Projeto de Testes E2E - Cadastro Dafiti

Este projeto contém testes end-to-end (E2E) automatizados utilizando **Cypress**, **Cucumber (Gherkin)** e **Allure Reports**,  
com o objetivo de validar o fluxo de **cadastro de usuário** no site da **Dafiti**.

---

## 🔧 Pré-requisitos

- **Node**
- **Visual Studio Code**
- **Git**

---

## 📁 Estrutura do Projeto

```plaintext
cypress/
├── e2e/
│   └── features/
│       ├── cadastro.feature       # Especificação do cenário em Gherkin
│       └── cadastro.step.js       # Implementação dos steps
├── support/
│   ├── page/
│   │   ├── CadastroPage.js        # Page Object do formulário de cadastro
│   │   └── HomePage.js            # Page Object da home/login
│   ├── commands.js                # Comandos customizados do Cypress
│   └── e2e.js                     # Arquivo de suporte global
├── cypress.config.js              # Configuração do Cypress
├── package.json                   # Gerenciador de dependências e scripts
├── .gitignore                     # Arquivos ignorados no versionamento
└── README.md
```

## Tecnologias utilizadas

- Cypress, Cucumber, Allure Report, Faker-br

-Plugins úteis:

    cypress-network-idle — Aguarda até que a rede esteja ociosa

    cypress-wait-until — Esperas personalizadas

    cypress-xpath — Suporte a seletores XPath

## Como rodar

Clonar Repositório e Instalar as dependencias

git clone https://github.com/seu-usuario/dafiti-cadastro-tests.git
cd dafiti-cadastro-tests

npm install

npm run test

npm run report

```

```
