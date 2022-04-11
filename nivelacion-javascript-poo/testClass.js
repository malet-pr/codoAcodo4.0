"use strict";
const prompt = require('prompt-sync')({sigint:true});  
const car = require('./Car.js');
const luxuryCar = require('./LuxuryCar.js');

console.log('\n------------------------------------------------------------------------\n');

console.log('Primer auto');
let auto1 = new car(4,5,'Ford');
console.log(auto1.toString());
auto1.probarAuto();
console.log(auto1.getInfo());       // para ver cambio de estado de no probado a apto/no apto

console.log('\n');

console.log('Segundo auto');
let auto2 = new luxuryCar(5,7,'BW');
console.log(auto2.toString());
auto2.probarAuto();
console.log(auto2.getInfo());       // para ver cambio de estado de no probado a apto/no apto

console.log('\n');

console.log('Vehículos fabricados:');
let lista = [];
auto1.agregarAuto(lista);
auto2.agregarAuto(lista);
lista.forEach(a => console.log(a));

console.log('\n------------------------------------------------------------------------\n');
