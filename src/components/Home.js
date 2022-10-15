import React, { useState } from 'react'
import './../assets/styles/home.css'

import { GetCategories } from './homecomponents/GetCategories'
import { GetEvents } from './homecomponents/GetEvents'
import { GetTeams } from './homecomponents/getTeams'

export const Home = () => {       
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
            </div>
        </div>
    )
}
