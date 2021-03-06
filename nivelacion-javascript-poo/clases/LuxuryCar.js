"use strict";
const car = require('./Car.js');

class LuxuryCar extends car{

    constructor(cantidadRuedas,cantidadPuertas,marcaDestino) {
        super(cantidadRuedas,cantidadPuertas,marcaDestino);
        this.techoCorredizo = true;
        this.asientoCuero = true;
        this.setCostoFabricacion();
    }

    setCostoFabricacion(){
        this.costoFabricacion = ((50000^2 + 85000)*5 + 180000) + 70000;
    }

    getInfo(){
        let info = super.getInfo();
        info.techoCorredizo = true;
        info.asientoCuero = true;
        info.luxury = true;
        return info;
    }

    toString(){
        return super.toString() +
        '\nEstá equipado con techo corredizo y con asientos de cuero reforzado.';
    }

}

module.exports = LuxuryCar;