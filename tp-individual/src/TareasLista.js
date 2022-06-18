import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


const TareasLista = (props)=> {
  return (
    <ListGroup variant="flush">     
      {props.children}
    </ListGroup>
  )
}

export {TareasLista }
