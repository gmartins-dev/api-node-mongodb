#CRUD - API padrão RESTful


Express --> tratamento de requisições e enviar respostas aos endpoints

-MongoDB --> ODM Mongoose

-MongoDB Atlas --> cloud service deploy

-Nodemon --> real time app on dev ambient

-Postman -> for API requisions and responses tests

-Dotenv -> security, using local variables to not export sensitive application data

=========================================

Iniciando o projeto:

npm init -y

npm install express nodemon mongoose

git init

git branch -M main

git push origin main

  "scripts": {
    "start": "nodemon ./index.js localhost 3000"
  }

create index.js and import dependencies

  const express = require('express')
  const app = express()
  const mongoose = require('mongoose')


#database acess:

.env local variables



#POSSIVEIS MELHORIAS:

-converter o ID enviado pelo db para algo mais "legivel" 