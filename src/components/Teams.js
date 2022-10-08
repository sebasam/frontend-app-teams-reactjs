import React, { useRef } from 'react'
import './../assets/styles/teams.css'
import { GetCategoriesList } from './../components/teamscomponents/getCategory'
import { url } from './../components/Const'

export const Teams = () => {
  const refName = useRef(null)
  const refCategory = useRef(null)
  const refImage = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(refCategory)
  }
  return (
    <div id="teams__container">
      <form role="form" onSubmit={ handleSubmit }>
        <input placeholder='Nombre Equipo' ref={ refName } className='form-control' />
        <GetCategoriesList 
          default='Equipos'
          
        />
        <input name='image' ref={ refImage } className='form-control' id='file' type="file" />
        <button type="submit" className="btn btn-danger">Crear Equipo</button>
      </form>
    </div>
  )
}
