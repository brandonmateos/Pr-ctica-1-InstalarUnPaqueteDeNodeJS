//conectar a la base de datos de mongo
const express = require('express');

//mongoose es un paquete que nos permite conectarnos a una base de datos de mongo
const mongoose = require('mongoose');

//dotenv es un paquete que nos permite leer variables de entorno
//en un archivo .env
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

//routes
app.get('/', (req, res) => {
    res.send('Hello World')
});

//mongo db connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('DB connected'))
    .catch((error) => console.error(error));


app.listen(3000, () => {
    console.log(`Server on port ${PORT}`);
})