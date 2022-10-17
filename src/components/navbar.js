import './../assets/styles/nav.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const handleDisabled = () => {
        
        if(localStorage.getItem('token') === null){
            return (                
                <div className='navbar-nav'>
                    <NavLink to='/' end className={ ({ isActive }) => isActive ? 'myActive nav-link text-white' : 'nav-link text-white' } aria-current="page">Login</NavLink>
                </div>
            )
        }else{
            return (                
                <div className='navbar-nav'>
                    <NavLink to='/home' className={ ({ isActive }) => isActive ? 'myActive nav-link text-white' : 'nav-link text-white'  } aria-current="page">Home</NavLink>
                    <NavLink to='/categories' className={ ({ isActive }) => isActive ? 'myActive nav-link text-white' : 'nav-link text-white' } >Categorías</NavLink>
                    <NavLink to='/teams' className={ ({ isActive }) => isActive ? 'myActive nav-link text-white' : 'nav-link text-white' } >Equipos</NavLink>
                    <NavLink to='/events' className={ ({ isActive }) => isActive ? 'myActive nav-link text-white' : 'nav-link text-white' }>Eventos</NavLink>                    
                </div>                        
            )
        }
    }
    return(
        <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">Quiimba Sports</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                {
                    handleDisabled()
                }
            </div>
            </div>
        </nav>
        
    )
}

export default Navbar