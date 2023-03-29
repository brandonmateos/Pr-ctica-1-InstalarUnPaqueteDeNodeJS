//inyeccion de la dependencia express
let express = require('express');

//instancia del router al que asociaremos todas las rutas
let router = express.Router();

//le pegamos las rutas al router
router.get('/person', (req, res) => {
    res.send('has solicitado el listado de personas');
})

//exportamos el router
module.exports = router;