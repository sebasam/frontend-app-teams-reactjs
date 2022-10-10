import { React, useState } from 'react'
import { url } from '../Const'

export const GetImage = (props) => {
    const [path, setPath] = useState('')
    const requestOptions = {
        method: 'GET',
        headers: {
            "Content-Type": "image/png"
        }
    }
    fetch(`${ url }/api/teams/${ props.name }`, requestOptions)
        .then(res => res)
        .then(data => {
            setPath(data.url)        
        })
        .catch(err => console.log(err))
    
    return <>
        <img src={path} />   
    </>
}