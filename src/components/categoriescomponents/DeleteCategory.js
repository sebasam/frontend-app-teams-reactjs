import React, { useEffect, useState } from 'react'
import { url } from '../Const'
import Swal from 'sweetalert2'

export const DeleteCategory = (props) => {
    const [myId, setMyId] = useState('')
    const handleDelete = () => {
        const requestOptions = {
            method: 'DELETE'
        }
        fetch(`${ url }/api/categories/delete/${ myId }`, requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data)
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
                        'Check fields! or category doesnt exist!',
                        'error'
                    )
                }
            })
            .catch(error => {
                console.log(error)
                Swal.fire(
                    'Ups!!',
                    'There are any error',
                    'error'
                )
            })
    }

    useEffect(() => {
        setMyId( props.myId )
    }, [ props.myId ])

    return(
        <div className='category__delete--component'>
            <input ref={ props.current } placeholder='ID categoría' value={ myId } className='form-control' />
            <button onClick={ handleDelete } type='button' className='btn btn-primary'>Borrar Categoría</button>
        </div>
    )
}