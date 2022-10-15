import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { url } from "../Const";

export const UpdateEvent = (props) => {
    const[myId, setId] = useState('')
    const updateMyEvent = () => {  
        console.log(props.myName)
        const requestOptions = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ gameDate: props.myDate})           
        }        
        fetch(`${ url }/api/events/update/${ myId }`, requestOptions)
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
        <div id='event__update--component'>
            <input value={ myId } placeholder='Id de Evento a actualizar' className='form-control' />
            <input onChange={ props.change } type='datetime-local' className='form-control' />
            <button onClick={ updateMyEvent } className='btn btn-primary'>Actualizar Evento</button>
        </div>
    )
}