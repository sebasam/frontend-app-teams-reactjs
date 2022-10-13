import React, { useRef } from 'react'
import './../assets/styles/categories.css'
import { url } from './Const'
import Swal from 'sweetalert2'


export const Categories = () => {
    const refName = useRef(null)

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
            .then(res => { res.json() })
            .then(data => { 
                if(data.ok) {
                    Swal.fire(
                        'Excellent!',
                        `${ data.msg }`,
                        'success'
                    )
                } else {
                    Swal.fire(
                        'Ups!!',
                        `${ data.msg }`,
                        'error'
                    )
                }
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
        <div id='categories__container'>
            <form>
                <input ref={ refName } className='form-control' placeholder='Nombre de categoría' />
                <button onClick={ handleSubmit } type='submit' className='btn btn-danger'>Crear Categoría</button>
            </form>
            <div id='categories__generate'>

            </div>
            <div id='delete__container--categories'>
            
            </div>
            <div id='update__container--categories'>
            
            </div>
        </div>        
    )
}