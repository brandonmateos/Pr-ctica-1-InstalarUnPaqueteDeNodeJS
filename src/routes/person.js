//inyeccion de la dependencia express
const express = require('express');

//instancia del router al que asociaremos todas las rutas
let router = express.Router();

//le pegamos las rutas al router
router.get('/student', function (req, res) {
    let t=req.params.id;
    res.render('student');
});

router.post('/addStudent', function (req, res) {
    //renderisa la vista displayData como respuesta a la ruta /add-student
    res.render('displayData', {
        nombre: req.body.nombre,
        nss: req.body.nss,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre
    });
});

router.post('/personJson',express.json({type:'*/*'}), function (req, res) {
    console.log(`nombre: ${req.body.nombre}
    apellido: ${req.body.apellido}`)
});

router.get('/testJson', function (req, res) {
    res.render('testJson');
});

//exportamos el router
module.exports = router;