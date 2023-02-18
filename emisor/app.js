//inyectamos la dependecia
var Emitter = require('./emitter');

var emtr = new Emitter();

//creamos un nuevo objeto
emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');

//creamos un nuevo objeto
emtr.on('jump', () => {
    console.log('Someone jumped!');
});


//Los eventos se pueden emitir
console.log (emtr);
emtr.emit('jump');