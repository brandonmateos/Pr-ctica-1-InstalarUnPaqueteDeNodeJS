//revealing module pattern
//este es el mas comun en los equpos de trabajo
/*Con este patrón, solo se exponen las variables y 
métodos que uno quiere mediante un objeto. */
let greeting = 'Hello from greet5';


let greet = () => {
    console.log(greeting);
}

let greet2 = () => {
    console.log("SOY EL GREET2 DE GREET5");
}


module.exports = {
    //cualquier de las dos formas siguietes es valida 
    //si los valores son iguales
    greet: greet,
    greet2: greet2,
    //greet
}