const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//inyectamos el modelo de personas
let Person = require('../models/persons');

router.get('/gente', async (req, res) => {
    const Persons = await Person.find();
    res.render('persons', {Persons})
});

router.get('/addPerson',(req,res)=>{
    res.render('addPerson');
});

router.post('/addPerson', (req, res) => {
    /*
        Este modelo contiene el Schema de MongoDB 
        que permite crear un nuevo documento
    */
    const newPerson = Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });

    newPerson
    //invocamos el metodo "save" para persistir
    //el nuevo documento en la coleccion
    .save()
    .then((data) => {res.redirect('/gente')})
    .catch((error) => {res.json({message: error})});
});

module.exports = router;