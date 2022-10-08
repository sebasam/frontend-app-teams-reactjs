import React, { useState } from 'react'
import { url } from './../Const'

export const GetCategoriesList = (props) => {
    const[categories, setCategories] = useState([])

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

    return(
        <select defaultValue={ props.default }  className="form-select" aria-label="categories__select">
            <option disabled>{ props.default }</option>
            { 
                categories.map(data => {
                    return <option value={ data.name } key={ data._id }> { data.name } </option>
                }) 
            }
        </select>
        
    )
}