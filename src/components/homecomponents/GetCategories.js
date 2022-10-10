import React, { useState, useEffect } from 'react'
import { url } from '../Const'

export const GetCategories = () => {
    const[categories, setCategories] = useState([])

    const getCategories = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(`${ url }/api/categories`, requestOptions)
            .then(res => res.json())
            .then(data => {
                setCategories(data.category)        
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getCategories()
    })

    return(
        <div id='categories'>
            { 
                categories.map(data => {
                    return <span key={ data._id }> { data.name } </span>
                }) 
            }
        </div>
        
    )
}