// import {openDb}  from './configDB.js';

const express = require('express');

const app = express()

app.use(express.json())

// openDb()

const port = 3000

app.get('/teste', (req, res) => res.status(200).send({ message: 'Olá mundo!' }))

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}!`))

module.exports = app
