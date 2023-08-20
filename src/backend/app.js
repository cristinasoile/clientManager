// import {openDb}  from './configDB.js';
// openDb()
const express = require('express');
const cors = require('cors');
const usersRouter = require('./src/routes/UsersRoutes');

const app = express()

app.use(express.json())
app.use(cors());

app.use('/users', usersRouter);

const port = 3000

app.get('/teste', (req, res) => res.status(200).send({ message: 'Olá mundo!' }))

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}!`))

module.exports = app
