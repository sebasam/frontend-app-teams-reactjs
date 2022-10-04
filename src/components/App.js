import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Categories } from './Categories';
import { Home } from "./Home";
import Navbar from "./navbar";
import { Teams } from "./Teams";
import { Events } from './Events';

export const App = () => {
    let container = {
        backgroundImage: 'url("https://t4.ftcdn.net/jpg/03/90/66/17/360_F_390661775_BY3omV6LTS2064GbghxN9MBxgp4oV67W.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%'
    }
    return (
        <div style={ container }>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={ <Home /> } />
                    <Route path="/teams" exact element={ <Teams /> } />
                    <Route path="/categories" exact element={ <Categories /> } />
                    <Route path="/events" exact element={ <Events /> } />
                </Routes>
                <div>
                </div>
            </Router>
        </div>
    )
}
