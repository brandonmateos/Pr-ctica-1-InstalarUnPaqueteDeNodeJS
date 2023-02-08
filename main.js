//Convert Celsius to Fahrenheit:
const { toFahrenheit } = require("celsius");
 
toFahrenheit(36); // 97
toFahrenheit(36.68, 3); // 98.024
console.log(toFahrenheit('-40.691 degrees C', 5)); // -41.24380


//Convert Fahrenheit to Celsius:
const { toCelsius } = require("celsius");
 
toCelsius(100); // 38
toCelsius(100, 3); // 37.778
console.log(toCelsius('105.981 degrees F', 5)); // 41.10056

// Llamada toda las dependencias de celsius
const conu = require("celsius");

console.log(conu.toCelsius(100));
console.log(conu.toFahrenheit(36));