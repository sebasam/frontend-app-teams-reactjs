import React, { useState, useRef, useEffect } from 'react'
import './../assets/styles/teams.css'
import { GetCategoriesList } from './../components/teamscomponents/getCategory'
import uploadService from '../services/uploadService'
import { GetTeamsByCategory } from './teamscomponents/getTeamsByCategory'
import { DeleteTeam } from './teamscomponents/DeleteTeam'
import Swal from 'sweetalert2'
import { UpdateTeam } from './teamscomponents/UpdateTeam'


export const Teams = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState()
  const [category, setCategory] = useState('')
  const [ myId, setId ] = useState('')
  const [ newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    uploadService.sendImages(name, image, category)
      .then(result => {
        Swal.fire(
          'Excellent!',
          'Team Created!',
          'success'
        ).then(() => {
          window.location.reload()
      })
      })
      .catch(error => {
        Swal.fire(
          'Ups!!',
          'Check the fields',
          'error'
        )
      })
  }
    return (
    <div id="teams__container">
      <form role="form" onSubmit={ handleSubmit }>
        <input value={ name } onChange={ (e) => { setName(e.target.value) } } placeholder='Nombre Equipo' className='form-control' />
        <GetCategoriesList 
          default='Equipos'
          change={ e => { setCategory(e.target.value) } }
        />
        <input onChange={ (e) => setImage(e.target.files[0]) } name='image' className='form-control' id='file' type="file" />
        <button type="submit" className="btn btn-danger">Crear Equipo</button>
      </form>
      <div className='teams__generate'>
        <GetTeamsByCategory click={ (e) => { setId(e.target.getAttribute('data-key')) } }  category={ category } />
      </div>  
      <div className='delete__container-teams'>
        <DeleteTeam id={ myId } />
      </div>
      <div className='update__container-teams'>
        <UpdateTeam change={ (e) => { setNewName(e.target.value) } } myname={ newName }  id={ myId } />
      </div>    
    </div>
  )
}
