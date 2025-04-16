import {Link} from 'react-router-dom';
import logo from '../assets/httLogo.png';
import '../styles/Header.css';

function Header(){
    return(
        <header>
            <div className="logoContainer">
                <Link to="/">
                    <img src={logo} alt="Here's The Tea Logo - A tea cup with steam coming from it" className="logo"></img>
                </Link>
            </div>
                <h1 className="shopName">Here's The Tea</h1>
        </header>
    );
}

export default Header;