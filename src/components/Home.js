import React, { useState } from 'react'
import './../assets/styles/home.css'
import { url } from './Const'

export const Home = () => {
    const [sport, setSports] = useState([])
    const requestOptions = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch(`${ url }/api/events`, requestOptions)
        .then(res => res.json())
        .then(data => {
            setSports(data.events)          
        })
        .catch(err => console.log(err))
    return (
        <div id='home'>
            <div className='container'>
                <div id='events'>
                    <h2 className='text-white'>Eventos</h2>
                    { 
                        sport.map(data => {
                            return  <span className='text-white'>{ data.name  }</span>                       
                        })
                    }
                </div>
                <div className='text-white' id='teams'>
                    Equipos
                </div>
            </div>
        </div>
    )
}
