import { React, useEffect } from 'react'
import { url } from '../Const'

export const DeleteTeam = (props) => {
    const deleteMyTeam = () => {        
        const requestOptions = {
            method: 'DELETE'
        }
        fetch(`${ url }/api/teams/delete/${ props.id }`, requestOptions)
            .then(res => res.json())
            .then(data => {
                if(data.ok) {
                    console.log(data)
                    window.location.reload()
                }       
            })
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        deleteMyTeam()
    }, [])

    return(
        <div id='container__delete-team'>
            <input value={ props.id } placeholder='ID de equipo a eliminar' className='form-control' />
            <button onClick={ deleteMyTeam } className='btn btn-primary'>Eliminar Equipo</button>
        </div>
    )

}