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

app.get('/index/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const isEven = id % 2 === 0;
  const elements = Array.from({ length: id }, (_, index) => index + 1);

  const data = {
    number: id,
    isEven,
    elements,
  };

  res.render('index', data);
});
/*
//primera ruta a nivel raiz
app.get("/", function(req, res) {
  //numero par o impar
  res.render('index');
});
*/

//ruta, recibe un parametro
//para llamar en el local host http://localhost:3000/person/John
let data = [
  { id: 1, nombre: "John", apellido: "Doe", edad: 25 },
  { id: 2, nombre: "Jane", apellido: "Perez", edad: 23 },
  { id: 3, nombre: "Mary", apellido: "Hernandez", edad: 21 },
];
app.get("/personas", function (req, res) {
  res.render('personas', { data });
});

//ruta /api, regresa un objeto JSON
app.get("/api", function (req, res) {
  res.json({ firstname: "John", lastname: "Doe" });
});

//inicio del servidor
app.listen(port);
