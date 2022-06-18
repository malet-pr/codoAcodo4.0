let estadoLicuadora = "apagado";
let sonidoLicuadora = document.querySelector("#licuadora-sonido");
let sonidoBoton = document.querySelector ("#licuadora-boton-sonido");
let licuadora = document.querySelector("#licuadora")

let boton = document.querySelector("#licuadora-boton")

boton.addEventListener("click", ()=>{
    controlarLicuadora ()

})

function controlarLicuadora (){

    if (estadoLicuadora == "apagado"){
        estadoLicuadora = "encendido";
        hacerBrrBrr ()
        licuadora.classList.add("activa")
    }else{
        estadoLicuadora = "apagado";
        hacerBrrBrr ()
        licuadora.classList.remove("activa")

    }

}

function hacerBrrBrr (){
if (sonidoLicuadora.paused){
    sonidoBoton.play();
    sonidoLicuadora.play();
}else{
    sonidoBoton.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0 ;/*  reincio el audio al segundo 0 */
}

}

