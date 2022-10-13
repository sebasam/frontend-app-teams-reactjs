import React, { useState, useEffect } from 'react'
import { url } from '../Const'

export const GetTeamsList = (props) => {
    const[teams, setTeams] = useState([])
    const getEvents = () => {
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
        getEvents()
    }, [])

    return(
        <select  onChange={ props.change } defaultValue={ props.default }  className="form-select" aria-label="categories__select">
            <option disabled>{ props.default }</option>
            { 
                    teams.map(data => {
                    return <option onClick={ props.click } data-key={ data.category } value={ data.name } key={ data._id }> { data.name } - { data.category } </option>
                }) 
            }
        </select>
        
    )
}