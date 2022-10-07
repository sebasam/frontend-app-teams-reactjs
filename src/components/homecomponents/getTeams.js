import React, { useState } from 'react'
import { url } from '../Const'

export const GetTeams = () => {
    const[teams, setTeams] = useState([])

    const requestOptions = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch(`${ url }/api/teams`, requestOptions)
        .then(res => res.json())
        .then(data => {
            setTeams(data.team)        
        })
        .catch(err => console.log(err))

    return(
        <div id='teams'>
            { 
                teams.map(data => {
                    return <span key={ data._id }> { data.name } </span>
                }) 
            }
        </div>
        
    )
}