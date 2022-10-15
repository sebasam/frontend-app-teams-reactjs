import React, { useEffect, useState } from 'react'
import { url } from '../Const'
import { GetImage } from './GetImage'

export const GetTeams = () => {
    const[teams, setTeams] = useState([])

    const getAllTeams = () => {
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
    }

    useEffect(() => {
        getAllTeams()
    }, [])

    return(
        <div id='teams'>
            { 
                teams.map(data => {
                    return <div className='span'>
                        <GetImage name={ data.name } /> 
                        <h6 key={ data._id }>   { data.name } </h6>
                    </div>
                    
                }) 
            }
        </div>
        
    )
}