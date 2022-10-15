import React, { useState } from 'react'
import { GetTeamsList } from './eventscomponents/GetTeamsList'
import { UpdateEvent } from './eventscomponents/UpdateEvents'
import './../assets/styles/events.css'
import Swal from 'sweetalert2'
import { url } from './Const'
import { GetEvents } from './homecomponents/GetEvents'
import { DeleteEvent } from './eventscomponents/DeleteEvent'

export const Events = () => {
    const [team1, setTeam1] = useState('')
    const [team2, setTeam2] = useState('')
    const [category1, setCategory1] = useState('')
    const [category2, setCategory2] = useState('')
    const [myDate, setMyDate] = useState('')
    const [myId, setMyId] = useState('')

    const handleEvent = (e, set, set2) => {
        let option = e.target.selectedIndex
        set(e.target.value)
        set2(e.target.options[option].getAttribute('data-key'))
    }

    const handleSubmit = (event) => {
        event.preventDefault()        
        if(category1 !== category2) {
            Swal.fire(
                'Ups!!',
                'Teams in differents categories, cannot be play VS',
                'error'
            )
        } else {
            const requestOptions = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ team1: team1, team2: team2, category: category1, gameDate: myDate })
            }
            fetch(`${ url }/api/events`, requestOptions)
                .then((res) => {
                    res.json()
                })
                .then((data) => {
                    console.log(data)
                    Swal.fire(
                        'Success',
                        'Event Created!',
                        'success'
                    ).then(() => {
                        window.location.reload()
                    })
                })
                .catch((error) => {
                    Swal.fire(
                        'Error',
                        `${ error }`,
                        'error'
                    )
            })
        }
        
    }

    return (
        <div id='events__container'>
            <form onSubmit={ handleSubmit }>
                <GetTeamsList change={ (e) => { handleEvent(e, setTeam1, setCategory1) } } default='Equipo 1'  />
                <GetTeamsList change={ (e) => { handleEvent(e, setTeam2, setCategory2) } } default='Equipo 2'  />
                <input type='text' value={ category1 } className='form-control' placeholder='Categoría Equipo 1'/>
                <input type='text' value={ category2 } className='form-control' placeholder='Categoría Equipo 2'/>
                <input onChange={ (e) => { setMyDate(e.target.value) } } type='datetime-local' className='form-control' />
                <button type='submit' className='btn btn-danger'>Crear Evento</button>
            </form>
            <div id='events__generate'>
                <GetEvents click={ (e) => { setMyId(e.target.getAttribute('data-key')) } } />
            </div>
            <div id='delete__container-events'>
                <DeleteEvent myId={ myId } />
            </div>
            <div id='update__container-events'>
                <UpdateEvent change={ (e) => { setMyDate(e.target.value) } } myId={ myId } myDate={ myDate } />
            </div>
        </div>
    )
}