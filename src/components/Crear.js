import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

    const tituloComponente = "Añadir película"

    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    })


    const {titulo, descripcion} = peliState;


    const ConseguirDatosFormulario = e => {
        e.preventDefault()

        let target = e.target
        let titulo = target.titulo.value
        let descripcion = target.descripcion.value

        let peli = {
            id: new Date(),
            titulo,
            descripcion,
        }

        setPeliState(peli)

        setListadoState(elementos => {
            return [...elementos, peli]
        })

        GuardarEnStorage("pelis",peli)
    }

    
 
  return (
    <>
    <div className="add">
                <h3 className="title">{tituloComponente}</h3>
                <strong>
                     {(titulo && descripcion) && "Has creado la pelicula: " + peliState.titulo}
                </strong>
               
                <form onSubmit={ConseguirDatosFormulario}>
                    <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
                    <textarea id="descripcion" name="descripcion" placeholder="Descripción"></textarea>
                    <input type="submit" id="save" value="Guardar" />
                </form>
            </div>
    </>
  )
}
