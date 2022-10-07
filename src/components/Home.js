import React, { useState } from 'react'
import './../assets/styles/home.css'
import { url } from './Const'
import { GetCategories } from './homecomponents/GetCategories'
import { GetTeams } from './homecomponents/getTeams'

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
            <div className='container-fluid'>
                <div id='events'>
                    <h2 className='text-white'>Eventos</h2>
                    { 
                        sport.map(data => {
                            return  <span key={ data._id } className='text-white span__events'>{ data.name  }</span>                       
                        })
                    }
                </div>
                <div className='text-white' id='categories__container'>
                    <h2 className='text-white text-center'>Deportes</h2>
                    <GetCategories />
                </div>
                <div className='text-white' id='teams__container'>
                    <h2 className='text-white text-center'>Equipos</h2>
                    <GetTeams />
                </div>
            </div>
        </div>
    )
}
