import React, { useState } from 'react'
import { GetTeamsList } from './eventscomponents/GetTeamsList'
import './../assets/styles/events.css'

export const Events = () => {
    const [team1, setTeam1] = useState('')
    const [team2, setTeam2] = useState('')
    const [category1, setCategory1] = useState('')
    const [category2, setCategory2] = useState('')

    const handleEvent = (e, set, set2) => {
        let option = e.target.selectedIndex
        set(e.target.value)
        set2(e.target.options[option].getAttribute('data-key'))
    }

    const handleSubmit = () => {
        
    }

    return (
        <div id='events__container'>
            <form>
                <GetTeamsList change={ (e) => { handleEvent(e, setTeam1, setCategory1) } } default='Equipo 1'  />
                <GetTeamsList change={ (e) => { handleEvent(e, setTeam2, setCategory2) } } default='Equipo 2'  />
                <input type='text' value={ category1 } className='form-control' placeholder='Categoría Equipo 1'/>
                <input type='text' value={ category2 } className='form-control' placeholder='Categoría Equipo 2'/>
                <input type='datetime-local' className='form-control' />
                <button className='btn btn-danger'>Crear Evento</button>
            </form>
        </div>
    )
}