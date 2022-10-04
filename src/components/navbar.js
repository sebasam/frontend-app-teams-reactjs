import './../assets/styles/nav.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    let activeStyle = {
        background: "#33ffcc",
        borderRadius: "50%",
        color: "#7300e6"       
    }
    return(
            <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Quiimba Sports</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='/' style={ activeStyle } className="nav-link active" aria-current="page">Home</Link>
                        <Link to='/categories' className="nav-link text-white" >Categorías</Link>
                        <Link to='/teams' className="nav-link text-white" >Equipos</Link>
                        <Link to='/events' className="nav-link text-white">Eventos</Link>
                    </div>
                </div>
                </div>
            </nav>
        
    )
}

export default Navbar