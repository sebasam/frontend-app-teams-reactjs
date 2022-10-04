import React from 'react'

export const Home = () => {
    const requestOptions = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch('http://localhost:3001/api/users/', requestOptions)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

    return (
        <div id='home'>

        </div>
    )
}
