CRUD - API padrão RESTful


API baseada no framework Express
-tratamento de requisições e enviar respostas aos endpoints


MongoDB --> ODM Mongoose

MongoDB Atlas --> cloud service deploy

Nodemon --> real time app no ambiente de dev

Postman -> sera usado para testar a API

=========================================

Iniciando o projeto:

npm init -y

npm install express nodemon mongoose

git init

git branch -M main

  "scripts": {
    "start": "nodemon ./index.js localhost 3000"
  }

create index.js and import dependencies

    const express = require('express')
    const app = express()# api-node-mongodb
