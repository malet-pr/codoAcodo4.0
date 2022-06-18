import React from 'react'
import {TareasContador} from "./TareasContador"
import {TareasBuscador} from "./TareasBuscador"
import {TareasLista} from "./TareasLista"
import {TareasItem} from "./TareasItem"
import {CrearTareasBoton} from "./CrearTareasBoton"

const tareas = [
  {id:0, nombre: "Estudiar React", completado: true},
  {id:1, nombre: "Juntarme con mi Grupo", completado: false},
  {id:2, nombre: "Pensar nuestro Proyecto", completado: false},
  {id:3, nombre: "Realizar repositorio", completado: false},

];

const App = () => {
  return (
<>
<TareasContador/>
<TareasBuscador/>
<p></p>
<TareasLista>
  {tareas.map(tareas =>(
      <TareasItem
          key= {tareas.id}
          nombre= {tareas.nombre}
          completado = {tareas.completado}
      />
  ))}
</TareasLista>

<CrearTareasBoton/>
</>

  );

}

export {App}
