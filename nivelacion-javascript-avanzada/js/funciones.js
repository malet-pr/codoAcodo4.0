/* Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. 
Si no recibe el iva, aplicará el 21 por ciento por defecto.
*/
var formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
});

function totalCost(precio,iva=21){
    return formatter.format(precio*(1+iva/100));
}

console.log(totalCost(100));
console.log(totalCost(200,10));
console.log(totalCost(124.12,11));

/* Crea una función que reciba un texto y lo devuelva al revés */

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hola"));
console.log(reverseString("esto es una prueba"));

