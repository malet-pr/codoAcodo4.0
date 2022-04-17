"use strict";

$(function() {$("#tabs").tabs();});
$(function() {$("#tabs")>$("#tab-3")>$("#list")>$("li").tooltip()});
$(document).tooltip({
    tooltipClass: "tooltip-style",
    position: { my: "top left", at: "top left", of: "#targetElement"}
});

var carList = [];
var completeCarList = [];
let n = 0;
var v;

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

function cleanCar(){
    document.getElementById('out1').innerHTML = "";
    $('input[name="extras"]:checked').prop('checked', false);
}

function createCar(){
    let equiped = '';
    let w = updateWheels();
    let d = updateDoors();
    let b = updateBrand();
    let checkedValues = $('input[name="extras"]:checked').map((i, el) => el.value).get();
    if(checkedValues.length==2){
        v = new LuxuryCar(w,d,b);
        equiped = ' Vehículo de alta gama.'
    } else {
        v = new Car(w,d,b);
        if(checkedValues[0] == 'roof'){
            equiped = ' Está equipado con techo corredizo.'
        }
        if(checkedValues[0] == 'leather'){
            equiped = ' Está Equipado con asientos de cuero reforzado.'
        }
    }
    v.agregarAuto(carList);
    completeCarList.push(v);
    document.getElementById('out1').innerHTML = v.toString() + equiped;
    $("#tabs")>$("#tab-3")>$("#list").append(`<a href="#" title="${v.toString() + equiped}"><li id=car${n}>${carList[n]}</li></a>`);
    $('#cars').append($('<option>').val(n).text(String(n+1) + '-' + carList[n]));
    n = n + 1;
}

function selectCar(){
    let select = document.getElementById('cars');
    let option = select.options[select.selectedIndex].value;
    return option;
}

function runTests(){
    let checkedValues = $('input[name="test-item"]:checked').map((i, el) => el.value).get();
    if(checkedValues.length==8){
        return true;
    } else {
       return false;
    }
}

function getResult(){
    let ch = selectCar();
    let car = completeCarList[ch];
    let tests = runTests();
    car.probarAuto(tests);
    document.getElementById('out2').innerHTML = `${car.apto==true ? "El vehículo es apto." : "El vehículo no es apto."}`;
    $(`#car${ch}`).prepend(`${car.apto==true ? "APTO: " : "NO APTO: "}`);
    $(`#cars option[value=${ch}]`).attr("disabled","disabled");
    $(`#cars option[value=${ch}]`).text('Test realizado - ' + carList[ch]);
}

$(function() {
    $('#check-all').on('click', function() {
      $('.tests input:checkbox').prop('checked', true);
    });
    $('#uncheck-all').on('click', function() {
      $('.tests input:checkbox').prop('checked', false);
    });
});

// CLASES
class Car {

    constructor(cantidadRuedas,cantidadPuertas,marcaDestino) {
        this.cantidadRuedas = cantidadRuedas;
        this.cantidadPuertas = cantidadPuertas;
        this.marcaDestino = marcaDestino;
        this.setModelo(cantidadRuedas);
        this.setTipoCarroceria(cantidadPuertas);
        this.setCostoFabricacion(this.tipoCarroceria);
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

    probarAuto(tests){
        if(tests==true){
            this.apto = true;
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
        let formatter = new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
        });
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let str = `Es un vehículo modelo ${this.modelo}, tiene ${this.cantidadRuedas}, ${this.cantidadPuertas} y carrocería ${this.tipoCarroceria}.
Se fabricó para la marca ${this.marcaDestino} y su costo de fabricación es de ${formatter.format(this.costoFabricacion)}. 
Fue fabricado el ${this.fabricado.toLocaleDateString('es-AR', options)}, a las ${this.fabricado.getHours()} horas ${this.fabricado.getMinutes()} minutos.`;
        return str;
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
            apto:this.apto,
        };
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