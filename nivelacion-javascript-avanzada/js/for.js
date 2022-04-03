"use strict";
const prompt = require('prompt-sync')({sigint:true});

//Ejercicio
/* 1. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666 */

for(let i=1; i<31; i++){
    let str = i.toString();
    console.log(str.repeat(i));
}

console.log('\n\n'); // para separar los ejercicios


//Ejercicio
/* 2. Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de 
la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22 */

function validateNumber(text){
    if (isNaN(parseFloat(text))) {
        return false;
    } 
    return true;
}
let x = prompt("Escriba un número entero: ");
if(validateNumber){
    for(let i=parseInt(x); i>1; i--){
        let str = i.toString();
        console.log(str.repeat(i));
    }
} else {
    console.error("Ese en es un número entero.")
}


console.log('\n\n'); // para separar los ejercicios


//Ejercicio
/* 3. Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario 
(no mayor de 50) :

1
12
123
1234
12345
123456
 */
let y = prompt("Escriba un número entero menor a 50: ");
if(validateNumber && parseInt(y) <= 50){
    for (let i = 1; i <= parseInt(y) ; i++) {
        let arr =  Array(i).fill().map((_, idx) => 1 + idx);
        console.log(arr.join(''));
    }
} else {
    console.error("Ese en es un número entero menor a 50.")
}

console.log('\n\n'); // para separar los ejercicios


//Ejercicio
/* 4. Un script que escriba los números del 1 al 500, que indique cuales son múltiplos de 4 y de 9 y que 
cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
 */
function multipleOf(number1,number2){
    if(number1%number2 == 0) return true;
    return false;
}
for(let i=1;i<=500;i++){
    if (multipleOf(i,9) && multipleOf(i,5)){
        console.log(i.toString() + ' (Multiplo de 9)' + '\n------------------------------------------' );
    } else if (multipleOf(i,4) && multipleOf(i,5)){
        console.log(i.toString() + ' (Multiplo de 4)' + '\n------------------------------------------' );
    } else if (multipleOf(i,5) && !multipleOf(i,4) && !multipleOf(i,9)) {
        console.log(i.toString() + '\n------------------------------------------' );
    } else if (multipleOf(i,4)){
        console.log(i.toString() + ' (Multiplo de 4)');
    } else if (multipleOf(i,9)){
        console.log(i.toString() + ' (Multiplo de 9)'); 
    } else {
        console.log(i);
    }
}

console.log('\n\n'); // para separar los ejercicios

//Ejercicio
/* 5. Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada una de las 
celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 
los números irán del 35 al 1. */

let colText = prompt("número de columnas: ");
let rowText = prompt("número de filas: ");
let row;
let col;
let maxNum;
if(validateNumber(colText) && validateNumber(rowText)){
    col = parseInt(colText);
    row = parseInt(rowText);
    maxNum = col*row;
} else {
    console.error("los números de columnas y filas tienen que ser enteros");
}
let array = [];
for(let i = 0; i < row; i++){
    let max = maxNum - i * col 
    let min = max - col +1
    let arr =  Array(max-min+1).fill().map((_, idx) => max - idx);
    array.push(arr);
}
console.table(array);



