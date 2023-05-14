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

/*
    Aquin invocamos al metodo findById que
    regresa una promesa con dos caminos posibles
    En caso de éxito, el documento encontrado 
    queda en myPerson y este es enviado como
    parámetro al endpoint que renderiza la vista
    personUpdate que permite editar el documento

*/
router.get('/findById/:id', (req, res) => {
    Person.findById(req.params.id)
    .then((myPerson) => {res.render('personUpdate', {myPerson})})
    .catch((error) => {res.json({message: error})});
});

/*
Si todo sale bien, redireccionamos a nuestra vista 
principal que muestra todos los documentos de la 
colección, incluido el documento recién editado, 
de lo contrario, mostraremos un mensaje de error 
en formato JSON
 */
router.post('/updatePerson', (req, res) => {
    Person.findByIdAndUpdate(req.body.objId,
        {
            nombre: req.body.nombre,
            edad: req.body.edad,
            tipoSangre: req.body.tipoSangre,
            nss: req.body.nss
        })
    .then((data) => {res.redirect('/gente')})
    .catch((error) => {res.json({message: error})});
});

router.get('/confirmDelete/:id', (req, res) => {
    Person.findById(req.params.id)
    .then((data) => {res.render('confirmDelete', {data})})
    .catch((error) => {res.json({message: error})});
 });
  

router.get('/deletePerson/:id', (req, res) => {
   Person.findByIdAndDelete(req.params.id)
   .then((data) => {res.redirect('/gente')})
   .catch((error) => {res.json({message: error})});
});


module.exports = router;