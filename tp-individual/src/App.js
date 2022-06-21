import React from 'react'
import {TareasContador} from "./TareasContador"
import {TareasBuscador} from "./TareasBuscador"
import {TareasLista} from "./TareasLista"
import {TareasItem} from "./TareasItem"
import {CrearTareasBoton} from "./CrearTareasBoton"
import './App.css';

const defaultTareas = [
  {id:0, nombre: "Estudiar React", completado: true},
  {id:1, nombre: "Juntarme con mi Grupo", completado: true},
  {id:2, nombre: "Pensar nuestro Proyecto", completado: false},
  {id:3, nombre: "Realizar repositorio", completado: false},

];

const App = () => {
  const [tareas,setTareas] = React.useState(defaultTareas);
  const [valorBuscador,setvalorBuscador] = React.useState("");
  const completas = tareas.filter(tareas => tareas.completado).length;
  const totales = tareas.length;
  let buscarTareas = [];
  if(valorBuscador.length <= 0){
    buscarTareas = tareas;
  } else {
    buscarTareas = tareas.filter(tareas=>{
        const tareasTexto = tareas.nombre.toLowerCase();
        const buscadorTexto = valorBuscador.toLowerCase();
      return tareasTexto.includes(buscadorTexto);
    });
  }

  return (
<>
<TareasContador
  completas = {completas}
  totales = {totales}
/>
<TareasBuscador
  valorBuscador = {valorBuscador}
  setvalorBuscador = {setvalorBuscador}
/>
<p></p>
<TareasLista>
  {buscarTareas.map(tarea =>(
      <TareasItem
          key= {tarea.nombre}
          nombre= {tarea.nombre}
          completado = {tarea.completado}
      />
  ))}
</TareasLista>

<CrearTareasBoton/>
</>

  );

}

export {App}
