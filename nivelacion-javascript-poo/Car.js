"use strict";
const prompt = require('prompt-sync')({sigint:true});  

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

class Car {

    constructor(cantidadRuedas,cantidadPuertas,marcaDestino,probado = false) {
        this.cantidadRuedas = cantidadRuedas;
        this.cantidadPuertas = cantidadPuertas;
        this.marcaDestino = marcaDestino;
        this.setModelo(cantidadRuedas);
        this.setTipoCarroceria(cantidadPuertas);
        this.setCostoFabricacion(this.tipoCarroceria);
        this.probado = probado;
        this.fabricado = new Date();
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
        } else if (cantidadPuertas > 3 && cantidadPuertas < 6){
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

    validateInput(text){
        let reg = /^[sS]$/           
        if (reg.test(text)) return true;
        return false;
    }

    encenderMotor(){
        let tr = prompt(`¿Se enciende el motor? (s,S,n,N): `);
        return this.validateInput(tr);
    }
    apagarMotor(){
        let tr = prompt(`¿Se apaga el motor? (s,S,n,N): `);
        return this.validateInput(tr);      
    }
    mover(){
        let tr = prompt(`¿Se mueve el auto? (s,S,n,N): `);
        return this.validateInput(tr);  
    }
    frenar(){
        let tr = prompt(`¿Frena el auto? (s,S,n,N): `);
        return this.validateInput(tr);    
    }
    acelerar(){
        let tr = prompt(`¿Acelera el auto de 0 a 50? (s,S,n,N): `);
        return this.validateInput(tr);    
    }
    encenderLuces(){
        let tr = prompt(`¿Se encienden las luces? (s,S,n,N): `);
        return this.validateInput(tr);   
    }
    apagarLuces() {
        let tr = prompt(`¿Se apagan las luces? (s,S,n,N): `);
        return this.validateInput(tr);   
    }
    tocarBocina(){
        let tr = prompt(`¿Suena la bocina? (s,S,n,N): `);
        return this.validateInput(tr);    
    }

    probarAuto(){
        let x1 = this.encenderMotor();
        let x2 = this.apagarMotor();
        let x3 = this.mover();
        let x4 = this.frenar();
        let x5 = this.acelerar();
        let x6 = this.encenderLuces();
        let x7 = this.apagarLuces();
        let x8 = this.tocarBocina();
        if(x1 && x2 && x3 && x4 && x5 && x6 && x7 && x8){
            this.apto = true;
        } else {
            this.apto = false;
        }
        this.probado = true;
        console.log(`De acuerdo a las pruebas realizadas, el auto es ${this.apto==true ? "apto." : "no apto."}`)
    }

    carList = [];

    agregarAuto(carList){
        carList.push(`${this.modelo} para la marca ${this.marcaDestino} con carrocería ${this.tipoCarroceria}.`);
    }

    getInfo(){
        return {
            cantidadRuedas: this.cantidadRuedas,
            cantidadPuertas: this.cantidadPuertas,
            marcaDestino: this.marcaDestino,
            modelo: this.modelo,
            tipoCarroceria: this.tipoCarroceria,
            costoFabricacion: this.costoFabricacion,
            fabricado: this.fabricado,
            probado: this.probado,
            apto:this.apto,
        };
    }
 
    toString(){
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
        let str = `El auto tiene ruedas: ${this.cantidadRuedas!=null ? this.cantidadRuedas : "desconocida"}, 
            puertas: ${this.cantidadPuertas!=null ? this.cantidadPuertas : "desconocida"},
            carrocería: ${this.tipoCarroceria!=null ? this.tipoCarroceria : "desconocida"},
            su modelo es: ${this.modelo!=null ? this.modelo : "desconocido"},
            se fabricó para la marca: ${this.marcaDestino!=null ? this.marcaDestino : "desconocida"},
            su costo de fabricación es: ${this.costoFabricacion!=null ? this.costoFabricacion : "desconocido"}.
            El auto fue fabricado el ${this.fabricado.toLocaleDateString('es-AR', options)}, a las ${this.fabricado.getHours()} horas ${this.fabricado.getMinutes()} minutos y  ${status}.`;
        return str;
    }

    compareTo(other){
        if(this.fabricado < other.fabricado) return -1;
        if(this.fabricado > other.fabricado) return 1;
        return 0;
    }


}

module.exports = Car;
