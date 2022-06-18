import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


const TareasLista = (props)=> {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        {props.children}
      </ListGroup.Item>
    </ListGroup>
  )
}

export {TareasLista }
