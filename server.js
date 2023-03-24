//importamos la dependencia
var express = require("express");
//declaramos una app de express
var app = express();
//setteamos el puerto
var port = process.env.PORT || 3000;

//creamos una carpeta virtual y la vamos a mapear a una carpeta real
app.use("/assets", express.static(__dirname + "/public"));

//indicamos como vamos a parsear peticiones de URL(datos dentro del Body)
app.use(express.urlencoded({ extended: false }));

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
app.get("/student", (req, res) => {
  res.render("student");
});

//cuando lo pinta con el metodo send
/*app.post('/addStudent', function (req, res) {
  res.send(` Nombre: ${req.body.nombre} 
  Edad: ${req.body.edad}
  Nss: ${req.body.nss}
  Tipo de sangre: ${req.body.tipoSangre}`)
})*/
//solo una de las rutas add student puede estar activ
app.post('/addStudent', function (req, res) {
  res.render('displayData', {
    nombre: req.body.nombre,
    edad: req.body.edad,
    nss: req.body.nss,
    tipoSangre: req.body.tipoSangre
  })
})

//inicio del servidor
app.listen(port);
