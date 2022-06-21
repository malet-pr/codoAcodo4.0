import React from 'react'
import "./TareasContador.css"


const TareasContador =({completas,totales}) => {
  return (
<h2 className="TareasContador">Completaste {completas} de {totales} tareas</h2>
  );
}

export {TareasContador};