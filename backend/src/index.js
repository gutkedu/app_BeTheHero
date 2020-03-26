const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
    Rota / Recurso
    GET: buscar uma informacao do back-end
    POST: Criar uma informacao no back-end
    PUT: Alterar uma informacao no back-end
    DELETE: deletar uma inforamcao no back-end

*/

/*
    Tipos de parametros:
    Query Params: Enviados na rota apos ? (Filtros , paginacao)
    Route Params: Utilizados para identificar recursos
    Request Body: Corpo , utilizado para criar ou alterar recursos
*/

/*
    SQL: MySQL, SQLite, PostgreSQL, Oracle...
    NoSQL: MongoDB, CouchDB...  
    Driver: SELECT * FROM users 
    Query Builder: table('users').select('*').where() -> knex.js
*/

app.listen(3333);
