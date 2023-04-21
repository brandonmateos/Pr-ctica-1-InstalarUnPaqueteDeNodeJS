//conectar a la base de datos de mongo
const express = require('express');
//mongoose es un paquete que nos permite conectarnos a una base de datos de mongo
const mongoose = require('mongoose');
//traemos las rutas de personas 
const personsRoutes = require('./routes/persons');
//dotenv es un paquete que nos permite leer variables de entorno
//en un archivo .env y usarlas en nuestro proyecto
require('dotenv').config();

//establecemos el valor de mongoose.Promise a la Promise global
mongoose.Promise = global.Promise;
const app = express();
const PORT = process.env.PORT || 3000;

//establecemos ekl valor para el motor de vistas
app.set('view engine', 'ejs');
//urlencoded para parsear el body en las peticiones tipo POST
app.use(express.urlencoded({extended: false}));
//usamos las rutas de personas
app.use(personsRoutes);


//mongo db connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('DB connected'))
    .catch((error) => console.error(error));

//puerto en el que va a correr el servidor
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
})