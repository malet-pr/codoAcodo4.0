import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {IoCheckmarkSharp,IoCheckmarkDoneSharp,IoCloseCircleOutline} from "react-icons/io5";
import "./TareasItem.css";


function TareasItem(props) {

  function Completado() {
    const completado = props.completado;
    return completado ?  <IoCheckmarkDoneSharp /> : <IoCheckmarkSharp onClick={onCompletado}/> ;
  }

  const onCompletado = ()=>{
    alert (`Completaste la tarea ${props.nombre}`);
  }

  const onBorrado = () =>{
    alert (`Borraste la tarea ${props.nombre}`);
  }

  return [
    <ListGroup.Item  className="d-flex justify-content-between align-items-start" id="stripped" >
      <span className={`Icon Icon-check ${props.completado && ' Icon-check--completado'}`}>
        <Completado />
      </span>
      <p className={`TareasItem-p ${props.completado && 'TareasItem-p--completado'}`}>
        {props.nombre} 
      </p> 
      <span className="Icon Icon-delete" onClick={onBorrado}>
       <IoCloseCircleOutline/>
      </span>
    </ListGroup.Item>
  ];
}
export { TareasItem };
