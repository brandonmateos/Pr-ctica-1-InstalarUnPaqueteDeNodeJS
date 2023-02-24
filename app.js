//inyectamos la dependecia
// var Emitter = require('./emitter');
var Emitter = require('events');
var config = require('./config');
var emtr = new Emitter();

//creamos un nuevo objeto
/*emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});*/
emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on(config.events.GREET, () => {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');

//creamos un nuevo objeto
emtr.on(config.events.JUMP, () => {
    console.log('Someone jumped!');
});


//Los eventos se pueden emitir
console.log (emtr);
emtr.emit('jump');
//____________________________________________________________
