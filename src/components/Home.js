import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './../assets/styles/home.css'

import { GetCategories } from './homecomponents/GetCategories'
import { GetEvents } from './homecomponents/GetEvents'
import { GetTeams } from './homecomponents/getTeams'

export const Home = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
        window.location.reload()
    }   

    return (
        <div id='home'>
            <div className='container-fluid'>
                <GetEvents />
                <div className='text-white' id='categories__container'>
                    <h2 className='text-white text-center'>Deportes</h2>
                    <GetCategories />
                </div>
                <div className='text-white' id='teams__container'>
                    <h2 className='text-white text-center'>Equipos</h2>
                    <GetTeams />
                </div>
                <div className='text-white d-flex justify-content-center align-items-center flex-column' id='welcome__container'>
                    <h1>Welcome to quiimba sports { localStorage.getItem('username') } </h1>
                    <h3 id='logout' onClick={ handleLogout } className='text-danger'>Cerrar Sesión</h3>
                </div>
            </div>
        </div>
    )
}
