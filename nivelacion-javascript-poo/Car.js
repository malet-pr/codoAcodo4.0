class Car {
    "use stric";

    constructor(){}

    constructor(cantidadRuedas,cantidadPuertas,marcaDestino,probado = false) {
        this.cantidadRuedas = cantidadRuedas;
        this.cantidadPuertas = cantidadPuertas;
        this.marcaDestino = marcaDestino;
        this.setModelo(cantidadRuedas);
        this.setTipoCarroceria(cantidadPuertas);
        this.setCostoFabricacion(this.tipoCarroceria);
        this.probado = probado;
    }

    setModelo(cantidadRuedas){
        if(cantidadRuedas==2){
            this.modelo = 'moto';
        } else if (cantidadRuedas==4){
            this.modelo = 'auto';
        } else {
            this.modelo = 'camioneta';
        }
    }

    setTipoCarroceria(cantidadPuertas){
        if(cantidadPuertas < 4){
            this.tipoCarroceria = 'chica';
        } else if (cantidadPuertas > 3 && car.cantidadPuertas < 6){
            this.tipoCarroceria = 'mediana';
        } else {
            this.tipoCarroceria = 'grande';
        }
    }

    setCostoFabricacion(tipoCarroceria){
        if(tipoCarroceria=='chica'){
            this.costoFabricacion = (50000 + 5000);
        } else if (tipoCarroceria=='mediana'){
            this.costoFabricacion = (50000^2 + 85000);
        } else {
            this.costoFabricacion = ((50000^2 + 85000)*5 + 180000);
        }
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
    
    probarAuto(){
        this.probado = true;
        if(this.encenderMotor(test) && this.apagarMotor(test) && this.mover(test) && this.frenar(test) && 
            this.acelerar(test) && this.encenderLuces(test) && this.apagarLuces(test) && this.tocarBocina(test)){
            this.apto = true;
        } else {
            this.apto = false;
        }
    }

    listarAutos(arrCars){
        let result = [];
        for(let car in arrCars){
            result.push(`${car}: es modelo ${car.modelo}, para la marca ${car.marcaDestino},
                        y tiene carrocería ${car.tipoCarroceria}.`);
        }
        return result;
    }

    agregarAuto(car,carList){
        listaAutos.push(`${car}: es modelo ${car.modelo}, para la marca ${car.marcaDestino},
                        y tiene carrocería ${car.tipoCarroceria}.`);
        return carList;
    }

    toString(test){
        let status;
        if(this.probado == false){
            status = 'no fue probado todavía';
        } else {
            if(this.apto == false){
                status = 'no es apto';
            } else {
            status = 'es apto';
            }
        }
        retrun
        `El auto tiene ruedas: ${this.cantidadRuedas!=null ? this.cantidadRuedas : "desconocida"}, 
            puertas: ${this.cantidadPuertas!=null ? this.cantidadPuertas : "desconocida"},
            carrocería: ${this.tipoCarroceria!=null ? this.tipoCarroceria : "desconocida"},
            su modelo es: ${this.modelo!=null ? this.modelo : "desconocido"},
            se fabricó para la marca: ${this.marcaDestino!=null ? this.marcaDestino : "desconocida"},
            su costo de fabricación es: ${this.costoFabricacion!=null ? this.costoFabricacion : "desconocido"}.
            El auto ${status}.`;
    }

}
