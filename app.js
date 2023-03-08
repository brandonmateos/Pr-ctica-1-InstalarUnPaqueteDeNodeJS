//importamos la dependencia
var express = require("express");
//declaramos una app de express
var app = express();
//creamos una carpeta virtual y la vamos a mapear a una carpeta real
app.use("/assets", express.static(__dirname + "/public"));
app.set('view engine', 'ejs');


app.use('/', function (req, res, next) {
  console.log('Request Url: ' + req.url);
  next();
});

//setteamos el puerto
var port = process.env.PORT || 3000;

//primera ruta a nivel raiz
app.get("/", function(req, res) {
  res.render('index');
});

//ruta, recibe un parametro
//para llamar en el local host http://localhost:3000/person/John
app.get("/person/:id", function (req, res) {
  res.render('person', { ID: req.params.id });
});

//ruta /api, regresa un objeto JSON
app.get("/api", function (req, res) {
  res.json({ firstname: "John", lastname: "Doe" });
});

//inicio del servidor
app.listen(port);
