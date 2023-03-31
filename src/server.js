//inyectamos la dependencia de express
let express = require('express');
//Modulo para manejo de rutas/directorios en diferentes S.O.
let path = require('path');
//incluimos el router que viene de persons
let personsRouter = require('./routes/person');
//incluimos el router que viene de student
let studentRouter = require('./routes/student');

// app que hace la funcion de servidor 
let app = express();

//indicamos el puerto en el que escuchara el servidor
let PORT = process.env.PORT || 3000;

//configuramos el motor de plantillas ejs
app.set('view engine', 'ejs');
//configuramos el middleware para que pueda leer los datos
//del formulario
app.use(express.urlencoded({ extended: true })); 
//pegamos las rutas de persons al router
app.use(personsRouter);
//pegamos las rutas de student al router
app.use(studentRouter);
//configuramos el directorio publico
app.use('/assets', express.static(path.join(__dirname, '/public')));

//levantamos el servidor local
app.listen(PORT, () => {
    console.log(`escuchando en el purto ${PORT}`)
})