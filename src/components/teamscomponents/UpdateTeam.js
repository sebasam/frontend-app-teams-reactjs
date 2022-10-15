import React, { useState, useEffect } from 'react'
import { url } from '../Const'
import Swal from 'sweetalert2'

export const UpdateTeam = (props) => {
    const[myId, setId] = useState('')
    const updateMyTeam = () => {  
        console.log(props.myname)
        const requestOptions = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: props.myname })           
        }        
        fetch(`${ url }/api/teams/update/${ myId }`, requestOptions)
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
        setId(props.id)
    }, [props.id])

    return(
        <div id='container__update-team'>
            <input value={ myId } placeholder='Nombre de equipo a eliminar' className='form-control' />
            <input onChange={ props.change } placeholder='Nuevo nombre' className='form-control' />
            <button onClick={ updateMyTeam } className='btn btn-primary'>Actualizar Equipo</button>
        </div>
    )
}