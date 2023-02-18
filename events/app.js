let obj = {
    nombre: 'Brandon',
    edad: 20,
    apellido: 'Lozano',
 
    keypress: function(){
        return 'Presionaste una tecla';
    },
    mouseOver: function(){
        return 'Pasaste el mouse sobre el elemento';
    }
}

//Llama a la propiedad nombre del objeto
console.log(obj.nombre);
console.log(obj['nombre']);

//Guarda el nombre de la propiedad en una variable
//y llama a la propiedad del objeto desde la variable
let myKey = 'nombre';
console.log(obj[myKey]);

//asignamos la funcion keypress a la variable myKey
//que se encuentra en el objeto obj
myKey = 'keypress'; 
console.log(obj[myKey]());

//asignamos la funcion mouseOver a la variable myKey
//que se encuentra en el objeto obj
myKey = 'mouseOver';
console.log(obj[myKey]());


//creamos un array y agregamos elementos
let myArray = [];
myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);

//agregamos una funcion pasada al vuelo (funcion anonima)
myArray.push(function(){
    return 'hola desde el array';
});

console.log(myArray);

//creamos un array lleno de funciones
let funcArray = [];
/*           aqui se crea una funcion anonima           
               |
               \/        */                
funcArray.push(() => {
    console.log('funcion 1');
});
funcArray.push(() => {
    console.log('funcion 2');
});
funcArray.push(() => {
    console.log('funcion 3');
});


//resive un pedaso de codigo como parametro
//item toma el tipo de dato de la funcion
//y la invoca
//se puede ejecutar ya que todos el array contiene funciones
funcArray.forEach((item) => {
    item();
});