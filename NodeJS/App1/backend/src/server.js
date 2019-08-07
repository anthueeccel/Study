const express = require('express');
const mongoose = require('mongoose'); //importação 
const cors = require('cors');

const routes = require('./routes'); //importa o arquivo routes.js

const server = express();

mongoose.connect('mongodb+srv://node-app1:xcIwtJsBdLOhenHh@cluster0-3sp4a.mongodb.net/develop1?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333); //porta no app/navegador
