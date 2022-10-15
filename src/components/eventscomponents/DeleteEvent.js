import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { url } from "../Const";

export const DeleteEvent = (props) => {
    const[myId, setId] = useState('')
    const deleteMyEvent = () => {  
        const requestOptions = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }           
        }        
        fetch(`${ url }/api/events/delete/${ myId }`, requestOptions)
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
        <div id='event__delete--component'>
            <input value={ myId } placeholder='Id de Evento a eliminar' className='form-control' />
            <button onClick={ deleteMyEvent } className='btn btn-primary'>Eliminar Evento</button>
        </div>
    )
}