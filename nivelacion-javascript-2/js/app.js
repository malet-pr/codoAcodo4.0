document.getElementById('button-01').addEventListener('click',process1);
document.getElementById('button-02').addEventListener('click',process2);
document.getElementById('button-03').addEventListener('click',process3);
document.getElementById('button-04').addEventListener('click',process4);

function process1(){
    let text = prompt ("Ingrese un texto", "");
    let n1 = text.length;
    let n2 = text.replace(/\s/g, "").length;
    alert("El texto ingresado tiene " + n1 + " caracteres \n de los cuales " + n2
          + " son letras y " + (n1-n2) + " son espacios");     
} 

function process2(){
    let text = prompt ("Ingrese un texto", "");
    let number = prompt ("Ingrese la cantidad de caracteres a mostrar","")
    let result = text.slice(0,parseInt(number));
    alert(result); 
}

function process3(){
    let text = prompt ("Ingrese un texto", "");
    let character = prompt ("Ingrese el caracter que quiere usar para separar "," ")
    const myArray = text.split(character.charAt(0));
    alert(myArray);
}

function process4(){
    let text = prompt ("Ingrese un texto", "");
    let number = prompt ("Ingrese la cantidad de veces que se tiene que repetir","")
    let result = (text + " ").repeat(parseInt(number));
    alert(result); 
}