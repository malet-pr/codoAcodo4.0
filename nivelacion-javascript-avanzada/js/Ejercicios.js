//Ejercicios

"use strict";
const prompt = require('prompt-sync')({sigint:true});

function validateInt(text){
    if (isNaN(parseInt(text))) {
        return false;
    } 
    return true;
}

function validateFloat(text){
    if (isNaN(parseFloat(text))) {
        return false;
    } 
    return true;
}

function validateArrayOfNumbers(arr, n){
    for(let i = 0; i < n; i++){
        let error = String(arr[i]) + " no es un número";
        try{
            if(isNaN(parseFloat(arr[i]))) throw error ;
        } catch(err) {
            console.log(err);
            return false;
        } 
    }
    return true;
}

function validateString(val) {
    if (!(typeof val === 'string' || val instanceof String)) {
        return false;
    }
    if (val == ""){
        return false;
    }
    return false;
}
 

function getNumber() {
    let flag = true;
    let x;
    do{
        let xText = prompt('número: ');
        if(!validateInt(xText)){
            console.error('Ese no es un número');
            continue;
        } 
        x = parseFloat(xText.replace(/,/g, '.'));
        if(!Number.isInteger(x)){
            console.log('Ese no es un número entero');
            continue;
        }
        flag = false;
    } while(flag);
    return x;
}

// 1 - Que pida un número del 1 al 12 y diga el nombre del mes correspondiente.
const months = ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'];
let x1 = prompt("Introduzca un número del 1 al 12: ");
if(!validateInt(x1)){
    console.error("No introdujo un número entero");
} else {
    let number = parseInt(x1)
    if(number > 0 && number < 13){
        console.log(months[number-1]);
    } else{
        console.error("El número introducido no es válido");
    }
} 

// 2 - Que pida una letra y detecte si es una vocal.
const vowels = ['a','e','i','o','u'];
let x2 = prompt('Introduzca una letra: ');
if(!validateString(x2)) {
    console.error('Usted no introdujo una letra');
} else {
    if(vowels.includes(x2[0].toLowerCase())){
        console.log('La primera letra de lo que usted introdujo es una vocal');
    } else {
        console.log('La primera letra de lo que usted introdujo no es una vocal');
    }
}

// 3 - Escribe un programa que acepte tres números, horas, minutos y segundos, y devuelva la hora que será dentro 
// de un segundo, controlando que sea una hora correcta.

function getHour(hText){
    if(!validateInt(hText)){
        console.error('Las horas tienen que ser números enteros');
        return;
    } 
    let hNum = parseInt(hText);
    if(hNum < 0 || hNum >= 24){
        console.error('Las horas son números entre 0 y 23');
        return;
    }
    return hNum;
}

function getMinSec(nText){
    if(!validateInt(nText)){
        console.error('Los minutos y segundos tienen que ser números enteros');
        return;
    } 
    let nNum = parseInt(nText);
    if(nNum < 0 || nNum >= 60){
        console.error('Los minutos y segundos son números entre 0 y 59');
        return;
    }
    return nNum;
}

let hText = prompt('Introduzca la hora: ');
if(validateInt(getHour(hText))){
    let mText = prompt('Introduzca los minutos: ');
    let sText;
    if(validateInt(getMinSec(mText))){
        sText = prompt('Introduzca los segundos: ');
    }
    if(validateInt(getMinSec(sText))){
        if(getMinSec(sText) + 1 < 60){
            console.log('En un segundo serán las ' + hText + ":" + mText + ":" + String(getMinSec(sText)+1));
        } else if (getMinSec(mText) + 1 < 60){
            console.log('En un segundo serán las ' + hText + ":" + String(getMinSec(mText)+1) + ":" + ":00" );
        } else if (getHour(hText) + 1 < 24){
            console.log('En un segundo serán las ' + String(getHour(hText)+1) + ":00:00" );
        } else {
            console.log('En un segundo serán las 00:00:00');
        }
    }
}

