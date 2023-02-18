//funcion constructora que tiene un obj vacio
//por lo que exporta un constructor
function Emitter() {
    this.events = {};
}

//agregamos una funcion llamada on, esta funcion recive 2 parametros
// "type" y "listener" y se valida si tienen algo
Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

//agregamos una funcion llamada emit, esta funcion recive 1 parametro
Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

//exportamos el constructor
module.exports = Emitter;