import React, { useState, useEffect } from "react";
import { url } from './../Const'

export const GetEvents = (props) => {
    const [sport, setSports] = useState([])
    const [arr, setArr] = useState([])   
    const getAllEvents = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(`${ url }/api/events`, requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setSports(data.events)          
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllEvents()
        setArr(sport)
    }, [arr.length !== sport.length])

    return(
        <div id='events'>
            <h2 className='text-white'>Eventos</h2>
            { 
                sport.map(data => {
                    return  <span onClick={ props.click } data-key={ data._id } key={ data.gameDate } className='text-white text-center span__events'>{ data.name } <br /> { data.gameDate }</span>                       
                })
            }
        </div>
    )
}