# Nuvem BookStore - API NODE.js


![Linguagem](https://img.shields.io/badge/Linguagem-Java%20Script-yellow)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![IDE](https://img.shields.io/badge/IDE-VS%20CODE-blue)
![Ferramenta de teste](https://img.shields.io/badge/Ferramenta-Insomnia-purple)
![Status](https://img.shields.io/badge/Status-Concluído-darkgreen)



API REST desenvolvida com Node.js, Express e MongoDB, utilizando Mongoose para modelagem e comunicação com o banco de dados.

O projeto permite realizar o cadastro e gerenciamento de livros e autores, utilizando operações de CRUD e integração com o MongoDB Atlas para armazenamento dos dados.

## 🚀 Tecnologias utilizadas

- Node.js — ambiente de execução JavaScript
- Express — criação da API e gerenciamento das rotas
- MongoDB — banco de dados NoSQL
- MongoDB Atlas — serviço em nuvem utilizado para hospedar o banco de dados
- Mongoose — modelagem dos documentos e conexão com o MongoDB
- Dotenv — gerenciamento das variáveis de ambiente
- Nodemon — reinicialização automática da aplicação durante o desenvolvimento

## 🗄️ Banco de dados

O projeto utiliza MongoDB Atlas como banco de dados.
A conexão é realizada através do Mongoose utilizando uma variável de ambiente:

```text
    mongoose.connect(process.env.DB_CONNECTION_STRING);
``` 

A URL de conexão não deve ser colocada diretamente no código da aplicação.



## 🔐 Configuração do .env

Para executar o projeto, é necessário criar um arquivo chamado:
```text
.env
```

na raiz do projeto. Dentro dele, adicione a string de conexão disponibilizada pelo MongoDB Atlas:

```text
DB_CONNECTION_STRING=mongodb+srv://USUARIO:SENHA@SEU_CLUSTER.mongodb.net/NOME_DO_BANCO
```

### Como obter a string de conexão:

- Acesse o MongoDB Atlas.
- Entre no seu projeto/cluster.
- Clique em Connect.
- Selecione a opção para conectar sua aplicação.
- Copie a connection string disponibilizada pelo Atlas.
- Coloque essa string no arquivo .env.

---
Importante ⚠️ ➜ substitua os valores pelos dados do seu próprio MongoDB Atlas.

## 📦 Instalação

Clone o repositório:
```bash
git clone https://github.com/Jullya-Nigro07/NuvemBookStore.git
```

Entre na pasta do projeto:
```bash
cd nuvem-node
```

Instale as dependências no terminal:
```bash
npm install
```

Configure o arquivo .env seguindo as instruções acima.


## ▶️ Executando o projeto

Para iniciar a aplicação rode:
```bash
node server.js
```

Durante o desenvolvimento, também é possível utilizar o Nodemon:
```bash
npx nodemon server.js
```
---

### Depois de iniciar o servidor, a API estará disponível na porta configurada no projeto.

Exemplo:
```bash
http://localhost:3000
```


## 🏗️ Conceitos utilizados

Durante o desenvolvimento foram utilizados conceitos importantes do desenvolvimento de APIs com Node.js:

- Rotas HTTP
- async/await
- Tratamento de erros com try/catch
- Variáveis de ambiente
- Modelagem de dados com Mongoose
- Schemas e Models
- MongoDB Atlas
- Integração entre entidades de livros e autores
- JavaScript com ES Modules (import / export)

---