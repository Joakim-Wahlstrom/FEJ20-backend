const express = require('express');
const app = express();

// IMPORTERA CONTROLLERS
const todosController = require('./controllers/todosController');



// CONTROLLERS
app.use('/todos', todosController);

module.exports = app;