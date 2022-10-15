import React, { useEffect, useRef, useState } from 'react'
import './../assets/styles/categories.css'
import { url } from './Const'
import Swal from 'sweetalert2'
import { GetCategories } from './homecomponents/GetCategories'
import { DeleteCategory } from './categoriescomponents/DeleteCategory'
import { UpdateCategory } from './categoriescomponents/UpdateCategory'


export const Categories = () => {
    const refName = useRef(null)
    const [ myId, setMyId ] = useState('')
    const [ newName, setNewName ] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: refName.current.value })         
        }
        fetch(`${ url }/api/categories`, requestOptions)
            .then(res => res.json())
            .then(data => { 
                if(data.ok) {
                    Swal.fire(
                        'Done!',
                        `${ data.msg }`,
                        'success'
                    ).then(() => {
                        window.location.reload()
                    }) 
                    
                } else {
                    Swal.fire(
                        'Ups!!',
                        'Check fields! or category exist!',
                        'error'
                    )
                }
            })
            .catch(error => {
                console.log(error)
                Swal.fire(
                    'Ups!!',
                    'Check the fields',
                    'error'
                )
            })
    }

    
    return (
        <div id='categories__container'>
            <form onSubmit={ handleSubmit }>
                <input ref={ refName } className='form-control' placeholder='Nombre de categoría' />
                <button type='submit' className='btn btn-danger'>Crear Categoría</button>
            </form>
            <div id='categories__generate'>
                <GetCategories click={ (e) => { setMyId(e.target.getAttribute('data-key')) } } />
            </div>
            <div id='delete__container--categories'>
                <DeleteCategory  myId={ myId } />
            </div>
            <div id='update__container--categories'>
                <UpdateCategory change={ (e) => { setNewName(e.target.value) } } myName={ newName }  myId={ myId }  />
            </div>
        </div>        
    )
}