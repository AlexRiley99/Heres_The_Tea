import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar(){
    return(
        <nav>
            <Link className="navLink" to="/Menu">Menu</Link>
            <Link className="navLink" to="/Shop">Shop</Link>
            <Link className="navLink" to="/About">About</Link>
        </nav>
    );
}

export default Navbar;