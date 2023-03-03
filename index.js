//importamos la dependencia
var express = require("express");
//declaramos una app de express
var app = express();

//setteamos el puerto
var port = process.env.PORT || 3000;

//primera ruta a nivel raiz
app.get("/", function (req, res) {
  res.send("<html><head></head><body><h1>Hola Mundo</h1></body></html>");
});

//segunda ruta /api, regresa un objeto JSON
app.get("/api", function (req, res) {
    res.json({ firstname: "John", lastname: "Doe" });
});

//tercera ruta, recive un parametro
//para llamar en el local host http://localhost:3000/person/John
app.get('/person/:id', function(req, res) {+
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

//inicio del servidor
app.listen(port);
