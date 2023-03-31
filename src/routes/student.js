//inyectamos la dependencia de express
const express = require('express');

//instancia del router al que asociaremos todas las rutas
const router = express.Router();

//app que hace la funcion de servidor
let app = express();
let personsRoute = require('./person');
let studentRoute = require('./student');
//Rutas
router.get('/student', (req, res) => res.render('student'));//renderiza la vista student como respuesta a la ruta /student

router.post('/addStudent', (req, res) => {
  //renderisa la vista displayData como respuesta a la ruta /add-student

  res.render('displayData', {
    nombre: req.body.nombre,
    nss: req.body.nss,
    edad: req.body.edad,
    tipoSangre: req.body.tipoSangre
  });
});

//***exportacion***
module.exports = router;