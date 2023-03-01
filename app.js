const express = require("express");
const app = express();

/*app.get('/', function (req, res) {
  res.send('Hello World, this is the root route');
});*/

app.get("/", (req, res) => {
  //route handler  
//Nota: inyectar código HTML en una respuesta
  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Prueba de HTML</h1>
    
</body>
</html>`);
});

/*app.get ('/prueba', (req, res) => {
  res.send('Hello World, frome route Prueba');
});*/

//Puerto por defecto: 3000
app.listen(3000);

/*Notas:
1. Para ejecutar el servidor, en la consola de comandos, nos situamos en la carpeta 
donde se encuentra el archivo app.js y ejecutamos el comando node app.js
2. Para probar el servidor, abrimos un navegador y escribimos la dirección http://localhost:3000
3. Para detener el servidor, pulsamos Ctrl+C
*/
