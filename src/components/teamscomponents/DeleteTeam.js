import React, { useEffect, useState} from 'react'
import { url } from '../Const'
import Swal from 'sweetalert2'

export const DeleteTeam = (props) => {
    const[myId, setId] = useState('')
    console.log(myId)  
    const deleteMyTeam = () => {         
        const requestOptions = {
            method: 'DELETE'            
        }             
        fetch(`${ url }/api/teams/delete/${ myId }`, requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setId('')
                Swal.fire(
                    'Excellent!',
                    `${ data.msg }`,
                    'success'
                )     
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
        <div id='container__delete-team'>
            <input value={ myId } placeholder='Nombre de equipo a eliminar' className='form-control' />
            <button onClick={ deleteMyTeam } className='btn btn-primary'>Eliminar Equipo</button>
        </div>
    )
}