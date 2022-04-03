"use strict";
const prompt = require('prompt-sync')({sigint:true});

//Ejercicio
//Crear un Programa que Pide una nota (número). Muestra la calificación según la nota:
/* 0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente */

function validateGrade(text){
    if (isNaN(parseFloat(text))) {
        return false;
    } else if (parseFloat(text) < 0 | parseFloat(text) > 10) {
        return false;
    }
    return true;
}

let gradeText = prompt("Introduzca la nota: ");
if(!validateGrade(gradeText)){
    console.error("La nota tiene que ser un número entre 0 y 10");
} else {
    let x = parseFloat(gradeText);
    if(x < 3) console.log('Muy deficiente');
    else if (x>=3 && x<5) console.log('Insuficiente');
    else if (x>=5 && x<6) console.log('Suficiente');
    else if (x>=6 && x<7) console.log('Bien');
    else if (x>=7 && x<9) console.log('Notable');
    else console.log('Sobresaliente');
}



//Ejercicio
/* Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben 
mostrarse todas las cadenas concatenadas con un guión -. */

var strings = [];
var lastInput = "";
do{
    lastInput = prompt("Introduzca un texto (cancelar para salir): ");
    if(lastInput != 'cancelar') strings.push(lastInput);
}while (lastInput != "cancelar");
console.log(strings.join('-'));


//Ejercicio
/* Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un 
«alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

function validateNumber(text){
    if (isNaN(parseFloat(text))) {
        return false;
    } 
    return true;
}

var numbers = [];
var lastInput = "";
do{
    lastInput = prompt("Introduzca un número (cancelar para salir): ");
    if(lastInput != 'cancelar') {
        if(!validateNumber(lastInput)){
            console.error("Debe introducir un número o cancelar para salir");
        }else{
            numbers.push(parseFloat(lastInput));
        }
    }
}while (lastInput != "cancelar");
let sum = numbers.reduce((a, b) => a + b, 0);
console.log(Math.round((sum + Number.EPSILON) * 1000) / 1000);

