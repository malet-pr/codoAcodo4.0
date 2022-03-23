document.getElementById('clean').addEventListener('click',cleanAll);
document.getElementById('circle').addEventListener('click',process1);
document.getElementById('rectangle').addEventListener('click',process2);
document.getElementById('triangle').addEventListener('click',process3);

function cleanAll(){
    document.getElementById('radius').value = 0;
    document.getElementById('side1').value = 0;
    document.getElementById('side2').value = 0;
    document.getElementById('height').value = 0;
    document.getElementById('base').value = 0;
    document.getElementById('out1').innerHTML = "";
    document.getElementById('out2').innerHTML = "";
    document.getElementById('out3').innerHTML = "";
}

function process1() {
    let r = document.getElementById('radius').value;
    if(r < 0){
        alert("El radio no puede ser negativo");
    } else if(r > 100) {
        alert("El rango supera la capacidad de calculo, debe elegir entre 0 y 100");
    } else {
        alert("El área del círculo es: " + circleArea(r));
        document.getElementById('out1').innerHTML = "El área del círculo es: " +  circleArea(r);
    }
}


function process2(){
    let l1 = document.getElementById("side1").value;
    let l2 = document.getElementById("side2").value;
    if((l1 < 0 | l2 < 0) && (l1 > 100 | l2 > 100)){
        alert("El largo de los lados no puede ser negativo \n" +
              "El rango supera la capacidad de calculo, los lados deben ser menores a 100");
    } else if(l1 < 0 | l2 < 0){
        alert("El largo de los lados no puede ser negativo");
    } else if(l1 > 100 | l2 > 100) {
        alert("El rango supera la capacidad de calculo, los lados deben ser menores a 100");
    } else {
        alert("El área del rectángulo es: " + rectangleArea(l1,l2));
        document.getElementById('out2').innerHTML = "El área del rectángulo es: " + rectangleArea(l1,l2);
    }
}

function process3(){
    let h = document.getElementById("height").value;
    let b = document.getElementById("base").value;
    if((h < 0 | b < 0) && (h > 100 | b > 100)){
        alert("La base y la altura no puede ser negativas \n" +
              "El rango supera la capacidad de calculo, base y altura deben ser menores a 100");
    } else if(h < 0 | b < 0){
        alert("La base y la altura no puede ser negativas");
    } else if(h > 100 | b > 100) {
        alert("El rango supera la capacidad de calculo, base y altura deben ser menores a 100");
    } else {
        alert("El área del triángulo es: " + triangleArea(b,h));
        document.getElementById('out3').innerHTML = "El área del triángulo es: " + triangleArea(b,h);
    }
}


function circleArea(radius){
    return 2*Math.PI*Math.pow(radius,2);
}

function rectangleArea(side1,side2){
    return side1*side2;
}

function triangleArea(height,base){
    return height*base*0.5;
}
