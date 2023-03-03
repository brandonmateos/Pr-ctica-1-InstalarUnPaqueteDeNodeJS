//importamos la dependencia
var express = require("express");
//declaramos una app de express
var app = express();

//creamos una carpeta virtual y la vamos a mapear a una carpeta real
app.use("/assets", express.static(__dirname + "/public"));
app.use('/', function (req, res, next) {
  console.log('Request Url: ' + req.url);
  next();
});

//setteamos el puerto
var port = process.env.PORT || 3000;

//primera ruta a nivel raiz
app.get("/", function (req, res) {res.send(`
  <html><head><link href=assets/style.css type=text/css rel=stylesheet />
    </head><body><h1>Hello World</h1></body></html>
  `);
});


/*app.get('/', (req, res) => {
  cad = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="/assets/style.css" rel="stylesheet">
      <title>Document</title>
  </head>
  <body>
      <h1>Hello word, this is the root route update </h1>
  </body>
  </html>
  `
  res.send(cad);
});*/
//ruta, recibe un parametro
//para llamar en el local host http://localhost:3000/person/John
app.get("/person/:id", function (req, res) {
  res.send(
    "<html><head></head><body><h1>Person: " +
      req.params.id +
      "</h1></body></html>"
  );
});

//ruta /api, regresa un objeto JSON
app.get("/api", function (req, res) {
  res.json({ firstname: "John", lastname: "Doe" });
});

//inicio del servidor
app.listen(port);
