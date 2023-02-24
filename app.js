
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
//Puerto por defecto: 3000
app.listen(3000)

/*Notas:
1. Para ejecutar el servidor, en la consola de comandos, nos situamos en la carpeta 
donde se encuentra el archivo app.js y ejecutamos el comando node app.js
2. Para probar el servidor, abrimos un navegador y escribimos la dirección http://localhost:3000
3. Para detener el servidor, pulsamos Ctrl+C
*/