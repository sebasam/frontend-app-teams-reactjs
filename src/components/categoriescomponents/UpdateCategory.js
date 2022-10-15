import React, { useState, useEffect } from 'react'
import { url } from '../Const'
import Swal from 'sweetalert2'

export const UpdateCategory = (props) => {
    const[myId, setId] = useState('')
    const updateMyTeam = () => {  
        console.log(props.myName)
        const requestOptions = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: props.myName })           
        }        
        fetch(`${ url }/api/categories/update/${ myId }`, requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setId('')
                Swal.fire(
                    'Excellent!',
                    `${ data.msg }`,
                    'success'
                ).then(() => {
                    window.location.reload()
                })  
            })
            .catch(err => {
                Swal.fire(
                    'Ups!!',
                    'Check the fields',
                    'error'
                )
                console.log(err)
            })
    }

    useEffect(() => {
        setId(props.myId)
    }, [props.myId])

    return(
        <div id='category__update--component'>
            <input value={ myId } placeholder='Id de Categoría a eliminar' className='form-control' />
            <input onChange={ props.change } placeholder='Nuevo nombre' className='form-control' />
            <button onClick={ updateMyTeam } className='btn btn-primary'>Actualizar Categoria</button>
        </div>
    )
}