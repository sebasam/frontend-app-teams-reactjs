import React, { useState, useRef } from 'react'
import './../assets/styles/teams.css'
import { GetCategoriesList } from './../components/teamscomponents/getCategory'
import { url } from './../components/Const'
import uploadService from '../services/uploadService'


export const Teams = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState()
  const [category, setCategory] = useState('')
  const [path, setPath] = useState('')   
  const myCategory = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(category)
    uploadService.sendImages(name, image, category)
      .then(result => {
        console.log(result)
    })
  }


  return (
    <div id="teams__container">
      <form role="form" onSubmit={ handleSubmit }>
        <input placeholder='Nombre Equipo' onChange={ (e) => setName(e.target.value) } className='form-control' />
        <GetCategoriesList 
          default='Equipos'
          change={ e => setCategory(e.target.value) }
        />
        <input onChange={(e) => setImage(e.target.files[0]) } name='image' className='form-control' id='file' type="file" />
        <button type="submit" className="btn btn-danger">Crear Equipo</button>
      </form>
    </div>
  )
}
