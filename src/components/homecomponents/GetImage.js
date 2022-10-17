import { React, useState, useEffect } from 'react'
import { url } from '../Const'

export const GetImage = (props) => {
    let style = {
        width: '50px'
    }
    const [path, setPath] = useState('')    
    const chargeImages = () => {
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
    }

    useEffect(() => {
        chargeImages()
    },[props.name])

    return (
        <img className='home__image' style={ style } src={path} />
    )   
    
}
