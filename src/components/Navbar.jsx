import {NavLink} from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar(){
    return(
        <nav className="navBar">
            <NavLink 
                className={({ isActive }) => isActive ? "navLink active" : "navLink"}
                to="/Menu">Menu</NavLink>
            <NavLink 
                className={({ isActive }) => isActive ? "navLink active" : "navLink"}
                to="/Shop">Shop</NavLink>
            <NavLink 
                className={({ isActive }) => isActive ? "navLink active" : "navLink"} 
                to="/About">About</NavLink>
        </nav>
    );
}

export default Navbar;