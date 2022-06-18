import React from 'react'
import Form from 'react-bootstrap/Form';

const TareasBuscador = ()=> {
  const [valorBuscador,setvalorBuscador] = React.useState("");
  const onBuscadorCambio = (event) =>{
    console.log (event.target.value)
    setvalorBuscador(event.target.value)
  }
  return (
    <Form>
      <Form.Control size="lg" type="text" 
        id="tareasBuscador" 
        placeholder = "Título de la Nota"
        value={valorBuscador}
        onChange={onBuscadorCambio}/> 
    </Form>
  );
}

export {TareasBuscador }

