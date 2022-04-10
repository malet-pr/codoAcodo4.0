class Car {
    "use stric";

    constructor(){}

    constructor(cantidadRuedas,cantidadPuertas,tipoCarroceria,modelo,marcaDestino,costoFabricacion,apto) {
        this.cantidadRuedas = cantidadRuedas;
        this.cantidadPuertas = cantidadPuertas;
        this.tipoCarroceria = tipoCarroceria;
        this.modelo = modelo;
        this.marcaDestino = marcaDestino;
        this.costoFabricacion = costoFabricacion;
        this.apto = apto;
    }

    encenderMotor(test){
        if(test == true){
            console.log('Se encendió el motor');
        }
        return test;
    }
    apagarMotor(test){
        if(test == true){
            console.log('Se apagó el motor');
        }
        return test;
    }
    mover(test){
        if(test == true){
            console.log('El auto está en movimiento');
        }
        return test;
    }
    frenar(test){
        if(test == true){
            console.log('El auto frenó');
        }
        return test;
    }
    acelerar(test){
        if(test == true){
            console.log('El auto aceleró de 0 a 50');
        }
        return test;
    }
    encenderLuces(test){
        if(test == truetrue){
            console.log('Se encendieron las luces');
        }
        return test;
    }
    apagarLuces(test) {
        if(test == true){
            console.log('Se apagaron las luces');
        }
        return test;
    }
    tocarBocina(test){
        if(test == true){
            console.log('Sonó la bocina');
        }
        return test;
    }
    
    probarAuto(auto){
        if(auto.encenderMotor(test) && auto.apagarMotor(test) && auto.mover(test) && auto.frenar(test) && 
            auto.acelerar(test) && auto.encenderLuces(test) && auto.apagarLuces(test) && auto.tocarBocina(test)){
            auto.apto = true;
        }
        auto.apto = false;
    }

    listarAutos(arrAutos){
        let result = [];
        for(let auto in arrAutos){
            result.push(`${auto}: es modelo ${auto.modelo}, para la marca ${auto.marcaDestino},
                        y tiene carrocería ${auto.tipoCarroceria}.`);
        }
        return result;
    }

    agregarAuto(auto,listaAutos){
        listaAutos.push(`${auto}: es modelo ${auto.modelo}, para la marca ${auto.marcaDestino},
                        y tiene carrocería ${auto.tipoCarroceria}.`);
        return listaAutos;
    }

    toString(){
        retrun
        `El auto tiene ruedas: ${this.cantidadRuedas!=null ? this.cantidadRuedas : "desconocida"}, 
            puertas: ${this.cantidadPuertas!=null ? this.cantidadPuertas : "desconocida"},
            carrocería: ${this.tipoCarroceria!=null ? this.tipoCarroceria : "desconocida"},
            su modelo es: ${this.modelo!=null ? this.modelo : "desconocido"},
            se fabricó para la marca: ${this.marcaDestino!=null ? this.marcaDestino : "desconocida"},
            su costo de fabricación es: ${this.costoFabricacion!=null ? this.costoFabricacion : "desconocido"},
            la prueba dio como resultado que ${this.apto==true ? "es apto." : "no es apto."}`;
    }

}
