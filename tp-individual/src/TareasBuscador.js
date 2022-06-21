import React from 'react'
import Form from 'react-bootstrap/Form';
import "./TareasBuscador.css"

const TareasBuscador = ({valorBuscador,setvalorBuscador})=> {
  const onBuscadorCambio = (event) =>{
    console.log (event.target.value)
    setvalorBuscador(event.target.value)
  }
  return (
    <Form>
      <Form.Control size="lg" type="text" 
        id="tareasBuscador" 
        placeholder = "BUSCAR NOTA"
        value={valorBuscador}
        onChange={onBuscadorCambio}/> 
    </Form>
  );
}

export {TareasBuscador }

