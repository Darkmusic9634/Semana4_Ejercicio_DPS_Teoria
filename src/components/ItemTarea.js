import React from 'react'

function ItemTarea(props) {
    return (
      
            <div className='container-list'>
                <div className='container-input'><input type='checkbox'/></div> 
                <div className='container-tareas'>
              <h4>{props.tarea.nombre}</h4>
                <p>Descripción: {props.tarea.desc}</p>
                <p>Encargado: {props.tarea.encargado} </p>
            </div> 
            </div> 
             
    )
}

export default ItemTarea