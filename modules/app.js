/*require('./greet')

greet();

let greet = require("./greet");// importar la función greet
greet();*/


//Iniciamos objeto basio
let obj = {};

//creamos objeto con propiedades
/*let persona = {
    nombre: "Carlos",
    apellido: "Ulibarri",
};
//imprimimos el objeto
console.log(persona);

//imprimimos las keys del objeto
console.log(persona.nombre);
console.log(persona.apellido);*/

//creamos objeto con propiedades con una función
let persona = {
    nombre: "Carlos",
    apellido: "Ulibarri",
    getName: function () {
        return `${this.nombre} ${this.apellido} `;
    },
    //creamos un objeto dentro de otro objeto
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro ",
        cp : "28000",
        municipio: "Colima",
        getDomicilio: function () {
            return `${this.calle} Colonia: ${this.colonia} CP: ${this.cp},${this.municipio}`;
        }
    }


};
//Llamamos a la función dentro del objeto
//console.log(persona.getName());

//Llamamos a la función dentro del objeto dentro del objeto
console.log(persona.domicilio.getDomicilio());
