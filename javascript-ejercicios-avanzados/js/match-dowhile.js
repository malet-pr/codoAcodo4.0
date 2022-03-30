// esto es para poder usar prompt
"use strict";
const prompt = require('prompt-sync')({sigint:true});

/* Ejercicios

1. Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor 
  //Función max() devuelve el mayor de los argumentos pasados.
  Ejemplo Math.max(edad1, edad2, edad3)
*/
let names = [];
let ages = [];
console.log("Se pedirán tres nombres con sus respectivas edades.")
for(let i = 0; i < 3; i++){
    let name = prompt("Nombre: ");
    let age = prompt("Edad: ");
    names.push(name);
    ages.push(parseInt(age));
}
let maxAge = Math.max(ages[0],ages[1],ages[2]);
console.log(`La persona de mayor edad es ${names[ages.indexOf(maxAge)]} y tiene ${maxAge} años.`);

/*   2. Realiza un script que genere un número aleatorio entre 1 y 99 */
    //FUNCIÓN Math.floor: redondea al número entero menor.
    //FUNCIÓN Math.random: devuelve un número aleatorio mayor que 0 y menor que 1
console.log(Math.floor(Math.random() * 99) + 1);













































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
