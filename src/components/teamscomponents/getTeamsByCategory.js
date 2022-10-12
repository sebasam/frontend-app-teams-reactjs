import { React, useEffect, useLayoutEffect, useState } from 'react'
import { url } from '../Const'
import { GetImage } from '../homecomponents/GetImage'

export const GetTeamsByCategory = (props) => {
    const[team, setTeam] = useState([])

    const getByCategory = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(`${ url }/api/teams/category/${ props.category }`, requestOptions)
            .then(res => res.json())
            .then(data => {
                setTeam(data.team)        
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getByCategory()
    },[props.category])

    return (
        <div className='categoryById'>
            { 
            team.map((data) => {
                return <div>
                    <h6 onClick={ props.click } data-key={ data.name } className='text-white'> { data.name } </h6>
                    <GetImage name={ data.name } />
                </div>
            }) 
            }
        </div>
    )
}