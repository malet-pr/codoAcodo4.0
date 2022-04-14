"use strict";

$(function() {$("#tabs").tabs();});

var carListComplete = [];
var carListShort = [];

function updateWheels(){
    let select = document.getElementById('wheels');
    let option = select.options[select.selectedIndex].text;
    return option;
}

function updateDoors(){
    let select = document.getElementById('doors');
    let option = select.options[select.selectedIndex].text;
    return option;
}

function updateBrand(){
    let select = document.getElementById('brand');
    let option = select.options[select.selectedIndex].text;
    return option;
}

function createCar(){
    let w = updateWheels();
    let d = updateDoors();
    let b = updateBrand();
    let checkedValues = $('input[name="extras"]:checked').map((i, el) => el.value).get();
    let v;
    if(checkedValues.length==2){
        v = new LuxuryCar(w,d,b);
    } else {
        v = new Car(w,d,b);
    }
    v.agregarAutoCompleto(carListComplete);
    v.agregarAuto(carListShort);
    document.getElementById('out').innerHTML = v.toString();
    console.log(carListShort);
}

document.getElementById('out2').innerHTML = carListShort;



class Car {

    constructor(cantidadRuedas,cantidadPuertas,marcaDestino) {
        this.cantidadRuedas = cantidadRuedas;
        this.cantidadPuertas = cantidadPuertas;
        this.marcaDestino = marcaDestino;
        this.setModelo(cantidadRuedas);
        this.setTipoCarroceria(cantidadPuertas);
        this.setCostoFabricacion(this.tipoCarroceria);
        this.probado = false;
        this.fabricado = new Date();
    }

    setModelo(cantidadRuedas){
        if(cantidadRuedas=='dos ruedas'){
            this.modelo = 'moto';
        } else if (cantidadRuedas=='cuatro ruedas'){
            this.modelo = 'auto';
        } else {
            this.modelo = 'camioneta';
        }
    }

    setTipoCarroceria(cantidadPuertas){
        if(cantidadPuertas == 'sin puertas' || cantidadPuertas == 'tres puertas'){
            this.tipoCarroceria = 'chica';
        } else if (cantidadPuertas == 'cuatro puertas'){
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

    probarAuto(encenderMotor,apagarMotor,mover,frenar,acelerar,encenderLuces,apagarLuces,tocarBocina){
        if(encenderMotor && apagarMotor && mover && frenar && acelerar && encenderLuces && apagarLuces && tocarBocina){
            this.aptu = true;
        } else {
            this.apto = false;
        }
        this.probado = true;
    }

    carList = [];

    agregarAuto(carList){
        carList.push(`${this.modelo} para la marca ${this.marcaDestino} con carrocería ${this.tipoCarroceria}.`);
    }

    toString(){
        let status;
        let p;
        if(this.probado == false){
            status = 'no fue probado todavía';
        } else {
            if(this.apto == false){
                status = 'no es apto';
            } else {
            status = 'es apto';
            }
        }
        let formatter = new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
        });
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let str = `Es un vehículo modelo ${this.modelo}, tiene ${this.cantidadRuedas}, ${this.cantidadPuertas} y carrocería ${this.tipoCarroceria}.
Se fabricó para la marca ${this.marcaDestino} y su costo de fabricación es de ${formatter.format(this.costoFabricacion)}. 
Fue fabricado el ${this.fabricado.toLocaleDateString('es-AR', options)}, a las ${this.fabricado.getHours()} horas ${this.fabricado.getMinutes()} minutos y ${status}.`;
        return str;
    }

}

class LuxuryCar extends Car{

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