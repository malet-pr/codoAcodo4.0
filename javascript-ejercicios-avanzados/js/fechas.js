/* Realiza un script que escriba en el documento la fecha y hora actual. La salida deberá tener elsiguiente formato:
Hoy es martes, 29 de Marzo de 2022 y son las 14:32 horas. */

/* 2. Realiza un script que pida un nombre y dos apellidos e indique el tiempo que se tardó en introducir los datos. 
La salida sería algo así como : En introducir Luís Perez Alonso ha tardado 25 segundos. */ 

/* 3. Realiza un script pida un mes y año e imprima su calendario. No hace falta esmerarse en la presentación del
calendario, el calendario simplificado puede ser del tipo:
OCTUBRE – 2022
1 (miercoles), 2 (jueves), ….. , 31 (viernes). */


document.getElementById('button-01').addEventListener('click',process1);
document.getElementById('button-02').addEventListener('click',process2);
document.getElementById('button-03').addEventListener('click',process3);

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const months = ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE',
                'OCTUBRE','NOVIEMBRE','DICIEMBRE'];
const days = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];

function process1(){
    const currentDate = new Date();
    const datePart = currentDate.toLocaleDateString('es-AR', options);
    const hourPart = currentDate.getHours() + ":" + currentDate.getMinutes();
    document.getElementById('out1').innerHTML = `Hoy es ${datePart} y son las ${hourPart} horas.` ;
}

function process2(){
    const start = new Date();
    let name = prompt ("Ingrese su nombre", "");
    let lastName1 = prompt ("Ingrese su primer apellido", "");
    let lastName2 = prompt ("Ingrese su segundo apellido", "");
    const end = new Date();
    const elapsedTime = Math.round((end.getTime()-start.getTime())/1000);
    document.getElementById('out2').innerHTML = `En introducir ${name} ${lastName1} ${lastName2} ha tardado ${elapsedTime} segundos.`;
}

function process3(){
    let yearText = prompt ("Ingrese el año", "");
    let monthText = prompt ("Ingrese el mes", "");
    const date = new Date();
    date.setFullYear(parseInt(yearText),parseInt(monthText)-1,1);
    document.getElementById('out3').innerHTML = months[parseInt(monthText)-1] + " - " + parseInt(yearText);
    document.getElementById('out4').innerHTML = getCallendar(date);
}

function getCallendar(originalDate){
    let result = [];
    for(i = 1; i <= getLastDay(originalDate); i++){
        let date = new Date();
        date.setFullYear(originalDate.getFullYear(),originalDate.getMonth(),i);
        result.push(` ${date.getDate()} (${days[date.getDay()]}) `)
    }
    return result;
}

function getLastDay(date){
    date.setMonth(date.getMonth() + 1, 0);
    return date.getDate();
}
