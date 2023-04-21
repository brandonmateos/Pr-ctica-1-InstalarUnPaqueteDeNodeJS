const mongoose = require('mongoose');
const PersonScheama = new mongoose.Schema({
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String
});

module.exports = mongoose.model('Persons', PersonScheama);
