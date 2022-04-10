class LuxuryCarr extends Car{

    constructor(cantidadRuedas,cantidadPuertas,marcaDestino,techoCorredizo, asientoCuero,probado=false) {
        super(cantidadRuedas,cantidadPuertas,marcaDestino,probado);
        this.techoCorredizo = techoCorredizo;
        this.asientoCuero = asientoCuero;
        this.setCostoFabricacion();
        this.setEquipado();
    }

    setCostoFabricacion(){
        this.costoFabricacion = ((50000^2 + 85000)*5 + 180000) + 70000;
    }

    setEquipado(){
        if(this.techoCorredizo == true && this.asientoCuero == true){
            this.equipado = true;
        }
        this.equipado = false;
    }

    toString(){
        if(equipado){
            return super(this) + ' El auto está equipado.';
        } else {
            return super(this) + ' El auto no está equipado.';
        }
    }


}