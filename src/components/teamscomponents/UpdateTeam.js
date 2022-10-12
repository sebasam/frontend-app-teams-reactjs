import React from 'react'

export const UpdateTeam = (props) => {
    const[myId, setId] = useState('') 
    const updateMyTeam = () => {         
        const requestOptions = {
            method: 'PUT'           
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
        <div id='container__update-team'>
            <input value={ myId } placeholder='Nombre de equipo a eliminar' className='form-control' />
            <input ref={ props.current } placeholder='Nombre de equipo a eliminar' className='form-control' />
            <button onClick={ updateMyTeam } className='btn btn-primary'>Actualizar Equipo</button>
        </div>
    )
}