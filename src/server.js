//inyectamos la dependencia de express
let express = require('express');
// app que hace la funcion de servidor 
let app = express();
//incluimos el router que viene de persons
let personsRouter = require('./routes/person');


app.set('view engine', 'ejs');
//pegamos las rutas
app.use(personsRouter);
app.use('/assets', express.static(__dirname + '/public'));

//indicamos el puerto en el que escuchara el servidor
let PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`escuchando en el purto ${PORT}`)
})