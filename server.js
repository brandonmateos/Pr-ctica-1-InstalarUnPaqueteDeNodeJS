//importamos la dependencia
var express = require("express");
//declaramos una app de express
var app = express();
//setteamos el puerto
var port = process.env.PORT || 3000;

//creamos una carpeta virtual y la vamos a mapear a una carpeta real
app.use("/assets", express.static(__dirname + "/public"));

//utilizar ejs como motor de vistas
app.set("view engine", "ejs");

//primera ruta a nivel raiz
app.get("/", function (req, res) {
  res.send(`<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="/assets/style.css" type="text/css" />
    </head><body><h1>Hello World</h1>
    <p>Esto es un parrafo y su contenido debe ser azul</p></body></html>
  `);
});

//segunda ruta a nivel raiz
app.get("/person/:id", (req, res) => {
  res.render("person", { ID: req.params.id, MENSAGGE: req.query.menssage, TIME: req.query.time });
});

//inicio del servidor
app.listen(port);
