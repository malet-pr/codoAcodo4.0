import React from 'react'
import "./CrearTareasBoton.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function CrearTareasBoton() {

  const onClickBoton = (msg) =>{
    alert (msg)
  }

  return (<button className="CrearTareasBoton" 
  onClick={() => onClickBoton ("Acá se deberia abrir el modal")}>
  + </button>)

}

export {CrearTareasBoton}