# Back-end para o Sistema de controle de lotes
Sistema de controle de lotes criado para substituir o atual, que ainda é realizado em papel pelos colaboradores

## Requisitos
Foram utilizados os frameworks Express (para agilizar o desenvolvimento da API RESTful) e Sequelize (um ORM que cria tabelas de banco de dados e faz requisições para pegar dados desejados deste banco). 
O banco de dados foi o SQLITE3, escolhido pela sua portabilidade e utilização da sintaxe SQL.

`npm install -g npm node-gyp sequelize-cli express-generator express sequelize sqlite3 body-parser cors --save`

Opcionalmente, é possível apenas execitar o comando `npm install` na raiz do projeto, e as dependências serão instaladas.
