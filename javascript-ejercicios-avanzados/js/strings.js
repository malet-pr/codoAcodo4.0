// esto es para poder usar prompt
"use strict";
const prompt = require('prompt-sync')({sigint:true});

/* Ejercicios
1. Realiza un script que pida un texto y lo muestre en mayúsculas.
Investigar e implementar:  .toUpperCase */

let text = prompt("Escriba un texto: ");
let newText = text.toUpperCase();
console.log(newText);

/* 2. Realiza un script que cuente el número de vocales que tiene un texto. */

// sin regex
const vowels = ['a','e','i','o','u'];
let text2 = prompt("Escriba otro texto: ");
let str = text2.toLowerCase().split(" ");
let count = 0;
for(let i=0;i<str.length;i++){
    for(let char of str[i]){
        if(vowels.includes(char)){
            count++;
        }
    }
}
console.log(count);

// con regex
const pattern = /[aeiou]/gi;
let text3 = prompt("Escriba otro texto: ");
console.log(text3.match(pattern).length);



/* 3. Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, 
si tecleo “hola que tal” deberá mostrar “lat euq aloh”. */

let text4 = prompt("Escriba un nuevo texto: ");
console.log(text4.split("").reverse().join(""));

/* 4. Realiza un juego de Piedra Papel Tijera contra Gana ARBI. */

// no se que es Gana ARBI pero se me ocurre que puede se ésto

let options = ["piedra","papel","tijera"];
let choice = prompt("¿Piedra, papel o tijera? (o salir para terminar) : ");
while(choice.toLowerCase() != "salir"){
    switch (choice.toLowerCase()){
        case 'piedra':
            console.log('papel');
            break;
        case 'papel':
            console.log("tijera");
            break;
        case 'tijera':
            console.log("piedra");
            break;
        default:
            console.log("tiene que escribir una opcion (o salir para terminar): piedra, papel, tijera");
    }
    choice = prompt("¿Piedra, papel o tijera? : ");
} 





























/* let respuesta = "OTTAWA"; 	 	 
let acierto = false; 	 	 
let contador = 0;	 	 

while(contador < 3 && acierto === false) {	 	 
    let respUsuario = prompt("Capital de Canada: (Tenes 3 intentos)").toUpperCase();	 	 
 if (respUsuario === respuesta) { 	 	 
 acierto = true; 	 	 
 document.write("Felicitaciones, acertaste");	 	 
 }	 	 
 contador++;	 	 
}	 	 
if (!acierto) {
    document.write("Lo sentimos, has consumido tus 3 intentos")
}; 	 	 

 */
