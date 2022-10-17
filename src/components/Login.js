import React, { useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { url } from './Const'
import { Register } from './Register'
import Swal from 'sweetalert2'

export const Login = () => {    
    let containerStyle = {
        height: '90vh',
        backgroundImage: 'url("https://media.istockphoto.com/photos/full-stadium-and-neoned-colorful-flashlights-background-picture-id1276444914?b=1&k=20&m=1276444914&s=170667a&w=0&h=FKHO_16rIS7zdUYBJ0yWMa5MkcAGvgnhDiKOztsbgzg=")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 50%)',
        gridTemplateRows: '100%',
        justifyItems: 'center',
        alignItems: 'center'
    }
    let formStyle = {
        display: 'grid',
        gridTemplateColumns: '100%',
        gridTemplateRows: 'repeat(auto-fit, auto)',
        rowGap: '1rem'
    }
    const refEmail = useRef(null)
    const refPassword = useRef(null)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: refEmail.current.value, password: refPassword.current.value })         
        }
        fetch(`${ url }/api/users/login`, requestOptions)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                if(data.ok) {
                    Swal.fire(
                        'Done!',
                        'Welcome to Quiimba Sports',
                        'success'
                    ).then(() => {
                        localStorage.setItem('token', data.token)
                        localStorage.setItem('username', data.name)
                        window.location.reload()                                             
                    })                  
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

    useEffect(() => {
        if(localStorage.length > 0) {
            navigate('/home')
        }
    }, [])

    return (
        <div style={ containerStyle } className='container-fluid'>
            <div className='login__container'>
                <h2 className='text-center'>Login</h2>
                <form onSubmit={ handleSubmit } style={ formStyle }>
                    <input ref={ refEmail } className='form-control' placeholder='Email' type='email' />
                    <input ref={ refPassword } className='form-control' placeholder='Password' type='password' />
                    <button type='submit' className='btn btn-info text-white'>Iniciar Sesión</button>
                </form>
            </div>
            <Register />            
        </div>
    )
}