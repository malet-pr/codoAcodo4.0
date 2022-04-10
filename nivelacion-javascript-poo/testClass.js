"use strict";
const car = require('./Car.js');
const luxuryCar = require('./LuxuryCar.js');

let auto1 = new car(4,5,'Ford');

console.log(auto1.toString());

let auto2 = new luxuryCar(5,7,'BW',true,true);

console.log(auto2.toString());