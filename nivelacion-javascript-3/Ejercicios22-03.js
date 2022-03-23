

/* Ejercicio 1 Generar número aleatorio dentro de un rango

Calcular un número random o aleatorio dentro de un rango en Javascript no es tan trivial 
como en otros lenguajes. 

La función que usaremos (Math.random())
nos devuelve un número aleatorio con decimales entre 0 y 1. 

 Luego nosotros, haciendo uso de sumas y redondeos debemos transformar
ese número aleatorio entre 0 y 1 a un número aleatorio entre 25 y 75, por ejemplo.

Para ello, yo utilizo la fórmula que indico a continuación. 
La copio, la pego y sustituyo los valores. Es una fórmula fácil de razonar, pero francamente, cuando la necesito, la copio y la pego:

Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

Como ejemplo, si deseamos generar un número aleatorio entre 10 y 5, la sentencia sería
*/
                 //Math.floor (Math.random() * (MAX - MIN + 1)) + MIN;            





//Ejercicio 2
// Ejercicios números aleatorio
//investigar https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

//1. Obtener un número aleatorio entre 5 y 7.

console.log(Math.floor(Math.random() *(7-5+1)+5));

//2. Ejercicio letra aleatoria

//Obtener una letra aleatoria de tu nombre.

//Tendrás que usar los siguientes códigos:


//nombre.charAt();
//nombre.length;
function getRandomLetter(name){
    let len = name.length;
    let number = Math.floor(Math.random() * (len));
    return name.charAt(number);
}
console.log(getRandomLetter("Nuria"));

/* Ejercicio 3
//Calculamos un número aleatorio en un rango comprendido entre 0 y el número de letras de tu nombre.
Utilizamos ese número aleatorio para obtener la letra de tu nombre que ocupa esa posición.
Mostramos la letra en la pagina. */

