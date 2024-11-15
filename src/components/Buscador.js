import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busquedaState, setBusquedaState] = useState('')
  const [noEncontrado, setNoEncontrado] = useState(false)

  const buscarPeli = (e) => {
    
    setBusquedaState(e.target.value)

    let pelis_encontradas = Array.isArray(listadoState)
    ? listadoState.filter(peli => 
      peli.titulo.toLowerCase().includes(busquedaState.toLocaleLowerCase())
    )
    : [];


    if(busquedaState.length <= 1 || pelis_encontradas.length <= 0){
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"))
      setNoEncontrado(true)
    }else{
      setNoEncontrado(false)
    }
    
    setListadoState(pelis_encontradas) 
  }

  return (
    <>
    <div className="search">
                <h3 className="title">Buscador</h3>
                { (noEncontrado && busquedaState.length > 1) && (
                  <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
                )}
                
                <form>
                    <input type="text" id="search_field" name='busqueda' 
                    autoComplete='off' value={busquedaState}
                    onChange={buscarPeli}/>
                    <button id="search">Buscar</button>
                </form>
            </div>
    </>
  )
}
