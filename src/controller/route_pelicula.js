const express = require('express');
//conexion a bd

let hola = (req, res) => {
    res.send('Hello World desde controller')
  };

 module.exports = {
     hola,
 };
