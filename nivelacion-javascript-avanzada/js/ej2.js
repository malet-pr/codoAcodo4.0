$(function() {$("#tabs").tabs();});

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
            alert(err);
            return false;
        } 
    }
    return true;
}

/* 
13 - Que muestre un menú que contemple las opciones “Archivo”, “Buscar”, y “Salir”, en caso de que no se introduzca 
    una opción correcta se notificará por pantalla.
*/

function update(){
    let select = document.getElementById('action');
    let option = select.options[select.selectedIndex];
    fill(option.value);
}

function fill(sel){
    if(sel=='error'){
        alert("Esa no es una opción válida");
        document.getElementsById('msg').innerHTML = "";
    } else {
        switch (sel){
            case 'file':
                message = 'Quiere archivar algo.';
                break;
            case 'search':
                message = 'Quiere buscar algo.';
                break;
            case 'exit':
                message = 'Quiere salir.';
                break;
            default:
        }
        document.getElementById('msg').innerHTML = message ;
    }
}


/*
18 - Que muestre un menú donde las opciones sean “Equilátero”, “Isósceles” y “Escaleno”, pida una opción y calcule 
    perímetro del triángulo seleccionado.
*/    
function pick(){
    let option = document.querySelector('input[name="triangle"]:checked').value;
    let perimeter = getPerimeter(option);
    if(!isNaN(perimeter)){
        document.getElementById('msg2').innerHTML = `El perímetro es igual a ${perimeter}` ;
    }
}

function getPerimeter(option) {
    let s1,s2,s3;
    let str;
    let arr = [];
    let arrNum = [];
    switch(option){
        case 'eq':
            s1 = prompt('Ingrese el largo de los lados','');
            if(!validateFloat(s1)){
                alert('El valor ingresado no es correcto')
                break;
            }
            return parseFloat(s1)*3;
        case 'is':
            str = prompt('Introduzca primero el largo de los lados iguales y luego el largo del diferente separados por coma');
            arr = str.split(",");
            arrNum = [];
            if(arr.length != 2){
                alert('Usted no ha introducido dos números separados por coma');
            } else if(validateArrayOfNumbers(arr,2)) {
                s1 = parseFloat(arr[0]);
                s2 = parseFloat(arr[1]);
            }
            return s1*2+s2; 
        default:
            str = prompt('Introduzca el largo de cada lado separados por coma');
            arr = str.split(",");
            arrNum = [];
            if(arr.length != 3){
                alert('Usted no ha introducido tres números separados por coma');
            } else if(validateArrayOfNumbers(arr,3)) {
                s1 = parseFloat(arr[0]);
                s2 = parseFloat(arr[1]);
                s3 = parseFloat(arr[2]);
            }
            return s1+s2+s3; 
    }
}




//19 - Que pase de Kg a otra unidad de medida de masa, mostrar en pantalla un menú con las opciones posibles.




