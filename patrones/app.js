
let greet = require('./greet1');

//el codigo greet2 yt greet2a son equivalentes
//la forma mas utilizada en la forma de greet2 
//let greet2 = require('./greet2').greet;


/*greet();
greet2();*/
//greet2a.greet();
//------------------------------------------------------------//
/*const greet3 = require('./greet3');//objeto contruido/instanciado
console.log(greet3);
greet3.greet();*/

let greet2a = require('./greet2');
const{ greeting } = require('./greet3');
let greet3 = require('./greet3');
greet();
greet2a.greet();

greet3.greet();
//cambia el contenido del contructor
greet3.greeting = 'hello from the app';

let greet3b = require('./greet3');
greet3b.greet();

const Greet4 = require('./greet4'); //contrctor
let myGreet = new (Greet4);
myGreet.greet();

const greet5 = require('./greet5');
greet5.greet();
greet5.greet2();