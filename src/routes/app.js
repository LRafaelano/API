const express = require('express');
const pelicula = require('../controller/route_pelicula');

const app = express.Router();

app.get('/', pelicula.hola);
 
module.exports = app;