// 4 - Que pida 3 números y los muestre en pantalla de menor a mayor.
// 5 - Que pida 3 números y los muestre en pantalla de mayor a menor.

let str1 = prompt('Introduzca tres números separados por coma (decimales con punto): ');
let arr1 = str1.split(",");
if(arr1.length != 3){
    console.log('Usted no ha introducido tres números separados por coma');
} else {
    if(validateArrayOfNumbers(arr1,3)){
        let arrNum = [parseFloat(arr1[0]), parseFloat(arr1[1]),parseFloat(arr1[2])];
        console.log('Arreglo ordenado ascendente: ' + arrNum.sort());
        console.log('Arreglo ordenado descendente: ' + (arrNum.sort()).reverse());
        // No ordena bien los números negativos, revisar
    }
}

// 6 - Que pida un número y diga si es positivo o negativo.
let num = prompt('Introduzca un número: ');
if(!validateFloat(num)){
    console.error('Usted no ha introducido un número');
} else {
    let val = parseFloat(num);
    if(val < 0) {
        console.log('El número es negativo');
    } else if(val > 0){
        console.log('El número es positivo');
    } else {
        console.log('El número es cero');
    }
}

// 7 - Que solo permita introducir los caracteres S y N.
let text = prompt('Introduzca S ó N: ');
const reg = /^[SN]$/            // para que acepte mayúscula y minúscula /^[sSnN]$/
if (reg.test(text) && text.length==1) {
    console.log('Ingreso válido');
}
else {
    console.error('Ingreso no válido');
}

// 8 - Que pida un número y diga si es mayor de 100. 
let x3 = prompt("Introduzca un número: ");
if(validateFloat(x3)){
    let large = (parseFloat(x3) > 100) ? 'El número es mayor a 100' : 'El número es menor o igual a 100';
    console.log(large);
} else {
    console.error("Usted no a escrito un número");
}

// 9 - Que pida tres números y detecte si se han introducido en orden creciente.
// 10 - Que pida tres números y detecte si se han introducido en orden decreciente.
let orderUp = (x,y,z) => { if(z>y && y>x){return true;} return false;}
let orderDown = (x,y,z) => { if(z<y && y<x) {return true;} return false;}
let str2 = prompt('Introduzca tres números separados por coma (decimales con punto): ');
let arr2 = str2.split(",");
if(arr2.length != 3){
    console.log('Usted no ha introducido tres números separados por coma');
} else {
    if(validateArrayOfNumbers(arr2,3)) {
        let x = parseFloat(arr2[0]);
        let y = parseFloat(arr2[1]);
        let z = parseFloat(arr2[2]);
        if(orderUp(x,y,z)){
            console.log('Los números están en orden ascendente');
        } else if (orderDown(x,y,z)) {
            console.log('Los números están en orden descendente');
        } else {
            console.log('Los números no están en orden');
        }
    }
}

// 11 - Que pida 10 números y diga cuál es el mayor y cuál es el menor. 
let i = 0;
let arr10 = [];
console.log('Introduzca 10 números de a uno (decimales con punto)');
do{
    let x = prompt("número " + String(i+1) + ' : ');
    if(!validateFloat(x)){
        console.error('Ese no es un número');
        continue;
    }
    arr10.push(parseFloat(x));
    i++;
} while(i<10);
console.log('El menor de los números ingresados es ' + String(Math.min.apply(Math, arr10)));
console.log('El mayor de los números ingresados es ' + String(Math.max.apply(Math, arr10)));


