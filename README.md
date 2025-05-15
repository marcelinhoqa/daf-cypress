## Pré-requisitos

- **Node v20.18.0 ou superior**
- **Npm 11.1.0 ou superior**
- **Visual Studio Code**
- **Git**

---

## Como rodar

    Etapa 1
    Clonar Repositório e jogar o repositório no seu C:
    O Windows tem algumas rotas com espaço como Área de Trabalho,
    isso pode gerar algum erro na hora de executar alguns comandos como o comando do ALLURE

    git clone https://github.com/seu-usuario/dafiti-cadastro-tests.git
    ------------------------------------------------------------------------------------------------------------------
    Etapa 2

    Depois de clonar o repositório, acessar a raiz do repositório e rodar os comandos para instalar as dependências.

    npm install
    npm install -g allure-commandline

    npm run test

    O Comando npm run test vai executar apenas 1 teste mas ele vai criar o report logo em seguida.
