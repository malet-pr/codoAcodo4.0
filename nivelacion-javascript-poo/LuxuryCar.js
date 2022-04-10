const car = require('./Car.js');
class LuxuryCar extends car{

    constructor(cantidadRuedas,cantidadPuertas,marcaDestino,techoCorredizo, asientoCuero,probado=false) {
        super(cantidadRuedas,cantidadPuertas,marcaDestino,probado);
        this.techoCorredizo = techoCorredizo;
        this.asientoCuero = asientoCuero;
        this.setCostoFabricacion();
    }

    setCostoFabricacion(){
        this.costoFabricacion = ((50000^2 + 85000)*5 + 180000) + 70000;
    }

    checkEquipado(){
        if(this.techoCorredizo == true && this.asientoCuero == true){
            return true;
        } 
        return false;
    }

    toString(test){
        if(this.checkEquipado()){
            return super.toString() +' El auto está equipado.';
        } else {
            return super.toString() +' El auto no está equipado.';
        }
    }

}

module.exports = LuxuryCar;