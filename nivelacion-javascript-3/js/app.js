document.getElementById('clean').addEventListener('click',cleanAll);
document.getElementById('circle').addEventListener('click',process1);

function cleanAll(){
    document.getElementById('radius').value = 0;
    document.getElementById('out1').innerHTML = "";
}

function process1() {
    let r = document.getElementById('radius').value
    if(r < 0){
        alert("El radio no puede ser negativo");
    } else if(r > 100) {
        alert("El rango supera la capacidad de calculo, debe elegir entre 0 y 100");
    } else {
        alert("El área del círculo es: " + circleArea(r));
        document.getElementById('out1').innerHTML = "El área del círculo es: " +  circleArea(r);
    }
}

function circleArea(radius){
    return 2*Math.PI*Math.pow(radius,2);
}