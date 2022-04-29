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

git push origin main

  "scripts": {
    "start": "nodemon ./index.js localhost 3000"
  }

create index.js and import dependencies

  const express = require('express')
  const app = express()
  const mongoose = require('mongoose')



#database acess:

guilhermemm-dev
gmmdev123

mongodb+srv://guilhermemm-dev:<password>@api-cluster.3ghz3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


PS: ter cuidado com informações sensisveis, para nao ficarem publicas no github