import React, { useRef } from 'react'
import { url } from './Const'
import Swal from 'sweetalert2'

export const Register = () => {
    let formStyle = {
        display: 'grid',
        gridTemplateColumns: '100%',
        gridTemplateRows: 'repeat(auto-fit, auto)',
        rowGap: '1rem'
    }
    const refName = useRef(null)
    const refEmail = useRef(null)
    const refPassword = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: refName.current.value, email: refEmail.current.value, password: refPassword.current.value })         
        }
        fetch(`${ url }/api/users`, requestOptions)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                if(data.ok) {
                    Swal.fire(
                        'Done!',
                        'User Created!',
                        'success'
                    )                    
                } else {
                    Swal.fire(
                        'Ups!!',
                        'Check the fields',
                        'error'
                    )
                }
            })
            .catch(error => {
                Swal.fire(
                    'Ups!!',
                    `${ error }`,
                    'error'
                )
            })
    }

    return (
        <div className='register__container'>
            <h2 className='text-center'>SignUp</h2>
            <form onSubmit={ handleSubmit } style={ formStyle }>
                <input ref={ refName } className='form-control' placeholder='Name' type='text' />
                <input ref={ refEmail } className='form-control' placeholder='Email' type='email' />
                <input ref={ refPassword } className='form-control' placeholder='Password' type='password' />
                <button type='submit' className='btn btn-success text-white'>Registrar</button>
            </form>
        </div>
    )
}