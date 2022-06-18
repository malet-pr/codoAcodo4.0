import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import "./TareasItem.css"

function TareasItem(props) {

  const onCompletado = ()=>{
    alert (`Completaste la tarea ${props.nombre}`)
  }

  const onBorrado = () =>{
    alert (`Borraste la tarea ${props.nombre}`)
  }

  return [
    <ListGroup.Item  className="d-flex justify-content-between align-items-start item" variant="primary" >
      
      <span className={`Icon Icon-check ${props.completado &&'Icon-check--active'}`} onClick={onCompletado}>
        √
      </span>
      <p className={`TareasItem-p ${props.completado && 'TareasItem-p--completado'}`}>
        {props.nombre} 
      </p> 
      <span className="Icon Icon-delete" onClick={onBorrado}>
        X
      </span>
    </ListGroup.Item>
  ];
}
export { TareasItem };