// 12 - Que pida tres números e indicar si el tercero es igual a la suma del primero y el segundo.
//16 - Que tome tres números y diga si la multiplicación de los dos primeros es igual al tercero.
//17 - Que tome tres números y diga si el tercero es el resto de la división de los dos primeros.
let str = prompt('Introduzca tres números separados por coma (decimales con punto): ');
let arr = str.split(",");
let arrNum = [];
if(arr.length != 3){
    console.log('Usted no ha introducido tres números separados por coma');
} else {
    if(validateArrayOfNumbers(arr,3)) {
        let x = parseFloat(arr[0]);
        let y = parseFloat(arr[1]);
        let z = parseFloat(arr[2]);
        if(x+y==z){
            console.log('El tercer número es la suma de los dos primeros');
        } else if(x*y==z){
            console.log('El tercer número es el producto de los dos primeros');
        } else if(x%y==z){
            console.log('El tercer número es el resto de la división de los dos primeros');
        } else {
            console.log('Los números no tienen relación');
        }
    }
}


// 14 - Que tome dos números del 1 al 5 y diga si ambos son primos.
const primes = [2,3,5];
console.log('Introduzca dos números enteros del 1 al 5: ');
let x4 = 0;
do{
    let x = getNumber();
    if(x < 1 || x > 5){
        console.error('El número ingresado no está dentro del rango permitido');
        continue;
    }
    x4 = x
} while (x4 == 0);
let y4 = 0;
do{
    let x = getNumber();
    if(x < 1 || x > 5){
        console.error('El número ingresado no está dentro del rango permitido');
        continue;
    }
    y4 = x
} while (y4 == 0);
if(primes.includes(x4) && primes.includes(y4)){
    console.log('Los dos números son primos');
} else {
    console.log('Al menos uno de los números no es primo');
}


// 15 - Que tome dos números y diga si ambos son pares o impares.
console.log('Introduzca dos números enteros: ');
let x5 = getNumber();
let y5 = getNumber();
if((x5%2 == 0) && (y5%2 == 0)) {
    console.log('Ambos números son pares');
} else if((x5%2 == 1) && (y5%2 == 1)) {
    console.log('Ambos números son impares');
} else {
    console.log('Un número es par y el otro impar');
}

// TODO: completar 13,18,19,20 y 21

/* 	
13 - Que muestre un menú que contemple las opciones “Archivo”, “Buscar”, y “Salir”, en caso de que no se introduzca 
    una opción correcta se notificará por pantalla.
18 - Que muestre un menú donde las opciones sean “Equilátero”, “Isósceles” y “Escaleno”, pida una opción y calcule 
    perímetro del triángulo seleccionado.
19 - Que pase de Kg a otra unidad de medida de masa, mostrar en pantalla un menú con las opciones posibles.
20 - Que lea un importe en bruto y calcule su importe neto, si es mayor de 15.000 se le aplicara un 16% de impuestos, 
    en caso contrario se aplicara un 10%.
21 - Que calcule el sueldo que le corresponde al trabajador de una empresa que cobra 80.000 pesos anuales, el programa 
    debe realizar los cálculos en función de los siguientes criterios: 
a)	Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
b)	Si lleva menos de 10 años, pero más que 5 se le aplica un aumento del 7%.
c)	Si lleva menos de 5 años, pero más que 3 se le aplica un aumento del 5%.
d)	Si lleva menos de 3 se le aplica un aumento del 3%.
*/

/*
22 – Primer Juego: hacer un programa donde declaremos una variable de tipo entero y la iniciamos con un valor entre 
    1 y 10. Por teclado pedimos ingresar un numero e indicamos si ha acertado el valor del número escondido (el valor 
    de la variable inicializada).
*/

let ran = Math.floor(Math.random() * 10 + 1);
let guess = prompt('Ingrese un número entero del 1 al 10: ');
if(validateInt(guess)){
    let n = parseFloat(guess);
    if(n > 0 && n < 11){
        if(n==ran){
            console.log('Usted ha acertado el número');
        } else {
            console.log('Usted no ha acertado el número');
            console.log('El número era ' + String(ran));
        }
    } else {
        console.error('El número introducido no está entre 1 y 10');
    }
} else {
    console.error('Usted no ingresó un número entero');
}
