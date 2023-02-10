function greet(){
    console.log('Hello');
}
greet();//invoke the function

//functions as parameters
function logGreeting(fn){
    fn();
}
logGreeting(greet);
//se pasa la funcion greet como
//parametro e invocandola con el nombre del argumento fn

//function expression
let greetMe = function(){
    console.log('Hello from the function expression');
}
greetMe();

logGreeting(greetMe);
//function are first class, pass it as a parameter
