/* Este código faz a conexão com o Banco de Dados (Data Base)
Created by: Anthue
Date: 2019-08-06*/
const express = require('express');
const mongoose = require('mongoose'); // importação do Mongoose para acesso ao MongoDB
const cors = require('cors'); // importação da biblioteca para "inter-conexão" entre back e front

const routes = require('./routes'); //importa o arquivo routes.js

const server = express();

// String de conexão com o banco de dados
mongoose.connect('mongodb+srv://node-app1:xcIwtJsBdLOhenHh@cluster0-3sp4a.mongodb.net/develop1?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333); //porta do app/navegador
