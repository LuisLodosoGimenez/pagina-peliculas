import React, { useEffect, useState } from 'react'
import { Editar } from './Editar'

export const Listado = ({listadoState, setListadoState}) => {


    const [editar, setEditar] = useState(0)

    useEffect(() => {
        
        conseguirPeliculas()
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));
        if (peliculas != null) {
            setListadoState(peliculas)
            return peliculas
        }else{
            setListadoState([])
            return []
        }
    }

    const borrarPeli = (id) => {
        let peliculas = conseguirPeliculas()
        let nuevo_array_peliculas = peliculas.filter(peli => peli.id !== id)
        setListadoState(nuevo_array_peliculas)
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_peliculas))

    }

    

  return (
    <>

    {listadoState != null ? 
        listadoState.map(peli=> {
            return(
                <article key={peli.id} className="peli-item">
                    <h3 className="title">{peli.titulo}</h3>
                    <p className="description">{peli.descripcion}</p>

                    <button className="edit" onClick={ () => {
                        setEditar(peli.id)
                    }}>Editar</button>
                    <button className="delete" onClick={ () => borrarPeli(peli.id)}>Borrar</button>

                    {/*Aparece formulario editar*/}
                    
                    {editar === peli.id && (
                        <Editar peli={peli} conseguirPeliculas={conseguirPeliculas}
                        setEditar={setEditar} setListadoState={setListadoState}/>
                    )}

                </article>
            )
        })

    :   <h2> No hay películas para mostrar</h2>
    }
    </>
  )
}
